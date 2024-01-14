// Bootstrap Icons
import { BiLogoTiktok } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

import { Link } from "react-scroll";
import { useState } from "react";
import HamburgerMenu from "./HamburguerMenu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between">
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <nav>
        <ul className="lg:flex gap-14 mt-20 text-3xl font-bold  hidden  ">
          <li>
            <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              A Karen
            </Link>
          </li>
          <li>
            <Link
              to="mentorias"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Mentorias
            </Link>
          </li>
          <li>
            <Link
              to="Para empresas"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Para empresas
            </Link>
          </li>
          <li>
            <Link
              to="contato"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="lg:flex gap-10 mt-20 text-3xl mr-10  hidden space-x-4">
          <li>
            <a
              href="https://www.tiktok.com/@karenvanesca"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoTiktok />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/karenvanesca/"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/karenvanesca/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Kvanesca"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareXTwitter />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
