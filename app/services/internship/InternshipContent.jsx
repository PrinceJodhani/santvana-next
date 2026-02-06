// app/services/internship/InternshipContent.jsx
"use client";
import React from "react";
import PageHero from "@/app/components/PageHero";

const learningPoints = [
  "Case history taking & Mental Status Examination (MSE)",
  "Counselling skills development",
  "Child therapy session observation",
  "Psychological assessments & report writing",
  "Child development services (OT, Speech, ABA, SpEd, Remedial)",
  "Case discussions & clinical reasoning",
  "Workshops & training sessions",
  "Ethical practice understanding",
];

const eligibility = [
  "Psychology students (BA / MA / MSc)",
  "Allied mental-health students",
  "Individuals seeking clinical exposure",
];

export default function InternshipContent() {
  const handleContact = () => {
    const phone = "919824218278";
    const message = encodeURIComponent(
      "Hello, I would like to enquire about the internship programme at Santvana Psychological Well-Being Centre."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <>
      <PageHero
        badge="Internship"
        title="Internship & Training Programmes"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What Interns Gain */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 mb-6">
              What Interns Gain
            </h2>
            <div className="bg-sage-50/60 rounded-2xl p-6 md:p-8">
              <ul className="space-y-4">
                {learningPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm md:text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Who Can Apply */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 mb-6">
              Who Can Apply
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
              <ul className="space-y-4">
                {eligibility.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mode */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 mb-4">
              Mode
            </h2>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-100 text-sage-800 text-sm font-medium">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Offline internship at our Surat centre
            </div>
          </div>

          {/* Additional Info */}
          <div className="mb-14">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              For eligibility criteria, duration, and application details, please contact us directly.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-sage-50/60 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-900 mb-3">
              Interested in Applying?
            </h3>
            <p className="text-gray-500 text-sm md:text-base mb-6 max-w-lg mx-auto leading-relaxed">
              Reach out to us on WhatsApp for internship enquiries, eligibility details, and next steps.
            </p>
            <button
              onClick={handleContact}
              className="bg-sage-700 text-white hover:bg-sage-800 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
