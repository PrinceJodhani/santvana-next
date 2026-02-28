// app/blogs/[slug]/BlogDetail.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ContentBlock({ block, index }) {
  const delay = 0.05 * index;

  if (block.type === "paragraph") {
    return (
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay }}
        className="text-gray-700 text-base md:text-lg leading-[1.9] mb-6"
      >
        {block.text}
      </motion.p>
    );
  }

  if (block.type === "subheading") {
    return (
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay }}
        className="text-xl md:text-2xl font-serif font-bold text-brown-800 mt-10 mb-4"
      >
        {block.text}
      </motion.h2>
    );
  }

  if (block.type === "highlight") {
    return (
      <motion.blockquote
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay }}
        className="relative my-8 pl-6 md:pl-8 py-5 pr-6 bg-gradient-to-r from-brown-50 via-white to-teal-50/40 border-l-4 border-gradient rounded-r-xl"
        style={{
          borderImage: "linear-gradient(to bottom, #7c5a46, #0d9488) 1",
        }}
      >
        <svg
          className="absolute top-3 right-4 w-8 h-8 text-brown-200/60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
        <p className="text-brown-700 text-base md:text-lg font-medium italic leading-relaxed relative z-10">
          {block.text}
        </p>
      </motion.blockquote>
    );
  }

  if (block.type === "callout") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay }}
        className="my-10 p-6 md:p-8 bg-gradient-to-br from-brown-700 via-brown-800 to-teal-800 rounded-2xl text-center shadow-lg shadow-brown-200/30"
      >
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-teal-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-white text-lg md:text-xl font-serif font-semibold leading-relaxed">
          &ldquo;{block.text}&rdquo;
        </p>
      </motion.div>
    );
  }

  return null;
}

export default function BlogDetail({ blog }) {
  return (
    <>
      {/* Hero / Header */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[65vh]">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brown-900 via-brown-900/60 to-brown-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/30 to-teal-900/20" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 md:pb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category + Read time */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold text-white border border-white/10">
                  {blog.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-white/70">
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

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
                {blog.title}
              </h1>

              {/* Date */}
              <p className="text-sm text-white/50">{formatDate(blog.date)}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="relative bg-white">
        {/* Decorative top fade */}
        <div className="absolute -top-1 left-0 right-0 h-8 bg-gradient-to-b from-brown-900/5 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mb-10 pb-8 border-b border-brown-100"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brown-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md shadow-brown-200/40">
              {blog.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-brown-800">
                {blog.author.name}
              </p>
              <p className="text-xs text-gray-500">{blog.author.tagline}</p>
              <p className="text-[11px] text-gray-400">{blog.author.role}</p>
            </div>
            {blog.author.linkedin && (
              <a
                href={blog.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${blog.author.name} on LinkedIn`}
                className="flex-shrink-0 w-9 h-9 rounded-full bg-brown-50 hover:bg-brown-100 flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 text-brown-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </motion.div>

          {/* Blog Content */}
          <article className="prose-custom">
            {blog.content.map((block, i) => (
              <ContentBlock key={i} block={block} index={i} />
            ))}
          </article>

          {/* Author Sign-off */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 pt-8 border-t border-brown-100"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-brown-50 to-teal-50/40 border border-brown-100/50">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brown-500 to-teal-600 flex items-center justify-center text-white text-lg font-bold flex-shrink-0 shadow-md">
                {blog.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-brown-800 mb-0.5">
                  Written by {blog.author.name}
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  {blog.author.tagline} &middot; {blog.author.role}
                </p>
                {blog.author.linkedin && (
                  <a
                    href={blog.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-600 transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Back to Blogs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-10 text-center"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brown-200 text-brown-700 text-sm font-semibold hover:bg-brown-50 hover:border-brown-300 transition-all duration-300"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Blogs
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
