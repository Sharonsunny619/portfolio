import React from "react";
import { workData } from "./data";
import Send from "./icons/send";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
 import Image from "next/image";

export default function Work() {
  const [openModal, setOpenModal] = React.useState(false);
  const [currentProjectImages, setCurrentProjectImages] = React.useState<
    string[]
  >([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleCardClick = (images: any[]) => {
    setCurrentProjectImages(images.map((img) => img?.src || img));
    setCurrentIndex(0);
    setOpenModal(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentProjectImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + currentProjectImages.length) % currentProjectImages.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full  px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-7"
      >
        {workData.map((project, index) => {
          const bgUrl = Array.isArray(project.bgImage)
            ? project.bgImage[0]?.src
            : project.bgImage ?? "";

          return (
            <motion.div
              viewport={{ once: true }}
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              onClick={() => handleCardClick(project.bgImage)}
              className="aspect-square  bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url("${bgUrl}")` }}
            >
              <div className="bg-white w-10/12  rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-[6px] px-3 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="text-black font-semibold">{project.title}</h2>
                  <p className="text-[13px] text-gray-700 -mt-2">{project.description}</p>
                </div>

                <div className="borrder rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Send />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {openModal && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]">
    
    {/* Close Button */}
    <button
      onClick={() => setOpenModal(false)}
      className="absolute top-5 right-5 text-white text-3xl"
    >
      ✕
    </button>

    {/* Image */}
    <div className="relative w-[80vw] h-[80vh]">
      {currentProjectImages.map((src, index) => {
        const isCurrent = currentIndex === index;
        const isNext = (currentIndex + 1) % currentProjectImages.length === index;
        const isPrev = (currentIndex - 1 + currentProjectImages.length) % currentProjectImages.length === index;

        // Render current, next, and previous images for smoother navigation
        if (!isCurrent && !isNext && !isPrev) return null;

        return (
          <Image
            key={index}
            src={src}
            alt="project"
            fill
            className={`object-contain transition-opacity duration-300 ${isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            priority
          />
        );
      })}

      {/* Prev */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 z-40 -translate-y-1/2 hover:bg-pink-200 bg-pink-50 cursor-pointer text-black text-5xl p-2 rounded-full"
      >
        <ChevronLeft/>
      </button>

      {/* Next */}
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 z-40 -translate-y-1/2 hover:bg-pink-200 bg-pink-50 cursor-pointer text-black text-5xl p-2 rounded-full"
      >
        <ChevronRight/>
      </button>
    </div>
  </div>
)}



      {/* <motion.button
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        type="button"
        className="group w-max flex items-center justify-center gap-2 text-black dark:text-white border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-pink-50 dark:hover:bg-pink-950  duration-500 cursor-pointer"
      >
        Show more
        <MoveRight
          strokeWidth={1.5}
          className="transform-all duration-500 group-hover:translate-x-1"
        />
      </motion.button> */}
    </motion.div>
  );
}
