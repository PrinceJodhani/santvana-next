"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import {
  Download,
  Loader,
  RefreshCcw,
  CheckCircle,
  BookOpen,
  Link
} from "lucide-react";
import { updateTestResults } from "./actions";

// Import your complete careerMapping object here
// Career mapping based on aptitude and personality types
const careerMapping = {
    "Numerical-Realistic-Investigative": {
      streams: ["Science", "Commerce (Maths required)"],
      interestAreas: [
        "Scientific",
        "Money Analysis",
        "Research",
        "Computer networks"
      ],
      careerFields: [
        "Computer / Data Scientist",
        "Mechanical /  Electrical / Civil Engineer",
        "Chemist (B.Sc in Chemistry)",
        "Financial Analyst",
        "Accountant"
      ],
      recommendedCourses: [
        "B.Sc in Chemistry",
        "B.Sc. in AI & ML"
      ]
    },
    "Numerical-Realistic-Artistic": {
      streams: ["Science (Maths required)"],
      interestAreas: [
        "Data management",
        "Aesthetics",
        "Machines"
      ],
      careerFields: [
        "Architectural Drafter",
        "Animator",
        "Game developer",
        "Industrial Designer",
        "Data Analyst",
        "Product Designer"
      ],
      recommendedCourses: [
        "B.Com. / B.Sc. in Computer Application (Maths Required)",
        "B.Sc. in Computer Science (Maths Required)"
      ]
    },
    "Numerical-Realistic-Social": {
      streams: ["Science", "Commerce"],
      interestAreas: [
        "Community service",
        "Helping",
        "Working outdoors"
      ],
      careerFields: [
        "Financial Advisor (Maths required)",
        "Healthcare Consultant",
        "Healthcare Analyst",
        "Occupational Therapy Assistant",
        "Maths / Statistic Professor (Maths Required)"
      ],
      recommendedCourses: [
        "B.Com. B.Ed. / B.Sc B.Ed",
        "B.Com. in Business Management"
      ]
    },
    "Numerical-Realistic-Enterprising": {
      streams: ["Commerce", "Science (Maths required)"],
      interestAreas: [
        "Business management",
        "Entrepreneurship",
        "Investing"
      ],
      careerFields: [
        "Construction Project Manager",
        "Accountant",
        "Investment Banker",
        "Business Analyst",
        "Marketing Manager",
        "Statistician"
      ],
      recommendedCourses: [
        "B.Sc. in Statistics",
        "B.Com. Regular"
      ]
    },
    "Numerical-Realistic-Conventional": {
      streams: ["Commerce", "Science (Maths required)"],
      interestAreas: [
        "Data management",
        "Accounting",
        "Organization"
      ],
      careerFields: [
        "Quality Control Analyst",
        "Accountant",
        "Auditor",
        "Financial Analyst",
        "Actuarial Scientist"
      ],
      recommendedCourses: [
        "B.Com. Regular",
        "B.Sc. in Statistics"
      ]
    },
    "Numerical-Investigative-Artistic": {
      streams: ["Science", "Commerce (Maths required)"],
      interestAreas: [
        "Mathematics",
        "Research",
        "Self-expression"
      ],
      careerFields: [
        "Data Visualization Specialist",
        "Financial Analyst (Creative Industries)",
        "Game Designer",
        "Scientific Animator",
        "Info graphic Designer"
      ],
      recommendedCourses: [
        "B.Sc. in Data Science / Computer Science",
        "B.Com. in Computer Application"
      ]
    },
    "Numerical-Investigative-Social": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Analysing",
        "Helping",
        "Research",
        "Communication"
      ],
      careerFields: [
        "Epidemiologist",
        "Education Researcher",
        "Health Policy Analyst",
        "Industrial / Forensic Psychologist"
      ],
      recommendedCourses: [
        "B.A. Psychology",
        "B.Sc. in Cyber Security (Maths Required)"
      ]
    },
    "Numerical-Investigative-Enterprising": {
      streams: ["Commerce", "Science (Maths required)"],
      interestAreas: [
        "Mathematics",
        "Research",
        "Business",
        "Entrepreneurship"
      ],
      careerFields: [
        "Investment Banker",
        "Market Research Analyst",
        "Actuary",
        "Chartered Financial Analyst",
        "Data / Computer Scientist"
      ],
      recommendedCourses: [
        "B.Com. Regular / Business Management",
        "B.Sc. in Data Science"
      ]
    },
    "Numerical-Investigative-Conventional": {
      streams: ["Commerce", "Science (Maths required)"],
      interestAreas: [
        "Mathematics",
        "Data management",
        "Research",
        "Accounting"
      ],
      careerFields: [
        "Statistician",
        "Chartered Accountant",
        "Budget Analyst",
        "Aviation Inspector",
        "CFA",
        "Pharmacist"
      ],
      recommendedCourses: [
        "B.Sc. in Math & Chemistry",
        "B.Sc. in Statistics",
        "B.Com. Regular"
      ]
    },
    "Numerical-Artistic-Social": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Computer Programming",
        "Communication",
        "Helping",
        "Culture"
      ],
      careerFields: [
        "Art Program Coordinator",
        "Event Planner (Budget Focus)",
        "Content creation",
        "UI/UX Designer",
        "Social Media Analyst"
      ],
      recommendedCourses: [
        "B.Com Regular",
        "B.Com. in Computer Application (Maths Required)"
      ]
    },
    "Numerical-Artistic-Enterprising": {
      streams: ["Commerce", "Arts"],
      interestAreas: [
        "Mathematics",
        "Business",
        "Self-expression",
        "Entrepreneurship"
      ],
      careerFields: [
        "Film Producer",
        "Advertising Account Manager",
        "Data Visualization (Maths required)",
        "Creative Marketing Manager",
        "Product Manager"
      ],
      recommendedCourses: [
        "B.A. in any Subject",
        "B.Com. in Business Management"
      ]
    },
    "Numerical-Artistic-Conventional": {
      streams: ["Commerce", "Arts", "Science"],
      interestAreas: [
        "Mathematics",
        "Data management",
        "Aesthetics",
        "Art appreciation"
      ],
      careerFields: [
        "Creative Project Accountant (Maths required)",
        "Graphic / Product / Interior Designer",
        "Budget Analyst (Maths required)",
        "Animator",
        "Landscape Architecture"
      ],
      recommendedCourses: [
        "B.Com. B.Ed.",
        "B.Sc. B.Ed."
      ]
    },
    "Numerical-Social-Enterprising": {
      streams: ["Commerce", "Arts"],
      interestAreas: [
        "Business",
        "Helping",
        "Leadership",
        "Well Being"
      ],
      careerFields: [
        "NGO Director",
        "Healthcare Administrator",
        "Business Manager",
        "Financial Adviser",
        "Economist",
        "Computer Scientist"
      ],
      recommendedCourses: [
        "B.Com. in Business Management",
        "B.A. in Economics"
      ]
    },
    "Numerical-Social-Conventional": {
      streams: ["Commerce"],
      interestAreas: [
        "Mathematics",
        "Data management",
        "Helping",
        "Organization"
      ],
      careerFields: [
        "Human Resources Analyst",
        "Policy Analyst",
        "Banker",
        "Business Manager / Administrative",
        "Accountant"
      ],
      recommendedCourses: [
        "B.Com. in Business Management",
        "B.Com. Regular"
      ]
    },
    "Numerical-Enterprising-Conventional": {
      streams: ["Commerce"],
      interestAreas: [
        "Mathematics",
        "Business",
        "Accounting",
        "Investing"
      ],
      careerFields: [
        "Accountant",
        "Banking Executive",
        "Financial Manager",
        "Management Consultant",
        "Business Consultant",
        "Project Manager"
      ],
      recommendedCourses: [
        "B.Com. in Business Management",
        "B.Com. Regular",
        "B.Com. in International Business"
      ]
    },
    "Spatial-Realistic-Investigative": {
      streams: ["Science (Maths required)"],
      interestAreas: [
        "Computer networks",
        "Science",
        "Research",
        "Mathematics"
      ],
      careerFields: [
        "Civil / Mechanical Engineer",
        "Geospatial Analyst",
        "CAD Technician",
        "Robotics Engineer",
        "Mechanical Designer"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Science",
        "B.Sc. in Botany & EVS"
      ]
    },
    "Spatial-Realistic-Artistic": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Machines",
        "Self-expression",
        "Computer networks",
        "Designing",
        "Hospitality"
      ],
      careerFields: [
        "Architect",
        "Industrial Designer",
        "3D Animator",
        "Game Designer",
        "Interior / Fashion / Jewelry Designer",
        "Fine Arts",
        "Culinary Chef"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Application (Maths Required)",
        "B.Sc. in Computer Science (Maths Required)"
      ]
    },
    "Spatial-Realistic-Social": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Working outdoors",
        "Helping",
        "Teamwork",
        "Designing"
      ],
      careerFields: [
        "Occupational Therapist",
        "Sports Coach",
        "AutoCAD Designer",
        "Community Architect",
        "Real Estate Development"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Application (Maths Required)",
        "B.Sc. in Computer Science (Maths Required)"
      ]
    },
    "Spatial-Realistic-Enterprising": {
      streams: ["Commerce", "Science"],
      interestAreas: [
        "Machines",
        "Business",
        "Leadership",
        "Entrepreneurship"
      ],
      careerFields: [
        "Construction Manager",
        "Real Estate Developer",
        "Product Design Entrepreneur",
        "Event Manager",
        "Interior / Jewelry Designer"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Application (Maths Required)",
        "B.Com. in Computer Application (Maths Required)"
      ]
    },
    "Spatial-Realistic-Conventional": {
      streams: ["Science", "Commerce (Maths required)"],
      interestAreas: [
        "Designing",
        "Practical",
        "Analysis",
        "Detailing"
      ],
      careerFields: [
        "Architectural Draftsman",
        "Architecture",
        "Surveyor",
        "Technical Illustrator",
        "Computer-Aided Design (CAD) Specialist"
      ],
      recommendedCourses: [
        "B.Sc. in NS & NT",
        "B.Sc. in Information Technology"
      ]
    },
    "Spatial-Investigative-Artistic": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Computer networks",
        "Aesthetics",
        "Detailing",
        "Visualization"
      ],
      careerFields: [
        "UX/UI Designer",
        "Architecture",
        "Game Developer",
        "Animation Designer",
        "Forensic Sketch Artist",
        "Fine Arts"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Application (Maths Required)",
        "B.Sc. in Computer Science (Maths Required)"
      ]
    },
    "Spatial-Investigative-Social": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Research",
        "Science",
        "Helping",
        "Teamwork"
      ],
      careerFields: [
        "Speech & Language Therapist",
        "Medical Imaging Technologist (MRI/CT)",
        "Neuropsychologist",
        "Architecture",
        "Graphic / Web Designer"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Application (Maths Required)",
        "BA in Psychology"
      ]
    },
    "Spatial-Investigative-Enterprising": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Research",
        "Business",
        "Entrepreneurship",
        "Leadership"
      ],
      careerFields: [
        "Forensic Scientist",
        "Data Scientist / AI",
        "Designer Entrepreneur",
        "Drone Mapping Specialist",
        "Game Developer"
      ],
      recommendedCourses: [
        "B.Sc. in AI & ML (Maths Required)",
        "B.Sc. in Computer Application (Maths Required)"
      ]
    },
    "Spatial-Investigative-Conventional": {
      streams: ["Science", "Commerce (Maths required)"],
      interestAreas: [
        "Data management",
        "Research",
        "Dynamic space management",
        "Organization"
      ],
      careerFields: [
        "Data Analyst",
        "Graphic / Interior Designer",
        "Statistician for Spatial Studies",
        "Computer Scientist",
        "Software Engineer"
      ],
      recommendedCourses: [
        "B.Sc. in Statistics",
        "B.Sc. in Cyber & Digital Science",
        "B.Sc. in Cyber Security (Maths Required)"
      ]
    },
    "Spatial-Artistic-Social": {
      streams: ["Arts", "Science"],
      interestAreas: [
        "Self-expression",
        "Communication",
        "Helping",
        "Visual Art"
      ],
      careerFields: [
        "Art Therapist",
        "Set Designer (Theater)",
        "Interior / Jewelry / Fashion Designer",
        "Visual Storyteller",
        "Photographer",
        "Architecture",
        "Wedding Planner"
      ],
      recommendedCourses: [
        "BA in Psychology",
        "B.Sc. in Computer Application (Maths Required)"
      ]
    },
    "Spatial-Artistic-Enterprising": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Visual Art",
        "Aesthetics",
        "Business",
        "Creativity"
      ],
      careerFields: [
        "Film Art Director",
        "Fashion / Graphic Designer",
        "UX Designer",
        "Photographer",
        "Wedding Planner",
        "Architecture"
      ],
      recommendedCourses: [
        "B.Com. in Business Management",
        "B.Com. in Computer Application (Maths Required)"
      ]
    },
    "Spatial-Artistic-Conventional": {
      streams: ["Arts", "Commerce", "Science"],
      interestAreas: [
        "Data management",
        "Organization",
        "Aesthetics",
        "Visualization"
      ],
      careerFields: [
        "Graphic / Textile Designer",
        "Visual Merchandiser",
        "Interior Designer",
        "Architect",
        "Photographer",
        "Data Scientist (Maths Required)"
      ],
      recommendedCourses: [
        "B.Sc. in Data Science (Maths Required)",
        "BA in any subject"
      ]
    },
    "Spatial-Social-Enterprising": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Client Interaction and management",
        "Leadership",
        "Teamwork",
        "Business"
      ],
      careerFields: [
        "Event / Fashion / Jewelry Designer",
        "Wedding Planner",
        "Design Consultant",
        "Photographer",
        "Graphic Designer"
      ],
      recommendedCourses: [
        "B.Com. - Regular",
        "B.Com. in Business Management"
      ]
    },
    "Spatial-Social-Conventional": {
      streams: ["Arts", "Science"],
      interestAreas: [
        "Helping",
        "Organization",
        "Designing",
        "Management"
      ],
      careerFields: [
        "School Admin",
        "Library Assistant",
        "Hotel Manager",
        "Civil Engineer (Maths Required)",
        "Architect (Maths Required)",
        "Fashion / Jewelry Designer"
      ],
      recommendedCourses: [
        "B.Com Regular",
        "BA in any subject"
      ]
    },
    "Spatial-Enterprising-Conventional": {
      streams: ["Commerce"],
      interestAreas: [
        "Business",
        "Communication Organization and Management",
        "Problem Solving"
      ],
      careerFields: [
        "Operations Manager (Design Firm)",
        "Project Coordinator (Architecture)",
        "Business Analyst (Spatial Tech)",
        "Design Project Manager",
        "Printing Business Owner"
      ],
      recommendedCourses: [
        "B.Com. in Business Management",
        "B.Com. in Computer Application (Maths Required)"
      ]
    },
    "Logical-Realistic-Investigative": {
      streams: ["Science (Maths Required)"],
      interestAreas: [
        "Mechanical",
        "Research",
        "Technology",
        "Innovation"
      ],
      careerFields: [
        "Mechanical Engineer",
        "Data Scientist",
        "Robotics Technician",
        "Software Developer",
        "Lab Technician",
        "Pharmacist"
      ],
      recommendedCourses: [
        "B.Sc. in Artificial Intelligence & Machine Learning (Maths Required)",
        "B.Sc. in Data Science (Maths Required)",
        "B.Sc. in Computer Science (Maths Required)"
      ]
    },
    "Logical-Realistic-Artistic": {
      streams: ["Science"],
      interestAreas: [
        "Programming",
        "Aesthetics",
        "Technology",
        "Designing"
      ],
      careerFields: [
        "Game / Furniture / Graphic Designer",
        "UX Designer",
        "Audio Engineer",
        "Animation Programmer",
        "Digital Artist"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Science (Maths Required)",
        "B.Sc. in Computer Application (Maths Required)"
      ]
    },
    "Logical-Realistic-Social": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Scientific",
        "Practical applications",
        "Machinery",
        "Self Expression"
      ],
      careerFields: [
        "Occupational / Speech Therapist",
        "Physical Therapist",
        "Lawyer",
        "Physiotherapist"
      ],
      recommendedCourses: [
        "BA in Psychology"
      ]
    },
    "Logical-Realistic-Enterprising": {
      streams: ["Commerce", "Science (Maths Required)"],
      interestAreas: [
        "Business management",
        "Analysis",
        "Technology",
        "Innovation"
      ],
      careerFields: [
        "Business Analyst",
        "Entrepreneur",
        "Software Developer",
        "Computer Scientist (AI)",
        "Entrepreneur"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Science (Maths Required)",
        "B.Sc. in Computer Application (Maths Required)",
        "B.Com. in Business Management"
      ]
    },
    "Logical-Realistic-Conventional": {
      streams: ["Science", "Commerce"],
      interestAreas: [
        "Data Management",
        "Analysing",
        "Organising",
        "Investing"
      ],
      careerFields: [
        "Auditor",
        "Accountant",
        "Financial / Cybersecurity Analyst",
        "Computer Scientist (Maths Required)",
        "Banker",
        "Business Manager"
      ],
      recommendedCourses: [
        "B.Sc. in Cyber Security (Maths Required)",
        "B.Sc. in Computer Science (Maths Required)",
        "B.Com. in Business Management"
      ]
    },
    "Logical-Investigative-Artistic": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Technology",
        "Scientific",
        "Visualization",
        "Problem Solving"
      ],
      careerFields: [
        "AI Algorithm Designer",
        "Research-Based Game Developer",
        "Data Visualization Expert",
        "Physicists",
        "Psychologist"
      ],
      recommendedCourses: [
        "B.Sc. in Artificial Intelligence & Machine Learning (Maths Required)",
        "B.Sc. in Data Science (Maths Required)",
        "BA in Psychology"
      ]
    },
    "Logical-Investigative-Social": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Research",
        "Intervention",
        "Communication",
        "Execution"
      ],
      careerFields: [
        "Clinical / Educational Psychologist",
        "Behavioral Economist",
        "College Professor",
        "Lawyer",
        "Journalist",
        "Doctor",
        "Physiotherapist"
      ],
      recommendedCourses: [
        "B.A. in Psychology",
        "Integrated BA B.Ed"
      ]
    },
    "Logical-Investigative-Enterprising": {
      streams: ["Commerce", "Science (Maths Required)"],
      interestAreas: [
        "Management",
        "Technology",
        "Organization",
        "Business"
      ],
      careerFields: [
        "Management Consultant",
        "Tech Entrepreneur",
        "Product Manager",
        "Economist",
        "Statistician / Data Analyst"
      ],
      recommendedCourses: [
        "B.Sc. in Data Science (Maths Required)",
        "B.Sc. in Information Technology",
        "B.Com. in Business Management"
      ]
    },
    "Logical-Investigative-Conventional": {
      streams: ["Science", "Commerce"],
      interestAreas: [
        "Organization",
        "Analytical Thinking",
        "Documentation",
        "Technology"
      ],
      careerFields: [
        "Statistician (Maths Required)",
        "Criminal Psychologist",
        "Epidemiologist",
        "Market Researcher",
        "Forensic Lab Technician",
        "Accountant (Maths Required)",
        "Company Secretary",
        "Doctor"
      ],
      recommendedCourses: [
        "B.Sc. in Statistics",
        "B.Sc. in Maths & Chemistry",
        "B.Com Regular"
      ]
    },
    "Logical-Artistic-Social": {
      streams: ["Arts"],
      interestAreas: [
        "Storytelling",
        "Training",
        "Creative solutions",
        "Communication"
      ],
      careerFields: [
        "Art / Drama Therapist",
        "Special Educator",
        "Museum Curator",
        "Social Media Manager",
        "Journalist",
        "Design Teacher"
      ],
      recommendedCourses: [
        "B.A. in English",
        "B.A. in Psychology"
      ]
    },
    "Logical-Artistic-Enterprising": {
      streams: ["Science", "Commerce"],
      interestAreas: [
        "Marketing",
        "Designing",
        "Management",
        "Technology"
      ],
      careerFields: [
        "Software Engineer (Maths Required)",
        "Interior / Animation Designer",
        "Data Science Analyst (Maths Required)",
        "Content Marketing Manager"
      ],
      recommendedCourses: [
        "B.Sc. in Information Technology",
        "B.Sc. in Artificial Intelligence & Machine Learning (Maths Required)",
        "B.Sc. in Data Science (Maths Required)"
      ]
    },
    "Logical-Artistic-Conventional": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Spatial Accommodation",
        "Aesthetics",
        "Analysis",
        "Creative thinking"
      ],
      careerFields: [
        "UX Designer",
        "Web Designer",
        "Graphic / Industrial Designer",
        "Digital Media Manager",
        "Event Manager"
      ],
      recommendedCourses: [
        "B.Com. in Business Management",
        "B.Com. in Computer Application (Maths Required)"
      ]
    },
    "Logical-Social-Enterprising": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Communication",
        "Training",
        "Business",
        "Analytics"
      ],
      careerFields: [
        "Public Relation Officer",
        "Political Analyst",
        "Educational Consultant",
        "Sales Manager",
        "Corporate Trainer",
        "Healthcare Administrator"
      ],
      recommendedCourses: [
        "B.Com. - Regular",
        "Integrated BA B.Ed",
        "Integrated B.Com B.Ed"
      ]
    },
    "Logical-Social-Conventional": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Guidance",
        "Training",
        "Organizing",
        "Communication"
      ],
      careerFields: [
        "School Counsellor",
        "HR Manager",
        "Training Programme Coordinator",
        "Rehabilitation Psychologist",
        "Office Administrator"
      ],
      recommendedCourses: [
        "B.A. in Psychology",
        "B.Com. in Business Management",
        "Integrated BA B.Ed"
      ]
    },
    "Logical-Enterprising-Conventional": {
      streams: ["Commerce"],
      interestAreas: [
        "Business Management",
        "Investing",
        "Data Management",
        "Problem Solving"
      ],
      careerFields: [
        "Business Analyst",
        "Operations / Project Manager",
        "Management Consultant",
        "Banking Officer",
        "CFA/ Chartered Accountant",
        "Company Secretary"
      ],
      recommendedCourses: [
        "B.Com. - Regular",
        "B.Com. in Business Management"
      ]
    },
    "Clerical-Realistic-Investigative": {
      streams: ["Science", "Commerce"],
      interestAreas: [
        "Research",
        "Data Management",
        "Documentation",
        "Organizing"
      ],
      careerFields: [
        "Data Entry for R&D (Maths Required)",
        "Field Researcher (Maths Required)",
        "Lab Technician (Maths Required)",
        "Inventory Manager",
        "Quality Control Inspector"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Application (Maths Required)",
        "B.Sc. in Statistics",
        "B.Sc. in Data Science (Maths Required)"
      ]
    },
    "Clerical-Realistic-Artistic": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Visual arts",
        "Designing",
        "Management",
        "Creative thinking"
      ],
      careerFields: [
        "Photographer",
        "Art Gallery Administrator",
        "Design Project Coordinator",
        "Graphic / Interior Design Assistant",
        "Craft-based Businessman"
      ],
      recommendedCourses: [
        "BA in any subject",
        "B.Com. in Business Management"
      ]
    },
    "Clerical-Realistic-Social": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Communication",
        "Organization",
        "Training",
        "Social Interaction"
      ],
      careerFields: [
        "Front Desk Executive",
        "Office Assistant",
        "Rehabilitation Psychologist",
        "Special Educator",
        "Social Worker"
      ],
      recommendedCourses: [
        "BA in Psychology",
        "B.Com Regular"
      ]
    },
    "Clerical-Realistic-Enterprising": {
      streams: ["Commerce"],
      interestAreas: [
        "Working Outdoors",
        "Business",
        "Data Management",
        "Organization"
      ],
      careerFields: [
        "Real Estate Developer",
        "Logistics Administrator",
        "Sales Support Assistant",
        "Accountant",
        "Office Assistant"
      ],
      recommendedCourses: [
        "B.Com. in Business Management",
        "B.Com. in Computer Application (Maths Required)"
      ]
    },
    "Clerical-Realistic-Conventional": {
      streams: ["Commerce"],
      interestAreas: [
        "Organization",
        "Planning",
        "Back end Management",
        "Record Keeping"
      ],
      careerFields: [
        "Warehouse Clerk",
        "Bank Clerk",
        "Data Entry Operator",
        "Office Assistant",
        "Administrator"
      ],
      recommendedCourses: [
        "B.Com. - Regular",
        "B.Com. in Business Management"
      ]
    },
    "Clerical-Investigative-Artistic": {
      streams: ["Arts"],
      interestAreas: [
        "Literature",
        "Aesthetic",
        "Research",
        "Organization"
      ],
      careerFields: [
        "Librarian",
        "Editor",
        "Publishing Assistant",
        "Museum Assistant",
        "Art Researcher",
        "Digital Content Curator"
      ],
      recommendedCourses: [
        "B.A. in English",
        "B.Com. - Regular"
      ]
    },
    "Clerical-Investigative-Social": {
      streams: ["Arts", "Science"],
      interestAreas: [
        "Research",
        "Data Management",
        "Organization",
        "Helping"
      ],
      careerFields: [
        "School Research Assistant",
        "Medical Record Manager",
        "Research Assistant",
        "NGO Project Clerk",
        "Administrator"
      ],
      recommendedCourses: [
        "Integrated BA B.Ed",
        "BA in Psychology"
      ]
    },
    "Clerical-Investigative-Enterprising": {
      streams: ["Commerce"],
      interestAreas: [
        "Research",
        "Analysis",
        "Business",
        "Organization"
      ],
      careerFields: [
        "Market Research Assistant",
        "Project Manager",
        "Sales Data Analyst",
        "Business Development Assistant"
      ],
      recommendedCourses: [
        "B.Com. in Business Management",
        "B.Com. in Computer Application (Maths Required)"
      ]
    },
    "Clerical-Investigative-Conventional": {
      streams: ["Commerce"],
      interestAreas: [
        "Organization",
        "Planning",
        "Research",
        "Data Management"
      ],
      careerFields: [
        "Data Entry Specialist",
        "Research Assistant",
        "Accountant",
        "Technical Support Clerk",
        "Bank Clerk"
      ],
      recommendedCourses: [
        "B.Com. - Regular",
        "B.Com. in Computer Application (Maths Required)"
      ]
    },
    "Clerical-Artistic-Social": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Aesthetic",
        "Organization",
        "Execution",
        "Communication"
      ],
      careerFields: [
        "Art Event Manager",
        "Social Media Manager",
        "Gallery Assistant",
        "Public Relation Officer",
        "Customer Care Executive"
      ],
      recommendedCourses: [
        "BA in English, Psychology",
        "B.Com Regular"
      ]
    },
    "Clerical-Artistic-Enterprising": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Designing",
        "Business",
        "Management",
        "Client Interaction"
      ],
      careerFields: [
        "Advertising Coordinator",
        "Event / Wedding Planner Assistant",
        "Brand / Marketing Assistant",
        "Interior / Fashion Designer Assistant"
      ],
      recommendedCourses: [
        "B.Com. - Regular",
        "B.Com. in Business Management"
      ]
    },
    "Clerical-Artistic-Conventional": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Aesthetic",
        "Communication",
        "Management",
        "Organization"
      ],
      careerFields: [
        "Publishing Assistant",
        "Graphic Designer",
        "Fashion / Interior Designer Assistant",
        "Admin Worker",
        "Event Coordinator"
      ],
      recommendedCourses: [
        "B.Com. in Business Management",
        "B.A in English"
      ]
    },
    "Clerical-Social-Enterprising": {
      streams: ["Commerce"],
      interestAreas: [
        "Communication",
        "Organization",
        "Relationship Management",
        "Planning"
      ],
      careerFields: [
        "HR Manager",
        "Sales Manager",
        "Front Desk Executive",
        "Training Coordinator",
        "Office Assistant"
      ],
      recommendedCourses: [
        "B.Com. Business Management",
        "B.Com Regular"
      ]
    },
    "Clerical-Social-Conventional": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Communication",
        "Planning",
        "Data Handling",
        "Relationship Management"
      ],
      careerFields: [
        "School Office Assistant",
        "HR Assistant",
        "Medical Assistant",
        "Data Entry Clerk",
        "Front Desk Officer",
        "Banker"
      ],
      recommendedCourses: [
        "B.Com. Regular",
        "BA in any subject"
      ]
    },
    "Clerical-Enterprising-Conventional": {
      streams: ["Commerce"],
      interestAreas: [
        "Management",
        "Business",
        "Planning",
        "Organization"
      ],
      careerFields: [
        "Office / Corporate Administrator",
        "Business Analyst",
        "Insurance Executive",
        "Banking Clerk",
        "Hotel Management"
      ],
      recommendedCourses: [
        "B.Com. Business Management",
        "B.Com. Regular"
      ]
    },
    "Verbal-Realistic-Investigative": {
      streams: ["Science", "Arts"],
      interestAreas: [
        "Communication",
        "Creative Solutions",
        "Practicality",
        "Research"
      ],
      careerFields: [
        "Creative Writer",
        "Clinical / Forensic Psychologist",
        "Health Educator",
        "Reporter",
        "Lawyer"
      ],
      recommendedCourses: [
        "B.A. in Psychology",
        "B.Com. Regular"
      ]
    },
    "Verbal-Realistic-Artistic": {
      streams: ["Arts"],
      interestAreas: [
        "Communication",
        "Execution",
        "Organization",
        "Creativity"
      ],
      careerFields: [
        "Art /Dance Therapist",
        "Scriptwriter (Documentaries)",
        "Voice over artist",
        "Blog Writer",
        "Stage Manager",
        "Content Creator",
        "Anchor"
      ],
      recommendedCourses: [
        "B.A. in Psychology",
        "B.A. in English"
      ]
    },
    "Verbal-Realistic-Social": {
      streams: ["Arts", "Science"],
      interestAreas: [
        "Communication",
        "Relationship Management",
        "Social Welfare",
        "Training"
      ],
      careerFields: [
        "Speech Therapist",
        "Vocational Trainer",
        "Motivational Speaker",
        "Public Relations Officer",
        "Counselling Psychologist",
        "Social Worker"
      ],
      recommendedCourses: [
        "B.A. Psychology",
        "B.Com. Business Management"
      ]
    },
    "Verbal-Realistic-Enterprising": {
      streams: ["Commerce", "Arts"],
      interestAreas: [
        "Working Outdoors",
        "Management",
        "Business",
        "Communication"
      ],
      careerFields: [
        "Sales Representative",
        "Real Estate Agent",
        "Business Consultant",
        "Marketing Manager",
        "Entrepreneur"
      ],
      recommendedCourses: [
        "B.Com. Business Management",
        "B.Com. in International Business"
      ]
    },
    "Verbal-Realistic-Conventional": {
      streams: ["Commerce", "Arts"],
      interestAreas: [
        "Organizing",
        "Relationship Management",
        "Analyzing",
        "Communication"
      ],
      careerFields: [
        "Administrative Executive",
        "Account Manager",
        "Human Resources Specialist",
        "Customer Support",
        "Researcher"
      ],
      recommendedCourses: [
        "B.Com. Regular",
        "B.A. Psychology"
      ]
    },
    "Verbal-Investigative-Artistic": {
      streams: ["Arts", "Science"],
      interestAreas: [
        "Scientific",
        "Execution",
        "Planning",
        "Creative thinking"
      ],
      careerFields: [
        "Science Journalist",
        "Clinical Psychologist",
        "Researcher",
        "Academic Writer",
        "Podcast Creator",
        "Documentary Filmmaker",
        "Educational YouTuber"
      ],
      recommendedCourses: [
        "B.A. Psychology",
        "B.A. English"
      ]
    },
    "Verbal-Investigative-Social": {
      streams: ["Arts", "Science"],
      interestAreas: [
        "Analysing",
        "Research",
        "Detailing",
        "Problem Solving"
      ],
      careerFields: [
        "Clinical / Forensic Psychologist",
        "Journalist",
        "Psychotherapist",
        "ABA Therapist",
        "Policy / Research Analyst",
        "Police",
        "Lawyer"
      ],
      recommendedCourses: [
        "B.A. Psychology",
        "B.Sc. B.Ed.",
        "LLB"
      ]
    },
    "Verbal-Investigative-Enterprising": {
      streams: ["Commerce"],
      interestAreas: [
        "Communication",
        "Business",
        "Management",
        "Research"
      ],
      careerFields: [
        "Corporate Trainer",
        "Market Researcher",
        "Business Consultant",
        "Public Relation Officer",
        "Lawyer",
        "Sales Manager"
      ],
      recommendedCourses: [
        "B.Com. in International Business",
        "B.Com. in Business Management"
      ]
    },
    "Verbal-Investigative-Conventional": {
      streams: ["Commerce", "Science"],
      interestAreas: [
        "Data Management",
        "Technology",
        "Analysis",
        "Scientific"
      ],
      careerFields: [
        "Research Editor",
        "Data Analyst",
        "Data Report Writer",
        "Lawyer",
        "News Reporter",
        "Intelligence Officer"
      ],
      recommendedCourses: [
        "B.Com. in International Business",
        "B.Sc. in Data Science (Maths Required)"
      ]
    },
    "Verbal-Artistic-Social": {
      streams: ["Arts"],
      interestAreas: [
        "Aesthetic",
        "Creative thinking",
        "Social relationship",
        "Communication"
      ],
      careerFields: [
        "Drama Teacher",
        "Comedian",
        "Art / Drama / Music Therapist",
        "Content Creator",
        "Radio Jockey / Podcast Creator",
        "News Anchor"
      ],
      recommendedCourses: [
        "B.A. B.Ed.",
        "B.A. English / Psychology"
      ]
    },
    "Verbal-Artistic-Enterprising": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Marketing",
        "Entrepreneurship",
        "Technology",
        "Aesthetics"
      ],
      careerFields: [
        "Advertising Copywriter",
        "Film Director",
        "Brand Strategist",
        "Social Media Influencer / Youtuber",
        "Event Manager",
        "Public Relation Officer"
      ],
      recommendedCourses: [
        "BA", 
        "B.Com."
      ]
    },
    "Verbal-Artistic-Conventional": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Aesthetics",
        "Organizing",
        "Management",
        "Planning"
      ],
      careerFields: [
        "Editor",
        "Graphic Designer",
        "Social Media Manager",
        "Marketing Manager",
        "Librarian"
      ],
      recommendedCourses: [
        "B.A. B.Ed.",
        "B.Com."
      ]
    },
    "Verbal-Social-Enterprising": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Communication",
        "Client Interaction",
        "Management",
        "Creative Solutions"
      ],
      careerFields: [
        "Psychologist",
        "Public Relations Specialist",
        "Event / HR Manager",
        "Wedding Planner",
        "Business Development Manager",
        "Hotel Management"
      ],
      recommendedCourses: [
        "B.A. Psychology",
        "B.Com. Business Management"
      ]
    },
    "Verbal-Social-Conventional": {
      streams: ["Arts", "Commerce"],
      interestAreas: [
        "Communication",
        "Planning",
        "Organization",
        "Management"
      ],
      careerFields: [
        "School Counselor",
        "HR Manager",
        "Event Manager",
        "Front Desk Executive",
        "Trainer",
        "Developmental Psychologist",
        "Hotel Management"
      ],
      recommendedCourses: [
        "B.A. Psychology / English",
        "B.Com. Regular"
      ]
    },
    "Verbal-Enterprising-Conventional": {
      streams: ["Commerce"],
      interestAreas: [
        "Data Management",
        "Business",
        "Problem Solving",
        "Communication"
      ],
      careerFields: [
        "Banking Executive (Maths Required)",
        "Insurance Advisor",
        "Real Estate Agent",
        "Retailer",
        "Business Management Officer",
        "Trainer",
        "Company Secretary"
      ],
      recommendedCourses: [
        "B.Com Regular",
        "B.Com. International Business"
      ]
    }
  };

// Simple client-side cookie functions
const getCookie = (name) => {
  if (typeof window === 'undefined') return null;
  
  try {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
      const value = match[2];
      try {
        // Try to parse as JSON
        return JSON.parse(decodeURIComponent(value));
      } catch (e) {
        // If it's not JSON, return the raw string
        return decodeURIComponent(value);
      }
    }
    return null;
  } catch (error) {
    console.error("Error reading cookie:", error);
    return null;
  }
};

const clearAllCookies = () => {
  if (typeof window === 'undefined') return;
  
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  }
};

export default function TestResults() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [section1Results, setSection1Results] = useState(null);
  const [section2Results, setSection2Results] = useState(null);
  const [careerRecommendations, setCareerRecommendations] = useState(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isSavingResults, setIsSavingResults] = useState(false);
  
  const router = useRouter();
  const reportRef = useRef(null);

  // Calculate the top 2 personality types from section 1
  const getTopPersonalityTypes = (results) => {
    if (!results) return [];
    
    const sortedTypes = Object.entries(results)
      .sort((a, b) => b[1] - a[1])
      .map(([type, score]) => ({ type, score }));
    
    return sortedTypes.slice(0, 2);
  };
  
  // Calculate the top aptitude from section 2
  const getTopAptitude = (section2Answers) => {
    if (!section2Answers) return "Numerical"; // Default fallback
    
    const categories = {
      "Verbal": 0,
      "Spatial": 0,
      "Numerical": 0,
      "Clerical": 0,
      "Logical": 0
    };
    
    // The correct answers for each category
    const correctAnswers = {
      "Verbal": ["B", "C", "B", "D", "A"],
      "Spatial": ["D", "D", "C", "A", "D"],
      "Numerical": ["C", "B", "D", "B", "A"],
      "Clerical": ["C", "C", "B", "A", "C"],
      "Logical": ["B", "B", "A", "B", "C"]
    };
    
    // Count correct answers per category
    Object.entries(section2Answers).forEach(([questionId, answer]) => {
      const qId = parseInt(questionId);
      
      // Verbal Aptitude (Questions 1-5)
      if (qId >= 1 && qId <= 5) {
        if (answer === correctAnswers.Verbal[qId - 1]) {
          categories.Verbal++;
        }
      }
      // Spatial Aptitude (Questions 6-10)
      else if (qId >= 6 && qId <= 10) {
        if (answer === correctAnswers.Spatial[qId - 6]) {
          categories.Spatial++;
        }
      }
      // Numerical Aptitude (Questions 11-15)
      else if (qId >= 11 && qId <= 15) {
        if (answer === correctAnswers.Numerical[qId - 11]) {
          categories.Numerical++;
        }
      }
      // Clerical Aptitude (Questions 16-20)
      else if (qId >= 16 && qId <= 20) {
        if (answer === correctAnswers.Clerical[qId - 16]) {
          categories.Clerical++;
        }
      }
      // Logical Aptitude (Questions 21-25)
      else if (qId >= 21 && qId <= 25) {
        if (answer === correctAnswers.Logical[qId - 21]) {
          categories.Logical++;
        }
      }
    });
    
    // Find the highest scoring category
    let topCategory = null;
    let maxScore = -1;
    
    Object.entries(categories).forEach(([category, score]) => {
      if (score > maxScore) {
        topCategory = category;
        maxScore = score;
      }
    });
    
    return topCategory || "Numerical"; // Default fallback
  };
  
  // Generate career recommendations based on aptitude and personality
  const generateRecommendations = (aptitude, personalityTypes) => {
    if (!aptitude || !personalityTypes || personalityTypes.length < 2) {
      return {
        aptitude: aptitude || "Numerical",
        personalityTypes: personalityTypes?.map(pt => pt.type) || ["Realistic", "Investigative"],
        streams: ["Science", "Commerce"],
        interestAreas: [
          "Scientific",
          "Analytical",
          "Research-based",
          "Practical"
        ],
        careerFields: [
          "Software Engineer",
          "Data Analyst",
          "Financial Analyst",
          "Business Consultant",
          "Research Scientist"
        ],
        recommendedCourses: [
          "B.Sc. in Computer Science",
          "B.Sc. in Mathematics",
          "B.Com. with focus on Finance"
        ]
      };
    }
    
    const key = `${aptitude}-${personalityTypes[0].type}-${personalityTypes[1].type}`;
    const altKey = `${aptitude}-${personalityTypes[1].type}-${personalityTypes[0].type}`;
    
    // Check if we have a direct match in careerMapping
    if (careerMapping[key]) {
      return {
        ...careerMapping[key],
        aptitude,
        personalityTypes: [personalityTypes[0].type, personalityTypes[1].type]
      };
    }
    
    // Check if we have a match with reversed personality types
    if (careerMapping[altKey]) {
      return {
        ...careerMapping[altKey],
        aptitude,
        personalityTypes: [personalityTypes[1].type, personalityTypes[0].type]
      };
    }
    
    // If no exact match, return a default
    return {
      aptitude: aptitude || "Numerical",
      personalityTypes: personalityTypes?.map(pt => pt.type) || ["Realistic", "Investigative"],
      streams: ["Science", "Commerce"],
      interestAreas: [
        "Scientific",
        "Analytical",
        "Research-based",
        "Practical"
      ],
      careerFields: [
        "Software Engineer",
        "Data Analyst",
        "Financial Analyst",
        "Business Consultant",
        "Research Scientist"
      ],
      recommendedCourses: [
        "B.Sc. in Computer Science",
        "B.Sc. in Mathematics",
        "B.Com. with focus on Finance"
      ]
    };
  };

 const handleDownloadPDF = async () => {
  if (!reportRef.current) return;
  
  try {
    setIsGeneratingPdf(true);
    
    // Get the report element
    const reportElement = reportRef.current;
    
    // Detect iOS device to apply special handling
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    // Store original styles
    const originalStyles = {
      width: reportElement.style.width,
      height: reportElement.style.height,
      overflow: reportElement.style.overflow
    };
    
    // Set up for PDF generation with device-specific adjustments
    // Use a narrower width for iOS to prevent overflow
    const contentWidth = isIOS ? "720px" : "794px"; 
    
    reportElement.style.width = contentWidth;
    reportElement.style.height = "auto";
    reportElement.style.overflow = "visible";
    
    // Find the "Your Result Summary" element to ensure it starts on page 2
    const resultSummarySection = reportElement.querySelector('h2.text-xl.font-bold.text-\\[\\#784212\\].mb-6');
    let resultSummaryElement = null;
    
    if (resultSummarySection) {
      // Get the parent div containing the entire "Your Result Summary" section
      resultSummaryElement = resultSummarySection.closest('div.p-6.sm\\:p-8.border-b.border-gray-200');
    }
    
    // Find the signature section
    const signatureSection = reportElement.querySelector('div.p-6.sm\\:p-8.border-b.border-gray-200:nth-last-of-type(2)');
    
    // Find the footer
    const footerElement = reportElement.querySelector('div.bg-green-200');
    
    // ========================= FIRST PAGE (SAME FOR BOTH) =========================
    // Get elements before the result summary section (for first page)
    const firstPageContent = document.createElement('div');
    firstPageContent.style.width = contentWidth;
    firstPageContent.style.position = "absolute";
    firstPageContent.style.left = "-9999px";
    firstPageContent.style.background = "white";
    firstPageContent.style.overflow = "hidden"; // Prevent overflow
    
    if (resultSummaryElement && resultSummaryElement.parentNode) {
      const parent = resultSummaryElement.parentNode;
      const children = Array.from(parent.children);
      const resultSummaryIndex = children.indexOf(resultSummaryElement);
      
      // Clone and append all elements before result summary
      for (let i = 0; i < resultSummaryIndex; i++) {
        firstPageContent.appendChild(children[i].cloneNode(true));
      }
    }
    
    // ========================= SECOND & THIRD PAGES (DIFFERENT HANDLING) =========================
    let secondPageContent, thirdPageContent;
    
    if (isIOS) {
      // --------- IPHONE: SPLIT INTO 3 PAGES WITH BETTER CONTENT DISTRIBUTION ---------
      
      // Reduce first page content for iOS to prevent overflow
      if (firstPageContent.children.length > 3) {
        // Move the last child to the beginning of the second page to prevent overflow
        const lastChild = firstPageContent.children[firstPageContent.children.length - 1];
        firstPageContent.removeChild(lastChild);
        
        // We'll add this to the second page later
        const overflowContent = lastChild;
        
        // Create second page content container (Result Summary and half the content)
        secondPageContent = document.createElement('div');
        secondPageContent.style.width = contentWidth;
        secondPageContent.style.position = "absolute";
        secondPageContent.style.left = "-9999px";
        secondPageContent.style.background = "white";
        secondPageContent.style.overflow = "hidden";
        
        // Create third page content container (Rest of content + signature + footer)
        thirdPageContent = document.createElement('div');
        thirdPageContent.style.width = contentWidth;
        thirdPageContent.style.position = "absolute";
        thirdPageContent.style.left = "-9999px";
        thirdPageContent.style.background = "white";
        thirdPageContent.style.overflow = "hidden";
        
        if (resultSummaryElement) {
          // First add the overflow content from the first page
          secondPageContent.appendChild(overflowContent.cloneNode(true));
          
          // Then add the result summary section to second page
          secondPageContent.appendChild(resultSummaryElement.cloneNode(true));
          
          // Count how many elements we have after resultSummaryElement
          let elementCount = 0;
          let elementList = [];
          let currentElement = resultSummaryElement.nextElementSibling;
          
          while (currentElement && currentElement !== footerElement) {
            elementList.push(currentElement);
            elementCount++;
            currentElement = currentElement.nextElementSibling;
          }
          
          // Distribute content: put about half on second page, half on third
          const halfIndex = Math.ceil(elementCount / 2);
          
          // Add first half of elements to second page
          for (let i = 0; i < halfIndex && i < elementList.length; i++) {
            secondPageContent.appendChild(elementList[i].cloneNode(true));
          }
          
          // Add second half of elements to third page (including signature section)
          for (let i = halfIndex; i < elementList.length; i++) {
            thirdPageContent.appendChild(elementList[i].cloneNode(true));
          }
          
          // Add the signature section to the third page if it's not already included
          if (!elementList.includes(signatureSection) && signatureSection) {
            const signatureClone = signatureSection.cloneNode(true);
            thirdPageContent.appendChild(signatureClone);
            
            // Fix signature images
            fixSignatureImages(signatureClone);
          }
          
          // Add the custom footer to the third page ONLY
          thirdPageContent.appendChild(createCustomFooter(isIOS));
        }
      } else {
        // Fallback if we can't reduce first page content
        // Create second page content container
        secondPageContent = document.createElement('div');
        secondPageContent.style.width = contentWidth;
        secondPageContent.style.position = "absolute";
        secondPageContent.style.left = "-9999px";
        secondPageContent.style.background = "white";
        secondPageContent.style.overflow = "hidden";
        
        // Create third page content container
        thirdPageContent = document.createElement('div');
        thirdPageContent.style.width = contentWidth;
        thirdPageContent.style.position = "absolute";
        thirdPageContent.style.left = "-9999px";
        thirdPageContent.style.background = "white";
        thirdPageContent.style.overflow = "hidden";
        
        if (resultSummaryElement) {
          // Add the result summary section to second page
          secondPageContent.appendChild(resultSummaryElement.cloneNode(true));
          
          // Count and collect elements after result summary
          let elementList = [];
          let currentElement = resultSummaryElement.nextElementSibling;
          
          while (currentElement && currentElement !== footerElement) {
            elementList.push(currentElement);
            currentElement = currentElement.nextElementSibling;
          }
          
          // Calculate the midpoint to split content between pages
          const midpoint = Math.ceil(elementList.length / 2);
          
          // Add first half to second page
          for (let i = 0; i < midpoint; i++) {
            secondPageContent.appendChild(elementList[i].cloneNode(true));
          }
          
          // Add second half to third page
          for (let i = midpoint; i < elementList.length; i++) {
            thirdPageContent.appendChild(elementList[i].cloneNode(true));
          }
          
          // Add signature section to third page if not already included
          if (!elementList.includes(signatureSection) && signatureSection) {
            const signatureClone = signatureSection.cloneNode(true);
            thirdPageContent.appendChild(signatureClone);
            
            // Fix signature images
            fixSignatureImages(signatureClone);
          }
          
          // Add the custom footer only to the third page
          thirdPageContent.appendChild(createCustomFooter(isIOS));
        }
      }
    } else {
      // --------- ANDROID: KEEP AS ONE PAGE ---------
      // Create the second page content container (everything after first page)
      secondPageContent = document.createElement('div');
      secondPageContent.style.width = contentWidth;
      secondPageContent.style.position = "absolute";
      secondPageContent.style.left = "-9999px";
      secondPageContent.style.background = "white";
      secondPageContent.style.overflow = "hidden";
      
      if (resultSummaryElement) {
        // First, add the result summary section
        secondPageContent.appendChild(resultSummaryElement.cloneNode(true));
        
        // Add everything between result summary and signatures
        let currentElement = resultSummaryElement.nextElementSibling;
        while (currentElement && currentElement !== signatureSection && currentElement !== footerElement) {
          secondPageContent.appendChild(currentElement.cloneNode(true));
          currentElement = currentElement.nextElementSibling;
        }
        
        // Add the signature section
        if (signatureSection) {
          const signatureClone = signatureSection.cloneNode(true);
          secondPageContent.appendChild(signatureClone);
          
          // Fix signature images in the clone
          fixSignatureImages(signatureClone);
        }
        
        // Add custom footer
        secondPageContent.appendChild(createCustomFooter(isIOS));
      }
    }
    
    // Configure PDF in portrait orientation (A4)
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true // Enable compression
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Append elements to body for rendering
    document.body.appendChild(firstPageContent);
    document.body.appendChild(secondPageContent);
    if (isIOS && thirdPageContent) {
      document.body.appendChild(thirdPageContent);
    }
    
    // Use an optimized scale based on device
    // For iOS, use a more aggressive scale reduction to ensure content fits properly
    const renderScale = isIOS ? 1.15 : 1.5;
    
    // Generate first page canvas
    const canvas1 = await html2canvas(firstPageContent, {
      scale: renderScale,
      useCORS: true,
      logging: false,
      width: parseInt(contentWidth),
      imageTimeout: 15000,
      windowWidth: parseInt(contentWidth),
      onclone: (clonedDoc) => {
        applyCSSAdjustments(clonedDoc, isIOS);
      }
    });
    
    // Generate second page canvas
    const canvas2 = await html2canvas(secondPageContent, {
      scale: renderScale,
      useCORS: true,
      logging: false,
      width: parseInt(contentWidth),
      imageTimeout: 15000,
      windowWidth: parseInt(contentWidth),
      onclone: (clonedDoc) => {
        applyCSSAdjustments(clonedDoc, isIOS);
      }
    });
    
    // Generate third page canvas for iOS
    let canvas3 = null;
    if (isIOS && thirdPageContent) {
      canvas3 = await html2canvas(thirdPageContent, {
        scale: renderScale,
        useCORS: true,
        logging: false,
        width: parseInt(contentWidth),
        imageTimeout: 15000,
        windowWidth: parseInt(contentWidth),
        onclone: (clonedDoc) => {
          applyCSSAdjustments(clonedDoc, isIOS);
        }
      });
    }
    
    // Clean up
    document.body.removeChild(firstPageContent);
    document.body.removeChild(secondPageContent);
    if (isIOS && thirdPageContent) {
      document.body.removeChild(thirdPageContent);
    }
    
    // Use a higher quality setting for iOS to maintain text readability
    const imageQuality = isIOS ? 0.9 : 0.8;
    
    // Compress canvas images before adding to PDF
    const compressedImage1 = canvas1.toDataURL('image/jpeg', imageQuality);
    const compressedImage2 = canvas2.toDataURL('image/jpeg', imageQuality);
    let compressedImage3 = null;
    if (isIOS && canvas3) {
      compressedImage3 = canvas3.toDataURL('image/jpeg', imageQuality);
    }
    
    // For iOS, use minimal margins to maximize content space
    const margin = isIOS ? 1 : 5;
    
    // Add first page to PDF
    const imgWidth1 = pdfWidth - (2 * margin);
    const imgHeight1 = (canvas1.height * imgWidth1) / canvas1.width;
    pdf.addImage(compressedImage1, 'JPEG', margin, margin, imgWidth1, imgHeight1);
    
    // Add second page
    pdf.addPage();
    
    // Add the second page content
    const imgWidth2 = pdfWidth - (2 * margin);
    const imgHeight2 = (canvas2.height * imgWidth2) / canvas2.width;
    pdf.addImage(compressedImage2, 'JPEG', margin, margin, imgWidth2, imgHeight2);
    
    // Add third page for iOS
    if (isIOS && compressedImage3) {
      pdf.addPage();
      const imgWidth3 = pdfWidth - (2 * margin);
      const imgHeight3 = (canvas3.height * imgWidth3) / canvas3.width;
      pdf.addImage(compressedImage3, 'JPEG', margin, margin, imgWidth3, imgHeight3);
    }
    
    // Restore original styles
    reportElement.style.width = originalStyles.width;
    reportElement.style.height = originalStyles.height;
    reportElement.style.overflow = originalStyles.overflow;
    
    // Save the PDF with optimized settings
    const pdfOptions = {
      compress: true,
      precision: 2
    };
    
    pdf.save(`personality_test_results_${userData?.name || 'report'}.pdf`, pdfOptions);
    
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("There was an error generating the PDF. Please try again.");
  } finally {
    setIsGeneratingPdf(false);
  }
};

// Helper function to create custom footer
function createCustomFooter(isIOS) {
  const customFooter = document.createElement('div');
  customFooter.style.backgroundColor = '#abebc6'; // Match bg-green-200
  customFooter.style.padding = isIOS ? '12px 24px' : '16px 48px';
  customFooter.style.display = 'flex';
  customFooter.style.justifyContent = 'space-between';
  customFooter.style.alignItems = 'center';
  customFooter.style.width = '100%';
  customFooter.style.boxSizing = 'border-box';
  
  const leftSection = document.createElement('div');
  leftSection.style.display = 'flex';
  leftSection.style.flexDirection = 'column';
  leftSection.style.flex = '1';
  
  const centerName = document.createElement('p');
  centerName.textContent = 'SANTVANA';
  centerName.style.fontWeight = 'bold';
  centerName.style.color = '#145a32';
  centerName.style.fontSize = isIOS ? '14px' : '16px';
  centerName.style.margin = '0';
  leftSection.appendChild(centerName);
  
  const centerDesc = document.createElement('p');
  centerDesc.textContent = 'Psychological Well-being Center';
  centerDesc.style.color = '#145a32';
  centerDesc.style.fontSize = isIOS ? '12px' : '14px';
  centerDesc.style.margin = '0';
  leftSection.appendChild(centerDesc);
  
  const rightSection = document.createElement('div');
  rightSection.style.display = 'flex';
  rightSection.style.flexDirection = 'column';
  rightSection.style.alignItems = 'flex-end';
  rightSection.style.flex = '1';
  rightSection.style.textAlign = 'right';
  
  const phoneNumbers = document.createElement('p');
  phoneNumbers.textContent = '98242 18278 | 97230 69261';
  phoneNumbers.style.color = '#145a32';
  phoneNumbers.style.fontSize = isIOS ? '12px' : '14px';
  phoneNumbers.style.margin = '0';
  rightSection.appendChild(phoneNumbers);
  
  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'www.santvana.co.in | santvana27@gmail.com';
  contactInfo.style.color = '#145a32';
  contactInfo.style.fontSize = isIOS ? '12px' : '14px';
  contactInfo.style.margin = '0';
  rightSection.appendChild(contactInfo);
  
  customFooter.appendChild(leftSection);
  customFooter.appendChild(rightSection);
  
  return customFooter;
}

// Helper function to fix signature images
function fixSignatureImages(signatureElement) {
  // Fix signature images in the clone
  const imageContainers = signatureElement.querySelectorAll('.h-20.w-40.mx-auto.relative');
  imageContainers.forEach((container, index) => {
    // Create img elements to replace Next.js Image components
    const imgElement = document.createElement('img');
    imgElement.src = index === 0 ? '/sign/1.png' : '/sign/2.png';
    imgElement.alt = 'Signature';
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.style.objectFit = 'contain';
    
    // Clear the container and add the img
    container.innerHTML = '';
    container.appendChild(imgElement);
  });
}

// Helper function to apply CSS adjustments
function applyCSSAdjustments(clonedDoc, isIOS) {
  if (isIOS) {
    const styles = clonedDoc.createElement('style');
    styles.textContent = `
      * {
        max-width: 100% !important;
        box-sizing: border-box !important;
        word-wrap: break-word !important;
      }
      p, h1, h2, h3, h4, h5, h6 {
        width: auto !important;
        font-size: 90% !important;
        margin-top: 8px !important;
        margin-bottom: 8px !important;
      }
      div {
        page-break-inside: avoid;
        padding-top: 2px !important;
        padding-bottom: 2px !important;
      }
      .p-6, .sm\\:p-8 {
        padding: 12px !important;
      }
      .mb-6 {
        margin-bottom: 12px !important;
      }
      .mb-4 {
        margin-bottom: 8px !important;
      }
      .mb-2 {
        margin-bottom: 4px !important;
      }
      /* Ensure text doesn't get too close to page edges */
      [class*="border-b"] {
        padding-bottom: 6px !important;
      }
    `;
    clonedDoc.head.appendChild(styles);
  }
}

  const handleTakeNewTest = () => {
    clearAllCookies();
    router.push("/career-guidance-test");
  };

  // Save results to database
  const saveResultsToDatabase = async (userId, section1Results, section2Results, aptitudeSummary) => {
    if (!userId) return false;
    
    try {
      setIsSavingResults(true);
      
      const result = await updateTestResults({
        userId,
        section1Results,
        section2Results,
        aptitudeSummary
      });
      
      return result.success;
    } catch (error) {
      console.error("Error saving results to database:", error);
      return false;
    } finally {
      setIsSavingResults(false);
    }
  };

  useEffect(() => {
    const loadResults = async () => {
      try {
        if (typeof window === 'undefined') return;
        
       // Get user info from cookies
const userInfoCookie = getCookie("user_info");
const userId = getCookie("user_id");
const formDataCookie = getCookie("form_data");

// Get section 1 results (personality)
const s1Results = getCookie("section1_results");

// Get section 2 results (answers from aptitude test)
const s2AnswersCookie = getCookie("section2_answers");

// If missing essential data, go back to test
if (!userInfoCookie || !s1Results) {
  router.push("/personality-test");
  return;
}

// Get individual cookie values for each field to ensure we get all user data
const userFullNameCookie = document.cookie.match(new RegExp('(^| )user_full_name=([^;]+)'));
const userDobCookie = document.cookie.match(new RegExp('(^| )user_dob=([^;]+)'));
const userAgeCookie = document.cookie.match(new RegExp('(^| )user_age=([^;]+)'));
const userEducationCookie = document.cookie.match(new RegExp('(^| )user_education=([^;]+)'));
const userContactCookie = document.cookie.match(new RegExp('(^| )user_contact=([^;]+)'));
const userEmailCookie = document.cookie.match(new RegExp('(^| )user_email=([^;]+)'));

// Process user data
const user = {
  id: userId,
  name: userFullNameCookie ? decodeURIComponent(userFullNameCookie[2]) : (userInfoCookie.name || "Test Taker"),
  email: userEmailCookie ? decodeURIComponent(userEmailCookie[2]) : (userInfoCookie.email || "email@example.com"),
  dob: userDobCookie ? decodeURIComponent(userDobCookie[2]) : (formDataCookie?.dob || "01/01/2000"),
  age: userAgeCookie ? decodeURIComponent(userAgeCookie[2]) : (formDataCookie?.age || "25"),
  education: userEducationCookie ? decodeURIComponent(userEducationCookie[2]) : (formDataCookie?.std || "12th Science"),
  contact: userContactCookie ? decodeURIComponent(userContactCookie[2]) : (formDataCookie?.contact || "+91 XXXXXXXXXX")
};

console.log("User data loaded:", user); // For debugging

setUserData(user);
        setSection1Results(s1Results);
        
        // Get top personality types from section 1
        const topPersonalityTypes = getTopPersonalityTypes(s1Results);
        
        // Get top aptitude from section 2
        const topAptitude = getTopAptitude(s2AnswersCookie);
        
        // Generate career recommendations
        const recommendations = generateRecommendations(
          topAptitude,
          topPersonalityTypes
        );
        
        setCareerRecommendations(recommendations);
        
        // Save results to database
        if (userId) {
          await saveResultsToDatabase(
            userId,
            s1Results,
            { answers: s2AnswersCookie || {} },
            recommendations
          );
        }
      } catch (error) {
        console.error("Error loading results:", error);
        // Show default data on error rather than redirecting
        setCareerRecommendations({
          aptitude: "Numerical",
          personalityTypes: ["Realistic", "Investigative"],
          streams: ["Science", "Commerce"],
          interestAreas: [
            "Scientific",
            "Analytical",
            "Research-based",
            "Practical"
          ],
          careerFields: [
            "Software Engineer",
            "Data Analyst",
            "Financial Analyst", 
            "Business Consultant",
            "Research Scientist"
          ],
          recommendedCourses: [
            "B.Sc. in Computer Science",
            "B.Sc. in Mathematics",
            "B.Com. with focus on Finance"
          ]
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadResults();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mt-20 mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
          <h1 className="text-2xl font-bold text-[#784212]">
            Your Career Assessment Result
          </h1>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPdf}
              className="flex items-center justify-center px-4 py-2 bg-[#784212] text-white rounded-lg shadow hover:bg-[#117864] transition-colors"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader className="animate-spin h-4 w-4 mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </>
              )}
            </button>
            <a
              href="https://santvana.co.in/"
              className="flex items-center justify-center px-4 py-2 text-white bg-[#117864] rounded-lg shadow "
            >
              <RefreshCcw className="h-4 w-4 mr-2" />
              Visit Our Website
            </a>
             <button
              onClick={handleTakeNewTest}
              className="flex items-center justify-center px-4 py-2 text-white bg-[#117864] rounded-lg shadow "
            >
              <RefreshCcw className="h-4 w-4 mr-2" />
              Take New Test
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-xl overflow-hidden"
          ref={reportRef}
        >
          {/* Header with Logo */}
          <div className="bg-[#abebc6] py-8 px-12 flex items-center">
            <div className="h-30  relative flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{ width: "180px", height: "auto" }}
                className="rounded-md"
              />
            </div>
            <h1 className="ml-10 text-xl sm:text-2xl  font-bold text-[#186a3b]">
              Career Guidance Assessment Profile
            </h1>
          </div>

          {/* User Information */}
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <p className="text-lg font-bold text-gray-500">Name</p>
                  <p className="font-bold text-lg text-[#ec7063]">
                    {userData?.name || "Test Taker"}
                  </p>
                </div>
                <div className="mb-4">
               <p className="text-lg font-bold text-gray-500">
  Date of Birth
</p>
<p className="text-lg font-bold text-[#ec7063]">
  {userData?.dob ? 
    new Date(userData.dob).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-') :
    "01-01-2000"
  }
</p>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold text-gray-500">Age</p>
                  <p className="text-lg font-bold text-[#ec7063]">
                    {userData?.age || "25"}
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <p className="text-lg font-bold text-gray-500">Education</p>
                  <p className="text-lg font-bold text-[#ec7063]">
                    {userData?.education || "12th Science"}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold text-gray-500">
                    Contact Number
                  </p>
                  <p className="text-lg font-bold text-[#ec7063]">
                    {userData?.contact || "(+91) XXXXXXXXXX"}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-bold text-gray-500">Email</p>
                  <p className="text-lg font-bold text-[#ec7063]">
                    {userData?.email || "email@example.com"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Definitions */}
          <div className="p-6 sm:p-8 border-b border-gray-200 bg-gray-50">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#784212] mb-2">
                What is Aptitude?
              </h3>
              <p className="text-gray-700 text-lg">
                Aptitude refers to an{" "}
                <b className="text-[#ca6f1e]"> individual's natural ability </b>
                or <b className="text-[#ca6f1e]"> talent </b> to learn and
                perform specific tasks or skills. In the context of a career,
                aptitude encompasses the capabilities that enable a person to
                succeed in certain job functions or fields.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#784212] mb-2">
                What is Personality?
              </h3>
              <p className="text-gray-700 text-lg">
                Personality refers to the
                <b className="text-[#ca6f1e]">
                  {" "}
                  unique set of traits, characteristics, and behaviors{" "}
                </b>{" "}
                that define an individual. In the context of career, personality
                influences how a person approaches work, interacts with others,
                and makes decisions about their professional life.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#784212] mb-2">
                What is Interest?
              </h3>
              <p className="text-gray-700 text-lg">
                An interest is a subjective attitude to the activities or
                subjects an individual
                <b className="text-[#ca6f1e]">
                  {" "}
                  naturally enjoys and is drawn to
                </b>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#784212] mb-2">
                How do together they help in choosing a career?{" "}
              </h3>
              <p className="text-gray-700 text-lg">
                Aptitude, personality, and interest together form the foundation
                for making a smart and satisfying career choice. When all three
                align, you're more likely to choose a career where you perform
                well, feel comfortable, and stay motivated. This integration
                helps ensure not just success, but long-term satisfaction and
                growth in your chosen field.
              </p>
            </div>
          </div>

          {/* Results Summary */}
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#784212] mb-6">
              Your Result Summary
            </h2>

            <div className="mb-4">
              <p className="font-medium text-[#ec7063]">
                Strong Aptitude area:{" "}
                <span className="text-[#145a32]">
                  {careerRecommendations?.aptitude} Aptitude
                </span>
              </p>
            </div>

            <div className="mb-4">
              <p className="font-medium text-[#ec7063]">
                Personality types:{" "}
                <span className="text-[#145a32]">
                  {careerRecommendations?.personalityTypes?.join(" & ") ||
                    "Realistic & Investigative"}
                </span>
              </p>
            </div>

            <div className="mb-2">
  <p className="font-medium text-[#ec7063] mb-2">Interest Areas:</p>
  <div className="flex flex-row space-x-4">
    {/* Left Column */}
    <div className="flex-1">
      <ul className="list-disc pl-6 space-y-1">
        {careerRecommendations?.interestAreas
          ?.slice(0, Math.ceil((careerRecommendations.interestAreas.length)/2))
          ?.map((interest, index) => (
            <li key={index} className="text-[#145a32] font-medium">
              {interest}
            </li>
          )) || (
            <>
              <li className="text-gray-700">Scientific</li>
              <li className="text-gray-700">Analytical</li>
            </>
          )}
      </ul>
    </div>
    {/* Right Column */}
    <div className="flex-1">
      <ul className="list-disc pl-6 space-y-1">
        {careerRecommendations?.interestAreas
          ?.slice(Math.ceil((careerRecommendations.interestAreas.length)/2))
          ?.map((interest, index) => (
            <li key={index + Math.ceil((careerRecommendations?.interestAreas?.length || 0)/2)} className="text-[#145a32] font-medium">
              {interest}
            </li>
          )) || (
            <>
              <li className="text-gray-700">Research-based</li>
              <li className="text-gray-700">Practical</li>
            </>
          )}
      </ul>
    </div>
  </div>
</div>

            <div className="mb-2">
              <p className="font-medium text-[#ec7063]">
                Potential Stream:{" "}
                <span className="text-[#145a32]">
                  {careerRecommendations?.streams?.join("/ ") ||
                    "Science/ Commerce"}
                </span>
              </p>
            </div>

            <div>
              <p className="font-medium text-[#ec7063] mb-1">
                Potential Career Fields:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {(
                  careerRecommendations?.careerFields || [
                    "Software Engineer",
                    "Data Analyst",
                    "Financial Analyst",
                    "Business Consultant",
                    "Research Scientist",
                  ]
                ).map((career, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-[#145a32]">
                      <CheckCircle size={20} />
                    </div>
                    <b>
                      <span className="ml-2  text-gray-700">{career}</span>
                    </b>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Courses Section */}
            <div className="mb-6 mt-6">
              <p className="font-medium text-[#ec7063] mb-2">
                Recommended Courses:
              </p>
              <div className="bg-[#ebfaf1] p-4 rounded-lg border border-[#abebc6]">
                <ul className="space-y-2">
                  {(
                    careerRecommendations?.recommendedCourses || [
                      "B.Sc. in Computer Science",
                      "B.Sc. in Mathematics",
                      "B.Com. with focus on Finance",
                    ]
                  ).map((course, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mt-0.5 text-[#145a32]">
                        <BookOpen size={18} />
                      </div>
                      <b>
                        {" "}
                        <span className="ml-2 text-gray-700">{course}</span>
                      </b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="p-4 sm:p-4 border-b border-gray-200 bg-indigo-50">
            <h3 className="text-lg font-semibold text-[#784212] mb-2">Note:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                This is a preliminary aptitude assessment. For a more thorough
                and comprehensive analysis, we recommend undertaking a detailed
                evaluation.
              </li>
              <li>
                Following the recommendations can greatly elevate the potential
                for success and long-term satisfaction in the chosen career.
              </li>
            </ul>
            <p className="mt-4 text-[#239b56] italic font-medium">
              "Wishing you a future filled with success and endless
              possibilities in the career you choose!"
            </p>
          </div>

          {/* Footer with Signatures */}
          <div className="p-2 sm:p-2 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="h-20 w-40 mx-auto relative">
                  <Image
                    src="/sign/1.png"
                    alt="Signature"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-bold text-[#F08080] mt-2">
                  Ms. Poonam Vipani
                </p>
                <p className="text-sm font-bold text-[#117a65]">
                  Associate Clinical Psychologist{" "}
                </p>
                <p className="text-sm font-bold text-[#117a65]">
                  {" "}
                  A105297 (RCI Registered)
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-40 mx-auto relative">
                  <Image
                    src="/sign/2.png"
                    alt="Signature"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="font-bold text-[#F08080] mt-2">Ms. Rajvee Shah</p>
                <p className="text-sm font-bold text-[#117a65]">Psychologist</p>
              </div>
            </div>
          </div>

          {/* Contact Footer */}
        {/* Contact Footer */}
<div className="bg-green-200 py-4 w-full px-12 flex justify-between items-center">
  <div className="flex flex-col">
    <p className="text-md font-bold text-[#145a32]">SANTVANA</p>
    <p className="text-sm text-[#145a32]">Psychological Well-being Center</p>
  </div>
  <div className="flex flex-col items-end">
    <p className="text-sm text-[#145a32]">98242 18278 | 97230 69261</p>
    <p className="text-sm text-[#145a32]">www.santvana.co.in | santvana27@gmail.com</p>
  </div>
</div>
          {/* <div className="p-6 bg-[#117864] text-white text-center">
            <p className="text-sm">
              98242 18278 | 97230 69261
            </p>
            <p className="text-sm">
              www.santvana.co.in | santvana27@gmail.com
            </p>
          </div> */}
        </motion.div>

        {/* Additional Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPdf}
            className="flex items-center justify-center px-6 py-3 bg-[#784212] text-white rounded-lg shadow hover:bg-[#117a65] transition-colors w-full sm:w-auto"
          >
            {isGeneratingPdf ? (
              <>
                <Loader className="animate-spin h-5 w-5 mr-2" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="h-5 w-5 mr-2" />
                Download Your Report
              </>
            )}
          </button>
          <a
            href="https://www.santvana.co.in/"
            className="flex items-center justify-center px-6 py-3 text-white bg-[#117864] rounded-lg shadow  w-full sm:w-auto"
          >
            <RefreshCcw className="h-5 w-5 mr-2" />
            Visit Our Website
          </a>
          <button
              onClick={handleTakeNewTest}
              className="flex items-center justify-center px-4 py-2 text-white bg-[#117864] rounded-lg shadow "
            >
              <RefreshCcw className="h-4 w-4 mr-2" />
              Take New Test
            </button>
        </div>
      </div>
    </div>
  );
}