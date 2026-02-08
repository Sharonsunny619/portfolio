"use client";

import React, { useState, useRef, useEffect } from "react";
import { serviceData } from "./data";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        expandedIndex !== null &&
        cardRefs.current[expandedIndex] &&
        !cardRefs.current[expandedIndex]?.contains(event.target as Node)
      ) {
        setExpandedIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expandedIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[10%] md:px-[12%] py-10 scroll-mt-20"
    >
      {/* Header Section */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am a frontend developer from Thrissur, Kerala with 2.10+ years of
        experience in creating responsive, high-performance web applications for
        clients across multiple industries.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 min-[930px]:grid-cols-2 gap-9 my-10"
      >
        {serviceData.map(
          ({ icon, title, shortDescription, fullDescription }, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`relative border ${expandedIndex === index ? "min-[1490px]:h-[290px] min-[1260px]:h-[310px] min-[1096px]:h-[340px] min-[930px]:h-[380px] min-[688px]:h-[300px] min-[520px]:h-[330px] min-[430px]:h-[380px] min-[392px]:h-[420px] min-[362px]:h-[460px]  min-[330px]:h-[500px] min-[200px]:h-[530px]" : " " }   border-gray-400 rounded-lg px-5 min-[1260px]:px-8 py-10 overflow-hidden hover:shadow-black dark:hover:shadow-white cursor-pointer hover:bg-[#fcf4ff] dark:hover:bg-pink-950 transition-all duration-500 dark:hover:shadow-[4px_4px_0_#fff] hover:shadow-[4px_4px_0_#000]`}
            >
              
              <div
                className={`${
                  title !== "Web Design" ? "" : "-mt-1 p-2"
                } -mt-2 bg-pink-200 dark:bg-pink-900 w-min rounded-xl`}
              >
                {icon}
              </div>

              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {title}
              </h3>

              {/* Fixed height content area */}
              <div
                className={`relative ${
                  expandedIndex === index ? "min-h-[100px]" : "min-h-[50px]"
                }`}
              >
                <p className="text-sm text-gray-600 leading-5 dark:text-gray-200">
                  {shortDescription}
                </p>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.p
                      key="extra"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                      className="absolute top-0 left-0 w-full text-sm text-gray-600 leading-5 dark:text-gray-200 bg-inherit"
                    >
                      {fullDescription}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Show Read More only when not expanded */}
              {expandedIndex !== index && (
                <button
                  onClick={() => setExpandedIndex(index)}
                  className="flex items-center gap-2 text-sm mt-5 text-black cursor-pointer dark:text-white"
                >
                  Read more
                  <ArrowRight className="h-5 w-5" strokeWidth={1} />
                </button>
              )}
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
}
