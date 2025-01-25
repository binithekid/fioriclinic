// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want to use
});

// Define the container and child animations
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay between lines
    },
  },
};

const child = {
  hidden: { opacity: 0, x: 0, y: 20, filter: "blur(20px)" }, // Start off-screen, blurry, and invisible
  visible: {
    opacity: 1,
    x: 0,
    y: 0, // Slide into position
    filter: "blur(0px)", // Remove blur
    transition: {
      duration: 0.8, // Smooth fade, blur removal, and slide
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="w-full flex flex-row HeroHeight overflow-hidden pt-10 pb-40 items-center bg-gradient-to-b from-[#c48864] via-[#e6a279] to-white px-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex w-1/2 mt-14 flex-col gap-3"
      >
        <motion.h1
          className={`text-5xl leading-[3.3rem] text-white ${bitter.className}`}
          variants={child} // Apply the child animation
        >
          Enhancing a better version of you
        </motion.h1>
        <motion.p
          className="text-white w-2/3"
          variants={child} // Apply the child animation
        >
          Welcome to Dr Senna Clinic, a luxury aesthetic clinic in the heart of
          Barnes. We are focused on taking a holistic approach to aesthetics,
          seamlessly blending medical excellence with wellness.{" "}
        </motion.p>
        <motion.div
          className="inline-flex gap-2"
          variants={child} // Apply the child animation
        >
          <button className="bg-white shadow text-[#c48864] py-2 px-6 mt-3 text-sm rounded">
            Book Appointment
          </button>
          <button className="bg-transparent border border-white text-white shadow py-2 px-6 mt-3 text-sm rounded">
            About Us
          </button>
        </motion.div>
      </motion.div>
      <div className="w-1/2 relative">
        <img
          className="rounded-lg shadow-2xl relative top-[2rem]"
          src="\heroImg.jpeg"
          //   variants={child} // Apply the child animation
        />
      </div>
    </div>
  );
};

export default Hero;
