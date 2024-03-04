// Bootstrap Icons
import { BiLogoTiktok } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

import { twMerge } from "tailwind-merge";

import { Link } from "react-scroll";

const Nav = ({ className }) => {
  return (
    <div className="flex w-full justify-around max-lg:flex-col max-lg:justify-start max-lg:w-44  ">
      <nav className="flex ">
        <ul
          className={twMerge(
            "lg:flex gap-14 mt-10 text-3xl font-bold max-xl:gap-8 max-lg:mt-2",
            className
          )}
        >
          <li className="max-lg:mb-2">
            <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[#a09369]  max-sm:text-2xl "
            >
              A Karen
            </Link>
          </li>
          <li className="max-lg:mb-2">
            <Link
              to="mentorias"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[#a09369] max-sm:text-2xl"
            >
              Mentorias
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
              className="hover:text-[#a09369] max-sm:text-2xl"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="flex ">
        <ul
          className={twMerge(
            "lg:flex gap-10 mt-20 text-3xl m-10 max-lg:mt-2",
            className
          )}
        >
          <li className="max-lg:mb-4">
            <a
              href="https://www.tiktok.com/@karenvanesca"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#a09369] max-sm:text-2xl"
            >
              <BiLogoTiktok />
            </a>
          </li>
          <li className="max-lg:mb-4">
            <a
              href="https://www.instagram.com/karenvanesca/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#a09369] max-sm:text-2xl"
            >
              <GrInstagram />
            </a>
          </li>
          <li className="max-lg:mb-4">
            <a
              href="https://www.linkedin.com/in/karenvanesca/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#a09369] max-sm:text-2xl"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Kvanesca"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#a09369] max-sm:text-2xl "
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
