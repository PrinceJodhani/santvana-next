// app/about/mission-vision/page.jsx
import PageHero from "@/app/components/PageHero";

export const metadata = {
  title: "Mission & Vision | Mental Health Centre in Surat",
  description:
    "Learn about Santvana's mission to provide ethical, compassionate and evidence-based psychological care for children, adults and families in Surat.",
};

const visionPoints = [
  "Mental health",
  "Child development",
  "Psychotherapies",
  "Assessment & intervention",
  "Holistic wellness",
];

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        badge="Our Purpose"
        title="Mission & Vision"
        subtitle="Learn about Santvana's mission to provide ethical, compassionate and evidence-based psychological care for children, adults and families in Surat."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sage-50 to-white border border-sage-100 rounded-2xl p-8 md:p-10 h-full">
                <div className="w-14 h-14 rounded-xl bg-sage-100 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-sage-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold uppercase tracking-wider mb-4">
                  Our Mission
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 mb-6">
                  Empowering Lives Through Care
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To deliver high-quality psychological, therapeutic, and
                  developmental care that empowers individuals and families to
                  lead emotionally healthy lives.
                </p>
                <div className="mt-8 pt-6 border-t border-sage-100">
                  <p className="text-sm text-sage-600 italic">
                    &ldquo;We believe every individual deserves access to ethical,
                    confidential, and compassionate mental health support.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-8 md:p-10 h-full">
                <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-teal-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-xs font-semibold uppercase tracking-wider mb-4">
                  Our Vision
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 mb-6">
                  Surat&apos;s Most Trusted Centre
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To become Surat&apos;s most trusted and comprehensive centre for:
                </p>
                <ul className="space-y-3 mb-8">
                  {visionPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="white"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-teal-100">
                  <p className="text-sm text-teal-600 italic">
                    &ldquo;We aim to create a space where every client feels safe,
                    respected, and supported.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Connecting Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-sage-50 rounded-full border border-sage-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-sage-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span className="text-sm font-medium text-sage-700">
                Committed to your well-being since day one
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
