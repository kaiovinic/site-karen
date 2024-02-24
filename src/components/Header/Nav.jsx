// Bootstrap Icons
import { BiLogoTiktok } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

import { twMerge } from "tailwind-merge";

import { Link } from "react-scroll";

const Nav = ({ className }) => {
  return (
    <div className="flex w-full justify-around">
      <nav className="flex">
        <ul
          className={twMerge(
            "lg:flex gap-14 mt-20 text-3xl font-bold max-xl:gap-8 ",
            className
          )}
        >
          <li>
            <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-[#a09369]"
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
              className="hover:text-[#a09369]"
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
              className="hover:text-[#a09369]"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="flex">
        <ul
          className={twMerge(
            "lg:flex gap-10 mt-20 text-3xl mr-10 max-xl:gap-6 ",
            className
          )}
        >
          <li>
            <a
              href="https://www.tiktok.com/@karenvanesca"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#a09369]"
            >
              <BiLogoTiktok />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/karenvanesca/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#a09369]"
            >
              <GrInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/karenvanesca/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#a09369]"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Kvanesca"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#a09369]"
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
