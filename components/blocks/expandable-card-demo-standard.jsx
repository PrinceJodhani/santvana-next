// app/components/ExpandableCardDemo.jsx
"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import AppointmentForm from "../../app/components/AppointmentForm"; // Adjust the import path as necessary

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        if (showAppointmentForm) {
          setShowAppointmentForm(false);
        } else {
          setActive(null);
        }
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, showAppointmentForm]);

  useOutsideClick(ref, () => {
    if (showAppointmentForm) {
      setShowAppointmentForm(false);
    } else {
      setActive(null);
    }
  });

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white dark:bg-neutral-900 rounded-full h-8 w-8 shadow-md"
              onClick={() => {
                if (showAppointmentForm) {
                  setShowAppointmentForm(false);
                } else {
                  setActive(null);
                }
              }}
              aria-label="Close"
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-4xl h-full md:h-auto flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl shadow-lg overflow-hidden"
            >
              {!showAppointmentForm ? (
                <>
                  {/* Header */}
                  <div className="flex justify-between items-start p-6 border-b border-neutral-200 dark:border-neutral-700">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="mt-2 text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.button
                      layoutId={`button-${active.title}-${id}`}
                      onClick={() => setShowAppointmentForm(true)}
                      className="ml-4 px-5 py-2 text-sm rounded-full font-bold bg-green-600 text-white hover:bg-green-700 transition-colors"
                      aria-label="Book Now"
                    >
                      Book Now
                    </motion.button>
                  </div>

                  {/* Content */}
                  <div className="p-6 overflow-y-auto flex-1">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-700 dark:text-neutral-300 space-y-4"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </>
              ) : (
                <div className="p-6">
                  <AppointmentForm
                    member={active}
                    onClose={() => setShowAppointmentForm(false)}
                  />
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card List */}
      <div className="max-w-7xl mx-auto w-full p-6">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col justify-between h-full"
            >
              {/* Header */}
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>

              {/* CTA Button */}
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card's onClick
                  setActive(card);
                }}
                className="mt-4 px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors self-start"
                aria-label="Read More"
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-neutral-800 dark:text-neutral-100"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "On the outside, you seem to have it all together, but it is a different story on the inside.",
    title:
      "You are trying to figure out this thing called life, but something isn't working.",
    ctaText: "Read More",
    ctaLink: "", // Removed the external link
    content: () => (
      <div>
        <h1 className="text-2xl font-semibold">
          You want to feel confident and secure as you navigate life but instead:
        </h1>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>You feel sad, lonely and neglected.</li>
          <li>You feel restless and anxious.</li>
          <li>You feel unseen, misunderstood, unworthy, and/or unwanted.</li>
          <li>
            You feel like you're living in a fog, disconnected from the world and struggling to see a way out.
          </li>
          <li>You feel trapped in your own mind, battling intrusive thoughts and strong urges.</li>
          <li>You feel afraid of being judged by others, always worrying about what they might think.</li>
          <li>
            You feel a strong desire to be accepted and validated, sometimes sacrificing your true self.
          </li>
          <li>
            You feel the pain of a recent breakup or heartbreak, struggling to heal and move forward.
          </li>
          <li>
            You feel a strong fear of being abandoned, which can lead to unstable relationships.
          </li>
          <li>
            You feel overwhelmed by conflicts and miscommunication in your relationships.
          </li>
          <li>
            You feel trapped in a toxic or abusive relationship, desperately seeking a way to break free and regain your sense of self.
          </li>
          <li>You crave to find your true self and live authentically.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6">
          These issues probably show up in all areas of your life like in relationships, at work, and with yourself.
        </h2>
        <h2 className="text-xl font-semibold mt-4">
          If this sounds like you, you deserve to have support from a psychologist.
        </h2>
      </div>
    ),
  },
  // Add more card objects as needed
];
