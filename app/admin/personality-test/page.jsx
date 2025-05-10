"use client";

import { useState, useEffect, useRef, Suspense,Fragment } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { 
  Search, 
  Download, 
  Printer, 
  Eye, 
  Calendar, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  User,
  FileSpreadsheet,
  Loader,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { formatDistanceStrict } from "date-fns";
import { getPersonalityTests } from "./actions";

// Create a separate component for the page content that uses useSearchParams
function AdminTestsContent() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("test_started_at");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [detailView, setDetailView] = useState(null);
  const [isExporting, setIsExporting] = useState(false);
  
  const itemsPerPage = 10;
  const tableRef = useRef(null);
  const detailRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Load tests data
  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        const page = parseInt(searchParams.get("page")) || 1;
        setCurrentPage(page);
        
        const search = searchParams.get("search") || "";
        setSearchQuery(search);
        
        const response = await getPersonalityTests({
          page,
          limit: itemsPerPage,
          search,
          sortField,
          sortDirection
        });
        
        if (response.success) {
          setTests(response.data);
          setTotalPages(Math.ceil(response.total / itemsPerPage));
        } else {
          console.error("Error fetching tests:", response.error);
        }
      } catch (error) {
        console.error("Failed to fetch tests:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTests();
  }, [searchParams, sortField, sortDirection]);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    
    try {
      // If dateString is already a Date object, convert it to ISO string
      const dateToFormat = dateString instanceof Date ? dateString.toISOString() : dateString;
      const date = new Date(dateToFormat);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return "Invalid date";
      }
      
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  // Calculate time taken between start and completion
  const calculateTimeTaken = (startTime, endTime) => {
    if (!startTime || !endTime) return "In progress";
    
    try {
      // Convert Date objects to ISO strings if needed
      const startToUse = startTime instanceof Date ? startTime.toISOString() : startTime;
      const endToUse = endTime instanceof Date ? endTime.toISOString() : endTime;
      
      const start = new Date(startToUse);
      const end = new Date(endToUse);
      
      // Check if dates are valid
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return "Invalid time";
      }
      
      return formatDistanceStrict(end, start, { addSuffix: false });
    } catch (error) {
      console.error("Error calculating time taken:", error);
      return "Invalid time";
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    router.push(`/admin/personality-test?page=1&search=${searchQuery}`);
  };

  // Handle sort
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    setCurrentPage(1);
  };

  // Handle pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    router.push(`/admin/personality-test?page=${page}&search=${searchQuery}`);
  };

  // View test details
  const viewTestDetails = (test) => {
    setDetailView(test);
  };

  // Close detail view
  const closeDetailView = () => {
    setDetailView(null);
  };

  // Export all tests to PDF
  const exportAllToPdf = async () => {
    if (!tableRef.current) return;
    
    try {
      setIsExporting(true);
      
      const canvas = await html2canvas(tableRef.current, {
        scale: 1,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`personality_tests_${new Date().toISOString().split('T')[0]}.pdf`);
      
    } catch (error) {
      console.error("Error exporting to PDF:", error);
      alert("There was an error exporting to PDF. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  // Export single test to PDF
  const exportSingleToPdf = async () => {
    if (!detailRef.current || !detailView) return;
    
    try {
      setIsExporting(true);
      
      const canvas = await html2canvas(detailRef.current, {
        scale: 1.5,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`personality_test_${detailView.id}_${detailView.full_name}.pdf`);
      
    } catch (error) {
      console.error("Error exporting to PDF:", error);
      alert("There was an error exporting to PDF. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  // Print table
  const handlePrint = () => {
    window.print();
  };

  // Parse and display JSON data
  const parseJsonField = (jsonData) => {
    if (!jsonData) return null;
    
    try {
      // Handle case where jsonData is already an object
      if (typeof jsonData === 'object' && jsonData !== null) {
        return jsonData;
      }
      
      // Handle JSON string case
      if (typeof jsonData === 'string') {
        return JSON.parse(jsonData);
      }
      
      // Fall back to original data if we can't parse it
      return jsonData;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  };

  // Render personality type scores
  const renderPersonalityScores = (jsonData) => {
    if (!jsonData) return <p>No data</p>;
    
    const scores = parseJsonField(jsonData);
    if (!scores) return <p>Invalid data</p>;
    
    return (
      <div className="space-y-2">
        {Object.entries(scores)
          .sort((a, b) => b[1] - a[1])
          .map(([type, score], index) => (
            <div key={type} className="flex items-center justify-between">
              <span className="font-medium">{type}:</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                  <div
                    className={`h-2.5 rounded-full ${index === 0 ? 'bg-indigo-600' : index === 1 ? 'bg-indigo-400' : 'bg-indigo-200'}`}
                    style={{ width: `${(score / 7) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm">{score}/7</span>
              </div>
            </div>
          ))}
      </div>
    );
  };

  // Render aptitude recommendations
  const renderAptitudeSummary = (jsonData) => {
    if (!jsonData) return <p>No data</p>;
    
    const summary = parseJsonField(jsonData);
    if (!summary) return <p>Invalid data</p>;
    
    return (
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-1">Aptitude:</h4>
          <p>{summary.aptitude} Aptitude</p>
        </div>
        
        <div>
          <h4 className="font-medium mb-1">Personality Types:</h4>
          <p>{summary.personalityTypes?.join(" & ") || "N/A"}</p>
        </div>
        
        <div>
          <h4 className="font-medium mb-1">Potential Streams:</h4>
          <p>{summary.streams?.join(", ") || "N/A"}</p>
        </div>
        
        <div>
          <h4 className="font-medium mb-1">Interest Areas:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {summary.interestAreas?.map((area, i) => (
              <li key={i}>{area}</li>
            )) || <li>No data</li>}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-1">Career Fields:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {summary.careerFields?.map((field, i) => (
              <li key={i}>{field}</li>
            )) || <li>No data</li>}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-indigo-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Personality Test Admin Panel</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Action Buttons & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <button
              onClick={exportAllToPdf}
              disabled={isExporting || loading || tests.length === 0}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExporting ? (
                <Loader size={16} className="animate-spin mr-2" />
              ) : (
                <Download size={16} className="mr-2" />
              )}
              Export as PDF
            </button>
            <button
              onClick={handlePrint}
              disabled={loading || tests.length === 0}
              className="flex items-center px-4 py-2 bg-white text-indigo-600 border border-indigo-200 rounded-md shadow hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Printer size={16} className="mr-2" />
              Print Table
            </button>
            <button
              onClick={() => router.push("/admin/personality-test-export")}
              disabled={loading || tests.length === 0}
              className="flex items-center px-4 py-2 bg-white text-green-600 border border-green-200 rounded-md shadow hover:bg-green-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileSpreadsheet size={16} className="mr-2" />
              Export to Excel
            </button>
          </div>
          
          <form onSubmit={handleSearch} className="w-full sm:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email or contact..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-3 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        )}
        
        {/* No Results */}
        {!loading && tests.length === 0 && (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">No personality tests found.</p>
          </div>
        )}
        
        {/* Tests Table */}
        {!loading && tests.length > 0 && (
          <div className="overflow-x-auto bg-white shadow rounded-lg" ref={tableRef}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button 
                      className="flex items-center"
                      onClick={() => handleSort("id")}
                    >
                      ID
                      {sortField === "id" && (
                        sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button 
                      className="flex items-center"
                      onClick={() => handleSort("full_name")}
                    >
                      Full Name
                      {sortField === "full_name" && (
                        sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button 
                      className="flex items-center"
                      onClick={() => handleSort("email")}
                    >
                      Email
                      {sortField === "email" && (
                        sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    <button 
                      className="flex items-center"
                      onClick={() => handleSort("contact")}
                    >
                      Contact
                      {sortField === "contact" && (
                        sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    <button 
                      className="flex items-center"
                      onClick={() => handleSort("test_started_at")}
                    >
                      Started At
                      {sortField === "test_started_at" && (
                        sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    <button 
                      className="flex items-center"
                      onClick={() => handleSort("test_completed_at")}
                    >
                      Completed At
                      {sortField === "test_completed_at" && (
                        sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </button>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Time Taken
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tests.map((test) => (
                  <tr key={test.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {test.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {test.full_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {test.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                      {test.contact ? `+91 ${test.contact}` : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                      {formatDate(test.test_started_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell">
                      {formatDate(test.test_completed_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell">
                      {calculateTimeTaken(test.test_started_at, test.test_completed_at)}
                    </td>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => viewTestDetails(test)}
                        className="text-indigo-600 hover:text-indigo-900 flex items-center"
                      >
                        <Eye size={16} className="mr-1" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Pagination */}
        {/* Pagination */}
{!loading && totalPages > 1 && (
  <div className="flex justify-between items-center mt-6 bg-white p-4 rounded-lg shadow">
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
    >
      <ChevronLeft size={16} className="mr-1" />
      Previous
    </button>
    
    <div className="flex items-center">
      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter(page => 
          page === 1 || 
          page === totalPages || 
          (page >= currentPage - 1 && page <= currentPage + 1)
        )
        .map((page, i, arr) => (
          <Fragment key={page}>
            {i > 0 && arr[i - 1] !== page - 1 && (
              <span className="px-2 py-1 text-gray-500">...</span>
            )}
            <button
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 mx-1 rounded-md text-sm font-medium ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          </Fragment>
        ))}
    </div>
    
    <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
    >
      Next
      <ChevronRight size={16} className="ml-1" />
    </button>
  </div>
)}
      </main>
      
      {/* Detail Modal */}
      {detailView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-indigo-600 px-6 py-4 flex justify-between items-center rounded-t-lg">
              <h2 className="text-xl font-bold text-white">Test Details</h2>
              <div className="flex space-x-2">
                <button
                  onClick={exportSingleToPdf}
                  disabled={isExporting}
                  className="flex items-center px-3 py-1 bg-white text-indigo-600 rounded-md text-sm hover:bg-indigo-50 transition-colors"
                >
                  {isExporting ? (
                    <Loader size={14} className="animate-spin mr-1" />
                  ) : (
                    <Download size={14} className="mr-1" />
                  )}
                  Export
                </button>
                <button
                  onClick={closeDetailView}
                  className="text-white hover:text-indigo-100"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6" ref={detailRef}>
              {/* Personal Information */}
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-indigo-800 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{detailView.full_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{detailView.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contact</p>
                    <p className="font-medium">{detailView.contact ? `+91 ${detailView.contact}` : "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="font-medium">{detailView.std}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">{typeof detailView.dob === 'object' && detailView.dob instanceof Date 
                      ? detailView.dob.toLocaleDateString() 
                      : detailView.dob || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="font-medium">{detailView.age || "N/A"}</p>
                  </div>
                </div>
              </div>
              
              {/* Test Information */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Test Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Calendar size={18} className="text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Started At</p>
                      <p className="font-medium">
                        {typeof detailView.test_started_at === 'object' && detailView.test_started_at instanceof Date 
                          ? formatDate(detailView.test_started_at.toISOString()) 
                          : formatDate(detailView.test_started_at)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar size={18} className="text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Completed At</p>
                      <p className="font-medium">
                        {detailView.test_completed_at 
                          ? (typeof detailView.test_completed_at === 'object' && detailView.test_completed_at instanceof Date
                              ? formatDate(detailView.test_completed_at.toISOString())
                              : formatDate(detailView.test_completed_at)) 
                          : "In progress"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock size={18} className="text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Time Taken</p>
                     
                        <p className="font-medium">{calculateTimeTaken(
                        typeof detailView.test_started_at === 'object' ? detailView.test_started_at.toISOString() : detailView.test_started_at,
                        typeof detailView.test_completed_at === 'object' ? detailView.test_completed_at.toISOString() : detailView.test_completed_at
                      )}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className={`font-medium ${detailView.test_completed_at ? "text-green-600" : "text-yellow-600"}`}>
                      {detailView.test_completed_at ? "Completed" : "In Progress"}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Section 1 Results */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Section 1: Personality Results</h3>
                {detailView.section1_results ? (
                  renderPersonalityScores(detailView.section1_results)
                ) : (
                  <p className="text-gray-500 italic">No results available</p>
                )}
              </div>
              
              {/* Section 2 Results (if available) */}
              {detailView.section2_results && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Section 2: Aptitude Results</h3>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    {(() => {
                      // Use a function to allow more complex logic
                      try {
                        const s2Results = parseJsonField(detailView.section2_results);
                        
                        // Debug log to see what we're getting
                        console.log("Section 2 Results:", s2Results);
                        
                        // Check if we have valid results with a score
                        if (s2Results && (s2Results.score !== undefined || s2Results.attempted !== undefined || s2Results.correct !== undefined)) {
                          return (
                            <div className="flex items-center">
                              <div className="mr-4">
                                <div className="text-3xl font-bold text-indigo-600">
                                  {s2Results.score !== undefined ? `${s2Results.score}%` : 'N/A'}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {s2Results.correct !== undefined ? `${s2Results.correct}` : '0'}/
                                  {s2Results.totalQuestions !== undefined ? s2Results.totalQuestions : '25'} correct
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                  <div 
                                    className="bg-indigo-600 h-4 rounded-full" 
                                    style={{ width: `${s2Results.score || 0}%` }}
                                  ></div>
                                </div>
                                <div className="mt-1 text-xs text-gray-500 text-right">
                                  {s2Results.attempted !== undefined ? s2Results.attempted : '0'}/
                                  {s2Results.totalQuestions !== undefined ? s2Results.totalQuestions : '25'} attempted
                                </div>
                              </div>
                            </div>
                          );
                        } else if (s2Results && typeof s2Results === 'object' && Object.keys(s2Results).length > 0) {
                          // Maybe the structure is different than expected
                          return (
                            <div>
                              <p className="font-medium">Raw Results Available:</p>
                              <pre className="mt-2 bg-gray-100 p-3 rounded-md text-xs overflow-auto max-h-40">
                                {JSON.stringify(s2Results, null, 2)}
                              </pre>
                            </div>
                          );
                        } else {
                          return <p className="text-gray-500 italic">Incomplete assessment</p>;
                        }
                      } catch (error) {
                        console.error("Error rendering section 2 results:", error);
                        return <p className="text-red-500 italic">Error displaying results</p>;
                      }
                    })()}
                  </div>
                </div>
              )}
              
              {/* Aptitude Summary & Career Recommendations */}
              {detailView.aptitude_summary && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Career Recommendations</h3>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    {renderAptitudeSummary(detailView.aptitude_summary)}
                  </div>
                </div>
              )}
            </div>
            
            <div className="sticky bottom-0 bg-gray-50 px-6 py-3 rounded-b-lg border-t border-gray-200">
              <button
                onClick={closeDetailView}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Main component with Suspense boundary
export default function AdminPersonalityTests() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    }>
      <AdminTestsContent />
    </Suspense>
  );
}