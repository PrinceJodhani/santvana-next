"use server";

import { query } from "@/lib/db";

/**
 * Get paginated personality tests with search and sort options
 * @param {Object} options - Options for pagination, search, and sorting
 * @returns {Promise<Object>} - Paginated test results
 */
export async function getPersonalityTests(options = {}) {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      sortField = "test_started_at",
      sortDirection = "desc"
    } = options;
    
    // Calculate offset for pagination
    const offset = (page - 1) * limit;
    
    // Build the WHERE clause for search
    let whereClause = "";
    let params = [];
    
    if (search) {
      whereClause = "WHERE full_name ILIKE $1 OR email ILIKE $1 OR contact ILIKE $1";
      params.push(`%${search}%`);
    }
    
    // Validate sort field to prevent SQL injection
    const validSortFields = [
      "id", "full_name", "email", "contact", "dob", "age", "std",
      "test_started_at", "test_completed_at"
    ];
    
    const safeSort = validSortFields.includes(sortField) ? sortField : "test_started_at";
    const safeSortDirection = sortDirection.toUpperCase() === "ASC" ? "ASC" : "DESC";
    
    // Count total records for pagination
    const countQuery = `
      SELECT COUNT(*) AS total
      FROM personality
      ${whereClause}
    `;
    
    const countResult = await query(countQuery, params);
    const total = parseInt(countResult.rows[0].total);
    
    // Get the paginated records
    const dataQuery = `
      SELECT *
      FROM personality
      ${whereClause}
      ORDER BY ${safeSort} ${safeSortDirection}
      LIMIT $${params.length + 1} OFFSET $${params.length + 2}
    `;
    
    params.push(limit, offset);
    
    const dataResult = await query(dataQuery, params);
    
    return {
      success: true,
      data: dataResult.rows,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    };
  } catch (error) {
    console.error("Error fetching personality tests:", error);
    return {
      success: false,
      error: "Failed to fetch personality tests"
    };
  }
}

/**
 * Get a single personality test by ID
 * @param {number} id - The test ID
 * @returns {Promise<Object>} - Test data
 */
export async function getPersonalityTestById(id) {
  try {
    const sqlQuery = `
      SELECT *
      FROM personality
      WHERE id = $1
    `;
    
    const result = await query(sqlQuery, [id]);
    
    if (result.rows.length === 0) {
      return {
        success: false,
        error: "Personality test not found"
      };
    }
    
    return {
      success: true,
      data: result.rows[0]
    };
  } catch (error) {
    console.error("Error fetching personality test:", error);
    return {
      success: false,
      error: "Failed to fetch personality test"
    };
  }
}

/**
 * Export all personality tests data for Excel/CSV
 * @returns {Promise<Object>} - All test data
 */
export async function exportAllPersonalityTests() {
  try {
    const sqlQuery = `
      SELECT 
        id, 
        full_name, 
        email, 
        contact, 
        dob, 
        age, 
        std,
        test_started_at, 
        test_completed_at,
        section1_results, 
        section2_results, 
        aptitude_summary
      FROM personality
      ORDER BY test_started_at DESC
    `;
    
    const result = await query(sqlQuery);
    
    return {
      success: true,
      data: result.rows
    };
  } catch (error) {
    console.error("Error exporting personality tests:", error);
    return {
      success: false,
      error: "Failed to export personality tests"
    };
  }
}