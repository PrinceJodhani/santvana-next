"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Calendar,
  User,
  BookOpen,
  Phone,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Info,
  Loader,
  Clock
} from "lucide-react";
import { submitPersonalityData } from "./actions";

// Simple client-side cookie functions since cookies-next might be causing issues
const setCookie = (name, value, days = 1) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(typeof value === 'object' ? JSON.stringify(value) : value)};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop().split(';').shift();
    try {
      // Try to parse as JSON
      return JSON.parse(decodeURIComponent(cookieValue));
    } catch (e) {
      // If it's not JSON, return the raw string
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};

const hasCookie = (name) => {
  return getCookie(name) !== null;
};

// Define all section 1 questions
const section1Questions = [
  { id: 1, text: "I like to take care of animals", category: "Realistic" },
  { id: 2, text: "I like working with numbers or charts", category: "Investigative" },
  { id: 3, text: "I am a creative person", category: "Artistic" },
  { id: 4, text: "I like to work in teams", category: "Social" },
  { id: 5, text: "I am quick to take on new responsibilities", category: "Enterprising" },
  { id: 6, text: "I like to organize things, (files, desks/offices)", category: "Conventional" },
  { id: 7, text: "I like to build things", category: "Realistic" },
  { id: 8, text: "I like to read about art and music", category: "Artistic" },
  { id: 9, text: "I like to have clear instructions to follow", category: "Conventional" },
  { id: 10, text: "I like to try to influence or persuade people", category: "Enterprising" },
  { id: 11, text: "I like to do experiments", category: "Investigative" },
  { id: 12, text: "I like to teach or train people", category: "Social" },
  { id: 13, text: "I like trying to help people solve their problems", category: "Social" },
  { id: 14, text: "I like to work on cars", category: "Realistic" },
  { id: 15, text: "I wouldn't mind working 8 hours per day in an office", category: "Conventional" },
  { id: 16, text: "I like selling things", category: "Enterprising" },
  { id: 17, text: "I enjoy creative writing", category: "Artistic" },
  { id: 18, text: "I enjoy science", category: "Investigative" },
  { id: 19, text: "I am an ambitious person, I set goals for myself", category: "Enterprising" },
  { id: 20, text: "I am interested in healing people", category: "Social" },
  { id: 21, text: "I enjoy trying to figure out how things work", category: "Investigative" },
  { id: 22, text: "I like putting things together or assembling things", category: "Realistic" },
  { id: 23, text: "I am good at working independently", category: "Artistic" },
  { id: 24, text: "I pay attention to details", category: "Conventional" },
  { id: 25, text: "I like to do filing or typing", category: "Conventional" },
  { id: 26, text: "I like to analyze things (problems/ situations)", category: "Investigative" },
  { id: 27, text: "I like to play instruments or sing", category: "Artistic" },
  { id: 28, text: "I enjoy learning about other cultures", category: "Social" },
  { id: 29, text: "I would like to start my own business", category: "Enterprising" },
  { id: 30, text: "I like to cook", category: "Realistic" },
  { id: 31, text: "I like to draw", category: "Artistic" },
  { id: 32, text: "I am a practical person", category: "Realistic" },
  { id: 33, text: "I'm good at math", category: "Investigative" },
  { id: 34, text: "I like helping people", category: "Social" },
  { id: 35, text: "I am good at keeping records of my work", category: "Conventional" },
  { id: 36, text: "I like to give speeches", category: "Enterprising" },
  { id: 37, text: "I like working outdoors", category: "Realistic" },
  { id: 38, text: "I would like to work in an office", category: "Conventional" },
  { id: 39, text: "I like to do puzzles", category: "Investigative" },
  { id: 40, text: "I like to get into discussions about issues", category: "Social" },
  { id: 41, text: "I like acting in plays", category: "Artistic" },
  { id: 42, text: "I like to lead", category: "Enterprising" },
];

// Define section 2 questions
const section2Questions = [
  // Verbal Aptitude
  { 
    id: 1, 
    category: "Verbal Aptitude",
    text: "Select the odd one out", 
    options: ["Dance", "Canteen", "Stage", "Make-up"],
    correctAnswer: "B"
  },
  { 
    id: 2, 
    category: "Verbal Aptitude",
    text: "Find antonym of 'Secret'", 
    options: ["Friendly", "Covert", "Overt", "Hidden"],
    correctAnswer: "C"
  },
  { 
    id: 3, 
    category: "Verbal Aptitude",
    text: "Find synonym of 'Remote'", 
    options: ["Automatic", "Distant", "Savage", "Control"],
    correctAnswer: "B"
  },
  { 
    id: 4, 
    category: "Verbal Aptitude",
    text: "The students ____________ to submit their reports by the end of this week.", 
    options: ["have asked", "are asking", "has asked", "are asked"],
    correctAnswer: "D"
  },
  { 
    id: 5, 
    category: "Verbal Aptitude",
    text: "The woman wished she __________ such a drastic action when the stock market seemed volatile.", 
    options: ["had not taken", "did not take", "not take", "no had taken"],
    correctAnswer: "A"
  },
  
  // Spatial Aptitude
  { 
    id: 6, 
    category: "Spatial Aptitude",
    text: "If the net was folded into a cube, which of the given shapes would it look like?", 
    options: ["A", "B", "C", "D"],
    image: "/section2/s1.png",
    correctAnswer: "D"
  },
  { 
    id: 7, 
    category: "Spatial Aptitude",
    text: "Which of the given shapes is the same 3D shape in different position?", 
    options: ["A", "B", "C", "D"],
    image: "/section2/s2.png",
    correctAnswer: "D"
  },
  { 
    id: 8, 
    category: "Spatial Aptitude",
    text: "Which of the given shapes is the rotation of the main image?", 
    options: ["A", "B", "C", "D"],
    image: "/section2/s3.png",
    correctAnswer: "C"
  },
  { 
    id: 9, 
    category: "Spatial Aptitude",
    text: "What would the 3D shape look like from above?", 
    options: ["A", "B", "C", "D"],
    image: "/section2/s4.png",
    correctAnswer: "A"
  },
  { 
    id: 10, 
    category: "Spatial Aptitude",
    text: "Which of the given shapes is the rotation of the main image?", 
    options: ["A", "B", "C", "D"],
    image: "/section2/s5.png",
    correctAnswer: "D"
  },
  
  // Numerical Aptitude
  { 
    id: 11, 
    category: "Numerical Aptitude",
    text: "A sum of money placed at compound interest doubles itself in 5 years. in how many years it will amount to eight times of itself?", 
    options: ["10 years", "12 years", "15 years", "20 years"],
    correctAnswer: "C"
  },
  { 
    id: 12, 
    category: "Numerical Aptitude",
    text: "If a shirt costs INR 1750 and is discounted by 15%, what is the sale price?", 
    options: ["INR 1448.5", "INR 1487.5", "INR 1438.5", "INR 1424.5"],
    correctAnswer: "B"
  },
  { 
    id: 13, 
    category: "Numerical Aptitude",
    text: "A population of 200 grows by 10% annually. What is the population after one year?", 
    options: ["240", "230", "210", "220"],
    correctAnswer: "D"
  },
  { 
    id: 14, 
    category: "Numerical Aptitude",
    text: "A recipe uses 1.5 cups of flour for 3 cups of sugar. How much sugar is needed for 4.5 cups of flour?", 
    options: ["6", "9", "12", "7"],
    correctAnswer: "B"
  },
  { 
    id: 15, 
    category: "Numerical Aptitude",
    text: "A chart shows sales: Jan (55), Feb (65), Mar (70), April (55). What is the average monthly sales?", 
    options: ["61.25", "65.25", "63.25", "68.25"],
    correctAnswer: "A"
  },
  
  // Clerical Aptitude
  { 
    id: 16, 
    category: "Clerical Aptitude",
    text: "Which of the following names would come second if they were arranged in alphabetical order?", 
    options: ["Drew Berry Jones", "Dylan Jones", "Drew Barry Jomes", "D. B. Jones"],
    correctAnswer: "C"
  },
  { 
    id: 17, 
    category: "Clerical Aptitude",
    text: "Which of the following is the earliest date?", 
    options: ["July 9, 1969", "July 9, 1999", "June 9, 1996", "June 9, 1969"],
    correctAnswer: "D"
  },
  { 
    id: 18, 
    category: "Clerical Aptitude",
    text: "Choose the name that is different from the others.", 
    options: ["D. C. Lessawer", "D. C. Lessauer", "D. C. Lessawer", "D. C. Lessawer"],
    correctAnswer: "B"
  },
  { 
    id: 19, 
    category: "Clerical Aptitude",
    text: "Choose the number that is different from the others.", 
    options: ["960980493849", "960980499849", "960980499849", "960980499849"],
    correctAnswer: "A"
  },
  { 
    id: 20, 
    category: "Clerical Aptitude",
    text: "In the dictionary, which word come after word – Commitment", 
    options: ["Committee", "Communicate", "Committed", "Commiserate"],
    correctAnswer: "C"
  },
  
  // Logical Aptitude
  { 
    id: 21, 
    category: "Logical Aptitude",
    text: "What will come in place of the question mark (?) in the following number series? 70, 68, 75, 68, 82, 68, ? , 68", 
    options: ["85", "91", "90", "89"],
    correctAnswer: "B"
  },
  { 
    id: 22, 
    category: "Logical Aptitude",
    text: "Find missing number\n2,5,6,28\n4,9,9,77\n3,7,6,?", 
    options: ["28", "39", "47", "57"],
    correctAnswer: "B"
  },
  { 
    id: 23, 
    category: "Logical Aptitude",
    text: "Find missing number\n4 + 2 = 26\n8 + 1 = 79\n6 + 5 = 111\n7 + 3 = ?", 
    options: ["410", "608", "290", "375"],
    correctAnswer: "A"
  },
  { 
    id: 24, 
    category: "Logical Aptitude",
    text: "Raj, Prem, Parth have hobbies: painting, hiking, reading. Prem doesn't hike. Parth doesn't read. Who paints?", 
    options: ["Prem", "Raj", "Parth", "Cannot be determined"],
    correctAnswer: "B"
  },
  { 
    id: 25, 
    category: "Logical Aptitude",
    text: "If all cats are mammals, and some mammals are black, which is true?", 
    options: ["All cats are black", "Some cats are black", "Some mammals are not cats", "No cats are black"],
    correctAnswer: "C"
  }
];

export default function PersonalityTest() {
  // States for multi-step form
  const [currentStep, setCurrentStep] = useState("registration");
  const [formData, setFormData] = useState({
    full_name: "",
    dob: "",
    age: "",
    std: "12th Arts",
    contact: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToSection1, setAgreedToSection1] = useState(false);
  const [agreedToSection2, setAgreedToSection2] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [section1Answers, setSection1Answers] = useState({});
  const [section2Answers, setSection2Answers] = useState({});
  const [userId, setUserId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(7 * 60); // 7 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const router = useRouter();
  const timerRef = useRef(null);
  const educationOptions = ["12th Arts", "12th Science", "12th Commerce"];
  
  // Get current question based on section
  const currentSection1Question = section1Questions[currentQuestionIndex];
  const totalSection1Questions = section1Questions.length;
  
  const currentSection2QuestionIndex = currentStep === "section2" ? currentQuestionIndex : 0;
  const currentSection2Question = section2Questions[currentSection2QuestionIndex];
  const totalSection2Questions = section2Questions.length;

  // Format time for display (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Timer for section 2
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            // Time's up - move to results
            handleFinishSection2();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive, timeLeft]);

  // Check if user session exists on page load
  useEffect(() => {
    // Wait for document to be fully loaded before checking cookies
    if (typeof window !== 'undefined') {
      const checkSession = () => {
        try {
          const savedUserId = getCookie("user_id");
          const savedSection = getCookie("current_section");
          
          if (savedUserId) {
            setUserId(savedUserId);
            
            // If user has already started a section, resume from there
            if (savedSection === "section1") {
              setCurrentStep("section1");
              
              // Load answers if available
              const savedAnswers = getCookie("section1_answers");
              if (savedAnswers) {
                setSection1Answers(savedAnswers);
                // Find the last answered question
                const answeredQuestionIds = Object.keys(savedAnswers).map(id => parseInt(id));
                if (answeredQuestionIds.length > 0) {
                  const maxId = Math.max(...answeredQuestionIds);
                  const maxIndex = section1Questions.findIndex(q => q.id === maxId);
                  setCurrentQuestionIndex(maxIndex + 1 < totalSection1Questions ? maxIndex + 1 : maxIndex);
                }
              }
            } else if (savedSection === "section2_instructions") {
              setCurrentStep("section2_instructions");
            } else if (savedSection === "section2") {
              setCurrentStep("section2");
              setTimerActive(true);
              
              // Load section 2 answers and timer if available
              const savedSection2Answers = getCookie("section2_answers");
              const savedTimeLeft = getCookie("section2_time_left");
              
              if (savedSection2Answers) {
                setSection2Answers(savedSection2Answers);
                const answeredQuestionIds = Object.keys(savedSection2Answers).map(id => parseInt(id));
                if (answeredQuestionIds.length > 0) {
                  const maxId = Math.max(...answeredQuestionIds);
                  const maxIndex = section2Questions.findIndex(q => q.id === maxId);
                  setCurrentQuestionIndex(maxIndex + 1 < totalSection2Questions ? maxIndex + 1 : maxIndex);
                }
              }
              
              if (savedTimeLeft) {
                const parsedTimeLeft = parseInt(savedTimeLeft);
                if (!isNaN(parsedTimeLeft) && parsedTimeLeft > 0) {
                  setTimeLeft(parsedTimeLeft);
                }
              }
            } else if (savedSection === "completed") {
              // Navigate to results page if test is complete
              router.push("/career-guidance-test/result");
            } else {
              // Default to instructions if registration is complete but no section started
              setCurrentStep("section1_instructions");
            }
          }
        } catch (error) {
          console.error("Error checking session:", error);
        }
      };
      
      checkSession();
    }
  }, [router, totalSection1Questions, totalSection2Questions]);

  // Auto-advance to next question after selection in section 1
  useEffect(() => {
    if (!currentSection1Question) return;
    
    const hasSelectedCurrentQuestion = section1Answers[currentSection1Question.id] !== undefined;
    
    if (currentStep === "section1" && hasSelectedCurrentQuestion) {
      const timer = setTimeout(() => {
        if (currentQuestionIndex < totalSection1Questions - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [section1Answers, currentQuestionIndex, currentSection1Question, currentStep, totalSection1Questions]);

  // Auto-advance to next question after selection in section 2
 useEffect(() => {
  if (!currentSection2Question || isManualNavigation) {
    // Clear the manual navigation flag after skipping the auto-advance once
    if (isManualNavigation) {
      setIsManualNavigation(false);
    }
    return;
  }
  
  if (currentStep === "section2" && currentSection2Question.id) {
    const hasSelectedCurrentQuestion = section2Answers[currentSection2Question.id] !== undefined;
    
    if (hasSelectedCurrentQuestion) {
      const timer = setTimeout(() => {
        if (currentSection2QuestionIndex < totalSection2Questions - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }
}, [section2Answers, currentSection2QuestionIndex, currentSection2Question, currentStep, totalSection2Questions, isManualNavigation]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      newErrors.age = "Please enter a valid age";
    }
    
    if (!formData.std) {
      newErrors.std = "Education is required";
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit mobile number";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For contact field, ensure only numbers are entered
    if (name === "contact") {
      const numbersOnly = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numbersOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    
    // Auto-calculate age if date of birth changes
    if (name === "dob") {
      const birthDate = new Date(value);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      
      if (!isNaN(calculatedAge) && calculatedAge >= 0) {
        setFormData((prev) => ({ ...prev, age: calculatedAge.toString() }));
      }
    }
  };

  // Registration form submission
  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      setIsSubmitting(true);
      
      // Submit to database
      const result = await submitPersonalityData(formData);
      
      if (result.success) {
        // Save user data in cookies
        setCookie("user_id", result.id, 1); // 1 day
        setCookie("user_info", { 
          name: formData.full_name,
          email: formData.email
        }, 1);

        setCookie("user_full_name", formData.full_name, 1);
setCookie("user_dob", formData.dob, 1);
setCookie("user_age", formData.age, 1);
setCookie("user_education", formData.std, 1);
setCookie("user_contact", formData.contact, 1);
setCookie("user_email", formData.email, 1);
        
        setUserId(result.id);
        
        // Move to instructions
        setCurrentStep("section1_instructions");
        setCookie("current_section", "section1_instructions", 1);
      } else {
        setErrors((prev) => ({ ...prev, form: result.error || "Failed to submit form. Please try again." }));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors((prev) => ({ ...prev, form: "Failed to submit form. Please try again." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Start Section 1 after agreeing to instructions
  const handleStartSection1 = () => {
    if (agreedToSection1) {
      setCookie("current_section", "section1", 1);
      setCurrentStep("section1");
      setCurrentQuestionIndex(0);
    }
  };

  // Start Section 2 after agreeing to instructions
  const handleStartSection2 = () => {
    if (agreedToSection2) {
      setCookie("current_section", "section2", 1);
      setCurrentStep("section2");
      setCurrentQuestionIndex(0);
      setTimerActive(true);
    }
  };

  // Handle section 1 question answers
  const handleSection1Answer = (value) => {
    // Save answer (1 for Yes, 0 for No)
    const updatedAnswers = {
      ...section1Answers,
      [currentSection1Question.id]: value
    };
    
    setSection1Answers(updatedAnswers);
    
    // Save answers to cookies after each question
    setCookie("section1_answers", updatedAnswers, 1);
  };

  // Handle section 2 question answers
  const handleSection2Answer = (value) => {
    const updatedAnswers = {
      ...section2Answers,
      [currentSection2Question.id]: value
    };
    
    setSection2Answers(updatedAnswers);
    
    // Save answers and timer to cookies after each question
    setCookie("section2_answers", updatedAnswers, 1);
    setCookie("section2_time_left", timeLeft, 1);
  };

  // Navigate to previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Navigate to next question
  const handleNextQuestion = () => {
    const maxQuestions = currentStep === "section1" ? totalSection1Questions : totalSection2Questions;
    
    if (currentQuestionIndex < maxQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // Skip current question
  const handleSkipQuestion = () => {
    const maxQuestions = currentStep === "section1" ? totalSection1Questions : totalSection2Questions;
    
    if (currentQuestionIndex < maxQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // Calculate results for section 1
  const calculateSection1Results = () => {
    // Categories as per the answer key
    const categories = {
      "Realistic": [1, 7, 14, 22, 30, 32, 37],
      "Investigative": [2, 11, 18, 21, 26, 33, 39],
      "Artistic": [3, 8, 17, 23, 27, 31, 41],
      "Social": [4, 12, 13, 20, 28, 34, 40],
      "Enterprising": [5, 10, 16, 19, 29, 36, 42],
      "Conventional": [6, 9, 15, 24, 25, 35, 38]
    };
    
    // Calculate scores for each category
    const scores = {};
    Object.entries(categories).forEach(([category, questionIds]) => {
      let score = 0;
      questionIds.forEach(id => {
        if (section1Answers[id] === 1) {
          score += 1;
        }
      });
      scores[category] = score;
    });
    
    return scores;
  };

  // Finish section 1 and move to section 2 instructions
  const handleFinishSection1 = async () => {
    try {
      setIsSubmitting(true);
      
      // Calculate scores
      const scores = calculateSection1Results();
      
      // Save results to cookies
      setCookie("section1_results", scores, 1);
      setCookie("current_section", "section2_instructions", 1);
      
      // Move to section 2 instructions
      setCurrentStep("section2_instructions");
    } catch (error) {
      console.error("Error saving results:", error);
      alert("There was an error saving your results. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate section 2 results
  const calculateSection2Results = () => {
    let correctAnswers = 0;
    let totalAttempted = Object.keys(section2Answers).length;
    
    Object.entries(section2Answers).forEach(([questionId, answer]) => {
      const question = section2Questions.find(q => q.id === parseInt(questionId));
      if (question && answer === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    return {
      totalQuestions: totalSection2Questions,
      attempted: totalAttempted,
      correct: correctAnswers,
      score: Math.round((correctAnswers / totalSection2Questions) * 100)
    };
  };

  // Finish section 2 and navigate to results
  const handleFinishSection2 = async () => {
    try {
      setIsSubmitting(true);
      setTimerActive(false);
      
      // Calculate results
      const section2Results = calculateSection2Results();
      
      // Save results to cookies
      setCookie("section2_results", section2Results, 1);
      setCookie("current_section", "completed", 1);
      
      // Navigate to results page
      router.push("/personality-test/result");
    } catch (error) {
      console.error("Error finishing section 2:", error);
      alert("There was an error completing the test. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styling classes
  const inputClasses = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const errorClasses = "mt-1 text-sm text-red-600";
  
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };
  
  // Progress calculation for section 1
  const section1Progress = ((currentQuestionIndex + 1) / totalSection1Questions) * 100;
  
  // Progress calculation for section 2
  const section2Progress = ((currentQuestionIndex + 1) / totalSection2Questions) * 100;

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mt-20 mx-auto">
        {/* REGISTRATION FORM */}
        {currentStep === "registration" && (
          <motion.div
            key="registration"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="bg-[#abebc6] py-6 px-8">
                <h1 className="text-2xl font-bold text-[#186a3b]">Career Guidance Assessment Registration</h1>
                <p className="text-[#186a3b] mt-2">Please fill out the form below to begin your assessment</p>
              </div>
              
              <form 
                onSubmit={handleRegistrationSubmit}
                className="py-8 px-8 space-y-6"
              >
                {errors.form && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {errors.form}
                  </div>
                )}
                
                <div>
                  <label htmlFor="full_name" className={labelClasses}>Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      value={formData.full_name}
                      onChange={handleChange}
                      className={`${inputClasses} pl-10`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.full_name && <p className={errorClasses}>{errors.full_name}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="dob" className={labelClasses}>Date of Birth</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
                        className={`${inputClasses} pl-10`}
                      />
                    </div>
                    {errors.dob && <p className={errorClasses}>{errors.dob}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="age" className={labelClasses}>Age</label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your age"
                      min="1"
                      readOnly
                    />
                    {errors.age && <p className={errorClasses}>{errors.age}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="std" className={labelClasses}>Education</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookOpen size={18} className="text-gray-400" />
                    </div>
                    <select
                      id="std"
                      name="std"
                      value={formData.std}
                      onChange={handleChange}
                      className={`${inputClasses} pl-10 appearance-none`}
                    >
                      {educationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {errors.std && <p className={errorClasses}>{errors.std}</p>}
                </div>
                
                <div>
                  <label htmlFor="contact" className={labelClasses}>Contact Number</label>
                  <div className="relative flex">
                    <div className="flex-shrink-0 inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg text-gray-500">
                      <div className="flex items-center">
                        <span className="mr-1">🇮🇳</span>
                        <span className="font-medium">+91</span>
                      </div>
                    </div>
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      value={formData.contact}
                      onChange={handleChange}
                      className={`${inputClasses} rounded-l-none`}
                      placeholder="10-digit mobile number"
                      maxLength="10"
                      pattern="[0-9]{10}"
                    />
                  </div>
                  {errors.contact && <p className={errorClasses}>{errors.contact}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className={labelClasses}>Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputClasses} pl-10`}
                      placeholder="Your email address"
                    />
                  </div>
                  {errors.email && <p className={errorClasses}>{errors.email}</p>}
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#935116] hover:bg-[#1d8348] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin -ml-1 mr-3 h-5 w-5" />
                        Processing...
                      </>
                    ) : 'Begin Test'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* SECTION 1 INSTRUCTIONS */}
        {currentStep === "section1_instructions" && (
          <motion.div
            key="section1_instructions"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="bg-[#abebc6] py-6 px-8">
                <h1 className="text-2xl font-bold text-[#186a3b]">Career Guidance Test</h1>
                <p className="text-[#186a3b] mt-2">Instructions for Section 1</p>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-[#abebc6] flex items-center justify-center">
                    <Info size={24} className="text-indigo-600" />
                  </div>
                  <h2 className="text-xl font-bold text-[#145a32]">Section 1: Interest & Personality Inventory</h2>
                </div>
                
                <div className="mt-6 prose prose-indigo">
                  <h3 className="text-lg font-semibold">Instructions:</h3>
                  <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
                    <li>This inventory is designed to help you identify your <b> interests and personality</b></li>
                    <li>Read each statement carefully.</li>
                    <li>Click <strong>Yes</strong>, if you agree with the statement, click <strong>No</strong>, if you don't agree with it.</li>
                    <li>Be honest and consider your genuine feelings rather than what you think is expected.</li>
                    <li><b>There are no right or wrong answers!</b> It is about liking the work, which may different person to person.</li>
                  </ul>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <div className="flex items-center">
                    <input
                      id="agree-section1"
                      name="agree-section1"
                      type="checkbox"
                      checked={agreedToSection1}
                      onChange={(e) => setAgreedToSection1(e.target.checked)}
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="agree-section1" className="ml-3 block text-sm font-medium text-gray-700">
                      I understand the instructions and I'm ready to begin the test
                    </label>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleStartSection1}
                    disabled={!agreedToSection1}
                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#935116] hover:bg-[#1d8348] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                      !agreedToSection1 ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    <CheckCircle className="mr-2" size={20} />
                    Begin Section 1
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SECTION 1 QUESTIONS */}
        {currentStep === "section1" && currentSection1Question && (
          <motion.div
            key="section1"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="bg-[#abebc6] py-4 px-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold text-[#145a32]">Section 1: Interest & Personality</h1>
                  <span className="text-[#145a32]">
                    <b>Question {currentQuestionIndex + 1} of {totalSection1Questions}</b>
                  </span>
                </div>
                {/* Progress bar */}
                <div className="mt-2 h-2 w-full bg-white rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#145a32] transition-all duration-300 ease-in-out"
                    style={{ width: `${section1Progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-8">
                <div
                  key={currentQuestionIndex}
                  className="min-h-[200px]"
                >
                  <h2 className="text-xl font-medium text-gray-800 mb-8">
                    {currentSection1Question.text}
                  </h2>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => handleSection1Answer(1)}
                      className={`flex-1 py-4 px-6 border rounded-lg shadow-sm text-lg font-medium transition-colors ${
                        section1Answers[currentSection1Question.id] === 1
                          ? "bg-green-600 text-white border-transparent"
                          : "bg-white text-gray-800 border-gray-300 hover:bg-green-50"
                      }`}
                    >
                      Yes
                    </button>
                    
                    <button
                      onClick={() => handleSection1Answer(0)}
                      className={`flex-1 py-4 px-6 border rounded-lg shadow-sm text-lg font-medium transition-colors ${
                        section1Answers[currentSection1Question.id] === 0
                          ? "bg-red-600 text-white border-transparent"
                          : "bg-white text-gray-800 border-gray-300 hover:bg-red-50"
                      }`}
                    >
                      No
                    </button>
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <button
                      onClick={handlePrevQuestion}
                      disabled={currentQuestionIndex === 0}
                      className={`flex items-center py-2 px-4 rounded-md text-sm font-medium ${
                        currentQuestionIndex === 0
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-indigo-600 hover:text-indigo-700"
                      }`}
                    >
                      <ArrowLeft size={16} className="mr-1" />
                      Previous
                    </button>

                    <button
                      onClick={handleSkipQuestion}
                      disabled={currentQuestionIndex === totalSection1Questions - 1}
                      className={`py-2 px-4 rounded-md text-sm font-medium ${
                        currentQuestionIndex === totalSection1Questions - 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      Skip
                    </button>

                    {/* Navigation buttons */}
                    {currentQuestionIndex < totalSection1Questions - 1 ? (
                      <button
                        onClick={handleNextQuestion}
                        className="flex items-center py-2 px-4 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Next
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    ) : (
                      <button
                        onClick={handleFinishSection1}
                        disabled={isSubmitting}
                        className="flex items-center py-2 px-4 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader className="animate-spin mr-2" size={16} />
                            Processing...
                          </>
                        ) : (
                          <>
                            Finish Section 1
                            <ArrowRight size={16} className="ml-1" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SECTION 2 INSTRUCTIONS */}
        {currentStep === "section2_instructions" && (
          <motion.div
            key="section2_instructions"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="bg-[#abebc6] py-6 px-8">
                <h1 className="text-2xl font-bold text-[#145a32]">Career Guidance Assessment</h1>
                {/* <p className="text-[#145a32] mt-2"><b>Instructions for Section 2</b></p> */}
                 <div className="flex items-center space-x-3 mt-6">
                  <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Clock size={24} className="text-yellow-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Section 2: Aptitude Assessment</h2>
                </div>
              </div>

              <div className="p-8">
               
                
                <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 mb-6">
                  <div className="flex items-center">
                    <Clock size={20} className="text-yellow-600 mr-2" />
                    <p className="font-medium text-yellow-800">Time Limit: 7 Minutes</p>
                  </div>
                  <p className="mt-2 text-sm text-yellow-700">
                    Once you begin, you'll have 7 minutes to complete this section. The timer cannot be paused.
                  </p>
                </div>
                
                <div className="mt-6 prose prose-indigo">
                  <h3 className="text-lg font-semibold">Instructions:</h3>
                  <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
                    <li>This test consists of multiple-choice questions (MCQs), with only one correct answer for each.</li>
                    <li>You will have <b>7 minutes</b> to complete the entire test, which includes 25 questions.</li>
                    <li><b>Aim to attempt as many questions as possible within the time limit.</b></li>
                    <li><b>If you are unsure about an answer, it's advisable to move on to the next question to avoid wasting time.</b></li>
                    <li>Rough work on paper is allowed but<b> calculator </b>is not allowed</li>
                  
                  </ul>
                  <p className="font-semibold text-gray-700 mt-4">Good luck!</p>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <div className="flex items-center">
                    <input
                      id="agree-section2"
                      name="agree-section2"
                      type="checkbox"
                      checked={agreedToSection2}
                      onChange={(e) => setAgreedToSection2(e.target.checked)}
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="agree-section2" className="ml-3 block text-sm font-medium text-gray-700">
                      I've read all the instruction and understood the time limit, I'm ready to begin Section 2
                    </label>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleStartSection2}
                    disabled={!agreedToSection2}
                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#935116] hover:bg-[#1d8348] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                      !agreedToSection2 ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    <CheckCircle className="mr-2" size={20} />
                    Begin Section 2 (Timer will start)
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SECTION 2 QUESTIONS */}
        {currentStep === "section2" && currentSection2Question && (
          <motion.div
            key="section2"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="bg-[#abebc6] py-4 px-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold text-[#145a32]">Section 2: Aptitude Assessment</h1>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center bg-black bg-opacity-100 px-3 py-1 rounded-full">
                      <Clock size={16} className="text-white mr-1" />
                      <span className="text-white font-medium">{formatTime(timeLeft)}</span>
                    </div>
                    <span className="text-[#145a32]">
                      {currentQuestionIndex + 1} / {totalSection2Questions}
                    </span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-2 h-2 w-full bg-white rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#145a32] transition-all duration-300 ease-in-out"
                    style={{ width: `${section2Progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-8">
                <div
                  key={currentQuestionIndex}
                  className="min-h-[300px]"
                >
                  {/* <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                      {currentSection2Question.category}
                    </span>
                  </div> */}
                  
                  <h2 className="text-xl font-medium text-gray-800 mb-4 whitespace-pre-line">
                    {currentSection2Question.text}
                  </h2>
                  
                  {/* Show image if available */}
                  {currentSection2Question.image && (
                    <div className="my-6 flex justify-center">
                      <div className="relative w-full max-w-md h-40 sm:h-64">
                        <img
                          src={currentSection2Question.image}
                          alt="Question visual"
                          
                          style={{ height: "100%", width: "100%", objectFit: "contain" }}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-6 space-y-3">
                    {currentSection2Question.options.map((option, index) => {
                      const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
                      return (
                        <button
                          key={index}
                          onClick={() => handleSection2Answer(optionLetter)}
                          className={`w-full flex items-center p-4 border rounded-lg text-left ${
                            section2Answers[currentSection2Question.id] === optionLetter
                              ? "bg-[#abebc6] text-white border-transparent"
                              : "bg-white text-gray-800 border-gray-300 hover:bg-[#abebc6]"
                          }`}
                        >
                          <span className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 ${
                            section2Answers[currentSection2Question.id] === optionLetter
                              ? "bg-white text-indigo-600"
                              : "bg-indigo-100 text-indigo-600"
                          }`}>
                            {optionLetter}
                          </span>
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <button
                      onClick={handlePrevQuestion}
                      disabled={currentQuestionIndex === 0}
                      className={`flex items-center py-2 px-4 rounded-md text-sm font-medium ${
                        currentQuestionIndex === 0
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-indigo-600 hover:text-indigo-700"
                      }`}
                    >
                      <ArrowLeft size={16} className="mr-1" />
                      Previous
                    </button>

                    <button
                      onClick={handleSkipQuestion}
                      disabled={currentQuestionIndex === totalSection2Questions - 1}
                      className="py-2 px-4 rounded-md text-sm font-medium text-gray-600 hover:text-gray-800"
                    >
                      Skip
                    </button>

                    {/* Navigation buttons */}
                    {currentQuestionIndex < totalSection2Questions - 1 ? (
                      <button
                        onClick={handleNextQuestion}
                        className="flex items-center py-2 px-4 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Next
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    ) : (
                      <button
                        onClick={handleFinishSection2}
                        disabled={isSubmitting}
                        className="flex items-center py-2 px-4 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader className="animate-spin mr-2" size={16} />
                            Processing...
                          </>
                        ) : (
                          <>
                            Finish Test
                            <ArrowRight size={16} className="ml-1" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}