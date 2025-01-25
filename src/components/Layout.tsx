// components/Layout.js
import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Layout({ children }: LayoutProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="min-h-screen w-full flex flex-col"
    >
      <NavBar />
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} My Website
      </footer>
    </motion.div>
  );
}
