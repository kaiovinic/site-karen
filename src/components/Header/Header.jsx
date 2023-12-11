// Imagem
import logo from "/Logo_karen03.png";

// CSS
import styles from "./Header.module.css";

// Bootstrap Icons
import { BiLogoTiktok } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header
      className={`${styles.paralax01} w-full relative bg-transparent flex flex-row justify-between  px-4 text-white  p-5 overflow-hidden bg-no-repeat
      bg-fixed shadow-xl`}
    >
      <nav>
        <img src={logo} alt="logo" className="w-60" />
      </nav>
      <nav>
        <ul className="flex gap-20 mt-20 text-2xl font-bold ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Mentoria</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex gap-10 mt-20 text-2xl mr-10">
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
      <section className="absolute top-[50%] left-[27%] -translate-x-1/2 -translate-y-1/2 w-1/2">
        <h1 className="text-4xl font-bold wrap ">
          Especialista em Carreira, Consultora com expertise em Desenvolvimento
          Humano.
        </h1>
      </section>
    </header>
  );
};

export default Header;
