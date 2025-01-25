import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { AnimatedMenu } from "./AnimatedMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-[#c48864] overflow-hidden text-white pt-2">
      <div className="flex w-full relative px-10 justify-between">
        <AnimatedMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <img src="/fiorilogo.jpg" className="w-[15%]" />
        <button className="bg-white h-auto mt-10 text-[#c48864] py-2 px-4 text-sm rounded-lg self-start">
          Book Appointment
        </button>
      </div>
    </header>
  );
};

export default NavBar;
