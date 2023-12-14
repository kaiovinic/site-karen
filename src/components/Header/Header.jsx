// Imagem
import logo from "/public/logo_principal/logo06.png";

// CSS
import styles from "./Header.module.css";

// Bootstrap Icons
import { BiLogoTiktok } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

// Link
import { Link } from "react-scroll";
import Button02 from "../button/Button02";

const Header = () => {
  return (
    <header
      className={`${styles.paralax01} min-w-full relative bg-transparent flex flex-row justify-between p-2 text-[#816e26] overflow-hidden bg-no-repeat
      bg-fixed shadow-xl `}
      id="inicio"
    >
      <nav>
        <img src={logo} alt="logo" className="w-60" />
      </nav>
      <nav>
        <ul className="flex gap-20 mt-20 text-3xl font-bold ">
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
              activeClass="active"
              to="mentoria "
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Mentoria
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
        <ul className="flex gap-10 mt-20 text-3xl mr-10">
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
      <section className="absolute top-[60%] left-[23%] -translate-x-1/2 -translate-y-1/2 w-[40%] text-center">
        <h1 className="text-4xl font-bold wrap text-[#816e26]">
          Consultoria, palestras e treinamentos sobre carreira.
        </h1>
        <p className="text-lg mt-5 text-white ">
          &#34;Imagine um futuro onde você é o proficional que todos desejam ter
          em sua equipe&#34;.
        </p>
        <Button02 />
      </section>
    </header>
  );
};

export default Header;
