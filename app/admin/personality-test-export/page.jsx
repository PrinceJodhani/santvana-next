"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download, Loader } from "lucide-react";
import { exportAllPersonalityTests } from "../personality-test/actions";
import * as XLSX from 'xlsx';

export default function ExportPersonalityTests() {
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [testsData, setTestsData] = useState([]);
  const [error, setError] = useState(null);
  
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const result = await exportAllPersonalityTests();
        
        if (result.success) {
          setTestsData(result.data);
        } else {
          setError(result.error || "Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleExportExcel = async () => {
    try {
      setExporting(true);
      
      // Format data for export
      const exportData = testsData.map(test => {
        // Parse JSON fields
        const section1Results = test.section1_results ? 
          (typeof test.section1_results === 'string' ? 
            JSON.parse(test.section1_results) : test.section1_results) : {};
            
        const section2Results = test.section2_results ? 
          (typeof test.section2_results === 'string' ? 
            JSON.parse(test.section2_results) : test.section2_results) : {};
            
        const aptitudeSummary = test.aptitude_summary ? 
          (typeof test.aptitude_summary === 'string' ? 
            JSON.parse(test.aptitude_summary) : test.aptitude_summary) : {};
        
        // Format dates
        const formatDate = (dateString) => {
          if (!dateString) return "";
          try {
            const date = new Date(dateString);
            return date.toLocaleString();
          } catch (e) {
            return dateString;
          }
        };
        
        // Get top 2 personality types
        let personalityTypes = [];
        if (section1Results) {
          personalityTypes = Object.entries(section1Results)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 2)
            .map(([type]) => type);
        }
        
        // Calculate time taken
        let timeTaken = "";
        if (test.test_started_at && test.test_completed_at) {
          try {
            const start = new Date(test.test_started_at);
            const end = new Date(test.test_completed_at);
            const diffMs = end - start;
            const diffMins = Math.floor(diffMs / 60000);
            const diffSecs = Math.floor((diffMs % 60000) / 1000);
            timeTaken = `${diffMins}m ${diffSecs}s`;
          } catch (e) {
            timeTaken = "Invalid time";
          }
        }
        
        return {
          "ID": test.id,
          "Full Name": test.full_name,
          "Email": test.email,
          "Contact": test.contact ? `+91 ${test.contact}` : "",
          "Date of Birth": test.dob || "",
          "Age": test.age || "",
          "Education": test.std || "",
          "Started At": formatDate(test.test_started_at),
          "Completed At": formatDate(test.test_completed_at),
          "Time Taken": timeTaken,
          "Status": test.test_completed_at ? "Completed" : "In Progress",
          
          // Personality results (Section 1)
          "Realistic Score": section1Results.Realistic || 0,
          "Investigative Score": section1Results.Investigative || 0,
          "Artistic Score": section1Results.Artistic || 0,
          "Social Score": section1Results.Social || 0,
          "Enterprising Score": section1Results.Enterprising || 0,
          "Conventional Score": section1Results.Conventional || 0,
          "Top Personality Types": personalityTypes.join(", "),
          
          // Aptitude results (Section 2)
          "Aptitude Score": section2Results.score || 0,
          "Correct Answers": section2Results.correct || 0,
          "Total Attempted": section2Results.attempted || 0,
          
          // Recommendations
          "Primary Aptitude": aptitudeSummary.aptitude || "",
          "Streams": aptitudeSummary.streams ? aptitudeSummary.streams.join(", ") : "",
          "Interest Areas": aptitudeSummary.interestAreas ? aptitudeSummary.interestAreas.join(", ") : "",
          "Career Fields": aptitudeSummary.careerFields ? aptitudeSummary.careerFields.join(", ") : ""
        };
      });
      
      // Create worksheet and workbook
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Personality Tests");
      
      // Auto-size columns
      const colWidths = [];
      exportData.forEach(row => {
        Object.keys(row).forEach((k, i) => {
          const length = (row[k] || "").toString().length;
          colWidths[i] = Math.max(colWidths[i] || 0, length, k.length);
        });
      });
      
      worksheet["!cols"] = colWidths.map(w => ({ wch: Math.min(w + 2, 50) }));
      
      // Generate file name with current date
      const date = new Date().toISOString().split('T')[0];
      const fileName = `personality_tests_${date}.xlsx`;
      
      // Save workbook
      XLSX.writeFile(workbook, fileName);
      
    } catch (error) {
      console.error("Error exporting to Excel:", error);
      setError("Failed to export data. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-indigo-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Export Personality Tests</h1>
          <button
            onClick={() => router.push("/admin/personality-test")}
            className="flex items-center px-3 py-1 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors text-sm"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Admin
          </button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Export Personality Tests Data</h2>
          <p className="text-gray-600 mb-6">
            This will export all personality test data to an Excel file (.xlsx) including personal information, test results, and career recommendations.
          </p>
          
          <button
            onClick={handleExportExcel}
            disabled={loading || exporting || testsData.length === 0}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {exporting ? (
              <>
                <Loader size={18} className="animate-spin mr-2" />
                Generating Excel File...
              </>
            ) : (
              <>
                <Download size={18} className="mr-2" />
                Export to Excel
              </>
            )}
          </button>
          
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600">
              {error}
            </div>
          )}
        </div>
        
        {/* Data Preview */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : testsData.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">No data available for export.</p>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Data Preview ({testsData.length} records)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {testsData.slice(0, 5).map((test) => (
                    <tr key={test.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.full_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.contact ? `+91 ${test.contact}` : "N/A"}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {test.test_completed_at ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            In Progress
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {testsData.length > 5 && (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-sm text-gray-500 text-center italic">
                        ... and {testsData.length - 5} more records
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}