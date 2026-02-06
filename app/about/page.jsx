// app/about/page.jsx
import Link from "next/link";
import PageHero from "@/app/components/PageHero";

export const metadata = {
  title: "About Santvana | Trusted Psychologists & Therapists in Surat",
  description:
    "Santvana Psychological Well-Being Centre is a leading mental health clinic in Surat with clinical psychologists, trained therapists & child development experts.",
};

const subPages = [
  {
    title: "Mission & Vision",
    description:
      "Discover the values and purpose that drive our commitment to mental health care in Surat.",
    href: "/about/mission-vision",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
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
    ),
  },
  {
    title: "Our Team",
    description:
      "Meet the experienced clinical psychologists, therapists, and specialists behind Santvana.",
    href: "/about/team",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Gallery",
    description:
      "Explore our therapy spaces, child development areas, and welcoming clinic environment.",
    href: "/about/gallery",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21ZM12 9.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="About Santvana"
        subtitle="Santvana Psychological Well-Being Centre is a leading mental health clinic in Surat with clinical psychologists, trained therapists & child development experts."
      />

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Santvana Psychological Well-Being Centre is committed to providing
              ethical, confidential, and research-backed psychological services
              for children, adolescents, adults, and families. We bring together
              multiple professionals to offer complete mental health and
              developmental support under one roof.
            </p>
          </div>

          {/* Search Keywords */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-sage-50/60 border border-sage-100 rounded-2xl p-8 md:p-10">
              <p className="text-sage-800 font-medium text-center mb-4">
                If you are searching for
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Best Psychologist in Surat",
                  "Psychologist Near Me",
                  "Child Psychologist Near Me",
                  "Therapy Centre Near Me",
                  "Counselling Centre in Surat",
                  "Mental Health Clinic in Surat",
                ].map((keyword) => (
                  <span
                    key={keyword}
                    className="inline-block px-4 py-2 bg-white rounded-full text-sm text-sage-700 border border-sage-200 font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-sage-700 text-center mt-4 text-sm">
                You are at the right place. Santvana is here to help.
              </p>
            </div>
          </div>

          {/* Multidisciplinary Team */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold uppercase tracking-wider mb-4">
                  Our Team
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 mb-4">
                  A Multidisciplinary Approach
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our multidisciplinary team includes clinical psychologists,
                  trained therapists, occupational therapists, speech therapists,
                  ABA professionals, special educators, remedial educators,
                  dieticians, and holistic wellness experts.
                </p>
              </div>
              <div className="bg-gradient-to-br from-sage-50 to-teal-50 rounded-2xl p-8">
                <h3 className="font-semibold text-sage-800 mb-4">
                  Sessions Available
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sage-800">Online</p>
                      <p className="text-sm text-gray-500">
                        Across India & worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sage-800">Offline</p>
                      <p className="text-sm text-gray-500">
                        In Surat, Gujarat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-page Links */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-900 text-center mb-10">
              Learn More About Us
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {subPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group block bg-white border border-gray-100 rounded-2xl p-6 hover:border-sage-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center mb-4 group-hover:bg-sage-100 transition-colors">
                    {page.icon}
                  </div>
                  <h3 className="font-serif font-semibold text-sage-900 text-lg mb-2">
                    {page.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {page.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-sage-600 group-hover:text-sage-700 transition-colors">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
