import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav";

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className="text-black lg:hidden flex items-start"
        onClick={toggleNav}
      >
        {isOpen ? (
          <span className="text-4xl  font-semibold mr-2 mt-1 ">x</span>
        ) : (
          <GiHamburgerMenu className="text-3xl mr-2 mt-1 " />
        )}
      </button>
      {isOpen && <Nav className="flex flex-col items-center" />}{" "}
    </>
  );
};

export default NavButton;
