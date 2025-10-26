import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import ProfileImage from "./images/WhatsApp Image 2025-09-06 at 12.38.55.jpeg";
import { motion } from "motion/react";

export default function Profile() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto  flex flex-col items-center justify-center gap-4">
      <div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={ProfileImage}
            alt="profile image"
            className="rounded-full  w-32  h-32 flex justify-center mx-auto mb-3"
          />
        </motion.div>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        >
          Hi! I'm Sharon Sunny 👋🏻
        </motion.h3>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo mb-4"
        >
          frontend web developer based in Kerala.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto   text-[14px] tracking-widest"
        >
          I’m a frontend developer from Thrissur, Kerala, with 2.7+ years of
          experience at companies including Gewan Infotech (Infopark) and
          Telematum Healthcare (Kochi).
        </motion.p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 group py-3 border rounded-full border-white  bg-black  dark:bg-white dark:text-black  text-white flex items-center gap-2"
        >
          contact me{" "}
          <ArrowUpRight
            className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            strokeWidth={1.4}
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/SharonSunnyResume.pdf"
          download
          className="group relative inline-block w-[180px] h-[56px] cursor-pointer rounded-full border border-gray-500  overflow-hidden transition-all duration-500 ease-in z-[1]"
        >
          <span className="absolute top-0 left-[-10px] h-full w-0 skew-x-[15deg] bg-[#000] dark:bg-white transition-all duration-500 ease-in-out group-hover:w-[58%] z-[-1]"></span>

          <span className="absolute top-0 right-[-10px] h-full w-0 skew-x-[15deg] bg-[#fcf4ff] dark:bg-pink-950 transition-all duration-500 ease-in-out group-hover:w-[58%] z-[-1]"></span>

          <span className="relative rounded-full mt-[10px] flex items-center justify-center gap-2 z-[2] text-[#000] dark:text-white text-[16px] transition-all duration-300 ease-in group-hover:text-[#e0aaff] dark:group-hover:text-[#e0aaff]">
            my resume <Download className="h-5 w-5" strokeWidth={1.4} />
          </span>
        </motion.a>
      </div>
    </div>
  );
}
