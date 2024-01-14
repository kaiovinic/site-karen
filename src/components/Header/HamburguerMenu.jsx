/* eslint-disable react/prop-types */
import { FaBars, FaTimes } from "react-icons/fa";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="lg:hidden text-white focus:outline-none"
      onClick={toggleMenu}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  );
};

export default HamburgerMenu;
