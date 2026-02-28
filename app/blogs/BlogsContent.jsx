// app/blogs/BlogsContent.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import { blogs } from "@/app/data/blogs";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogsContent() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Insights & Resources"
        subtitle="Thoughtful, evidence-based articles by our psychologists and therapists — helping you navigate mental health, relationships, and personal growth."
      />

      {/* Blog Cards Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-brown-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brown-100/60 text-brown-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brown-500 animate-pulse" />
              Latest Articles
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-900">
              Stories That{" "}
              <span className="bg-gradient-to-r from-teal-700 to-brown-700 bg-clip-text text-transparent">
                Heal & Inspire
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog) => (
              <motion.div key={blog.slug} variants={card}>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-brown-100/60 hover:shadow-xl hover:shadow-brown-100/40 hover:border-brown-200 transition-all duration-500 h-full"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-brown-700 shadow-sm">
                        {blog.category}
                      </span>
                    </div>

                    {/* Read time */}
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs font-medium text-white">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    {/* Date */}
                    <p className="text-xs text-brown-400 font-medium mb-2">
                      {formatDate(blog.date)}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-serif font-bold text-brown-900 mb-3 group-hover:text-teal-700 transition-colors duration-300 leading-snug">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Author + Read More */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-brown-100/60">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brown-500 to-teal-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {blog.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-brown-800 leading-tight">
                            {blog.author.name}
                          </p>
                          <p className="text-[10px] text-gray-400 leading-tight">
                            {blog.author.tagline}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 group-hover:text-teal-600 group-hover:gap-2 transition-all duration-300">
                        Read
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state — shown when there are fewer blogs */}
          {blogs.length < 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex flex-col items-center max-w-md mx-auto p-8 rounded-2xl bg-brown-50/50 border border-brown-100/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brown-100 to-teal-100 flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-brown-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-brown-700 mb-1">
                  More articles coming soon
                </p>
                <p className="text-xs text-gray-400">
                  Our team is preparing more thoughtful insights for you.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Suggest a Topic CTA */}
      <section className="py-16 bg-brown-50/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-sm mb-5">
              Have a topic you would like us to write about? Let us know.
            </p>
            <a
              href="https://wa.me/919824218278?text=Hello%2C%20I%20have%20a%20blog%20topic%20suggestion%20for%20Santvana."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brown-700 to-brown-800 text-white text-sm font-semibold hover:from-brown-800 hover:to-brown-900 transition-all duration-300 hover:shadow-lg hover:shadow-brown-200/50"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.4 0-4.618-.775-6.42-2.088l-.447-.34-2.635.884.884-2.635-.34-.447A9.957 9.957 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Suggest a Topic
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
