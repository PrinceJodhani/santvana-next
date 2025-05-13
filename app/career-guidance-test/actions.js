"use server";

import { query } from "@/lib/db";

/**
 * Submits personality data to PostgreSQL database
 * @param {Object} data - The form data containing user information
 * @returns {Promise<Object>} - Object containing success status and data
 */



// Add this function to get the count of personality tests
export async function getPersonalityTestCount() {
  try {
    const sqlQuery = `
      SELECT COUNT(*) as count FROM personality;
    `;
    
    const result = await query(sqlQuery);
    return {
      success: true,
      count: parseInt(result.rows[0].count)
    };
  } catch (error) {
    console.error("Error counting personality tests:", error);
    return {
      success: false,
      error: "Failed to count tests",
      count: 0
    };
  }
}

// Modify the submitPersonalityData function to check the count first
export async function submitPersonalityData(data) {
  try {
    // Get current count
    const countResult = await getPersonalityTestCount();
    
    // Define your limit (10, 15, 500 etc.)
    const TEST_LIMIT = 510; // Change this to your desired limit
    
    // Check if limit reached
    if (countResult.success && countResult.count >= TEST_LIMIT) {
      return { 
        success: false, 
        error: "Test limit reached",
        limitReached: true
      };
    }
    
    // Rest of the function remains the same
    const { full_name, dob, age, std, contact, email } = data;
    
    if (!full_name || !dob || !age || !std || !contact || !email) {
      return { 
        success: false, 
        error: "All fields are required" 
      };
    }
    
    const sqlQuery = `
      INSERT INTO personality (full_name, dob, age, std, contact, email)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id;
    `;
    
    const values = [full_name, dob, parseInt(age), std, contact, email];
    
    try {
      const result = await query(sqlQuery, values);
      const insertedId = result.rows[0].id;
      
      return {
        success: true,
        message: "Personality data submitted successfully",
        id: insertedId
      };
    } catch (dbError) {
      console.error("Database error submitting personality data:", dbError);
      return {
        success: false,
        error: "Database error. Please try again."
      };
    }
  } catch (error) {
    console.error("Error submitting personality data:", error);
    return {
      success: false,
      error: "Failed to submit data. Please try again."
    };
  }
}


// export async function submitPersonalityData(data) {
//   try {
//     // Validate data
//     const { full_name, dob, age, std, contact, email } = data;
    
//     if (!full_name || !dob || !age || !std || !contact || !email) {
//       return { 
//         success: false, 
//         error: "All fields are required" 
//       };
//     }
    
//     // Insert data into the personality table
//     const sqlQuery = `
//       INSERT INTO personality (full_name, dob, age, std, contact, email)
//       VALUES ($1, $2, $3, $4, $5, $6)
//       RETURNING id;
//     `;
    
//     const values = [full_name, dob, parseInt(age), std, contact, email];
    
//     try {
//       const result = await query(sqlQuery, values);
//       const insertedId = result.rows[0].id;
      
//       return {
//         success: true,
//         message: "Personality data submitted successfully",
//         id: insertedId
//       };
//     } catch (dbError) {
//       console.error("Database error submitting personality data:", dbError);
//       return {
//         success: false,
//         error: "Database error. Please try again."
//       };
//     }
//   } catch (error) {
//     console.error("Error submitting personality data:", error);
//     return {
//       success: false,
//       error: "Failed to submit data. Please try again."
//     };
//   }
// }

/**
 * Updates personality test results in the database
 * @param {number} userId - The user ID
 * @param {Object} section1Results - Results from section 1
 * @returns {Promise<Object>} - Success status
 */
export async function updateTestResults(userId, section1Results) {
  try {
    // Update the database with results
    const sqlQuery = `
      UPDATE personality
      SET section1_results = $1
      WHERE id = $2;
    `;
    
    await query(sqlQuery, [JSON.stringify(section1Results), userId]);
    
    return {
      success: true,
      message: "Test results updated successfully"
    };
  } catch (error) {
    console.error("Error updating test results:", error);
    return {
      success: false,
      error: "Failed to update results"
    };
  }
}

/**
 * Gets personality data by ID
 * @param {number} id - The personality ID to fetch
 * @returns {Promise<Object>} - Object containing the personality data
 */
export async function getPersonalityDataById(id) {
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
          error: "Personality data not found"
        };
      }
      
      return {
        success: true,
        data: result.rows[0]
      };
    } catch (dbError) {
      console.error("Database error fetching personality data:", dbError);
      return {
        success: false,
        error: "Database error. Please try again."
      };
    }
  } catch (error) {
    console.error("Error fetching personality data:", error);
    return {
      success: false,
      error: "Failed to fetch data"
    };
  }
}