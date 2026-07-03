// app/faq/FAQContent.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/app/components/PageHero";
import { faqs } from "@/app/data/faqs";

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="border-b border-gray-100 last:border-b-0"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-medium text-gray-900 group-hover:text-sage-700 transition-colors duration-200">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-sage-300 transition-colors duration-200">
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-4 h-4 text-sage-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v12m6-6H6"
            />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-sm text-gray-500 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about therapy, counselling, psychologists vs psychiatrists, fees, sessions & confidentiality at Santvana, Surat."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm divide-y divide-gray-100 px-6 md:px-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                toggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* CTA below FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 text-sm mb-5">
              Still have questions? We are happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/919824218278?text=Hello%2C%20I%20have%20a%20question%20regarding%20therapy%20at%20Santvana."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage-700 text-white text-sm font-semibold hover:bg-sage-800 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.4 0-4.618-.775-6.42-2.088l-.447-.34-2.635.884.884-2.635-.34-.447A9.957 9.957 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-sage-300 hover:text-sage-700 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
