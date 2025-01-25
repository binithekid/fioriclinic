"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// const bodyStyle = document.createElement("style");
// bodyStyle.innerHTML = `
//   body.menu-open {
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     position: fixed;
//     width: 100%;
//     height: 100%;
//     min-height: 100vh;
//     min-height: -webkit-fill-available;
//   }
// `;
// document.head.appendChild(bodyStyle);

interface AnimatedMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const menuVariants = {
  hidden: {
    y: "-100%",
    opacity: 0.3,
    transition: {
      duration: 0.8,
      //   ease: [0.76, 0, 0.24, 1],
      ease: "easeInOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export function AnimatedMenu({ isOpen, setIsOpen }: AnimatedMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="relative">
        <Menu className="h-7 w-7 mt-10 cursor-pointer transition-all duration-200 hover:opacity-60" />
        <span className="sr-only">Open menu</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-[#c48864] backdrop-blur-sm"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: 0,
              padding: 0,
              minHeight: "100vh",
              //   minHeight: "-webkit-fill-available",
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className="absolute top-[3.22rem] left-10 text-white z-50"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-7 w-7 cursor-pointer transition-all duration-200 hover:opacity-60" />
                <span className="sr-only">Close menu</span>
              </div>

              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <ul className="space-y-8 ml-10">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      variants={itemVariants}
                      className="overflow-hidden"
                    >
                      <Link
                        href={item.href}
                        className="text-4xl md:text-6xl font-serif text-white hover:text-stone-200 transition-colors block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
