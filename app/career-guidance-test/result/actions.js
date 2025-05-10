"use server";

import { query } from "@/lib/db";

/**
 * Updates test results in the database
 * @param {Object} data - Contains userId, section1Results, section2Results, aptitudeSummary
 * @returns {Promise<Object>} - Success status and message
 */
export async function updateTestResults(data) {
  try {
    const { userId, section1Results, section2Results, aptitudeSummary } = data;
    
    if (!userId) {
      return {
        success: false,
        error: "User ID is required"
      };
    }
    
    // Calculate test completion time
    const completedAt = new Date().toISOString();
    
    // Update the database with the test results and completion time
    const sqlQuery = `
      UPDATE personality
      SET 
        section1_results = $1,
        section2_results = $2,
        aptitude_summary = $3,
        test_completed_at = $4
      WHERE id = $5
      RETURNING id;
    `;
    
    const values = [
      JSON.stringify(section1Results || {}),
      JSON.stringify(section2Results || {}),
      JSON.stringify(aptitudeSummary || {}),
      completedAt,
      userId
    ];
    
    try {
      const result = await query(sqlQuery, values);
      
      if (result.rows.length === 0) {
        return {
          success: false,
          error: "User not found"
        };
      }
      
      return {
        success: true,
        message: "Test results updated successfully",
        id: result.rows[0].id
      };
    } catch (dbError) {
      console.error("Database error updating test results:", dbError);
      return {
        success: false,
        error: "Database error. Please try again."
      };
    }
  } catch (error) {
    console.error("Error updating test results:", error);
    return {
      success: false,
      error: "Failed to update results"
    };
  }
}

/**
 * Retrieves full user data and test results by ID
 * @param {number} id - The user ID to fetch
 * @returns {Promise<Object>} - User data and test results
 */
export async function getFullResultsById(id) {
  try {
    const sqlQuery = `
      SELECT * FROM personality
      WHERE id = $1;
    `;
    
    try {
      const result = await query(sqlQuery, [id]);
      
      if (result.rows.length === 0) {
        return {
          success: false,
          error: "User not found"
        };
      }
      
      // Parse JSON fields from the database
      const userData = result.rows[0];
      
      try {
        if (userData.section1_results) {
          userData.section1_results = JSON.parse(userData.section1_results);
        }
        
        if (userData.section2_results) {
          userData.section2_results = JSON.parse(userData.section2_results);
        }
        
        if (userData.aptitude_summary) {
          userData.aptitude_summary = JSON.parse(userData.aptitude_summary);
        }
      } catch (parseError) {
        console.error("Error parsing JSON fields:", parseError);
      }
      
      return {
        success: true,
        data: userData
      };
    } catch (dbError) {
      console.error("Database error fetching results:", dbError);
      return {
        success: false,
        error: "Database error. Please try again."
      };
    }
  } catch (error) {
    console.error("Error fetching results:", error);
    return {
      success: false,
      error: "Failed to fetch results"
    };
  }
}