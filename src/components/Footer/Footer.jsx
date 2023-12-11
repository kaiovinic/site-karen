// Bootstrap Icons
import { BiLogoTiktok } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

// Imagem
import logo from "/Logo_karen03.png";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white p-4 flex flex-row justify-between">
      <nav>
        <a href="/">
          <img src={logo} alt="logo" className="w-60" />
        </a>
      </nav>
      <nav className="mt-20">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/kaioviniciussilva/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-[#816e26]"
          >
            <span>KAIO VINICIUS </span>
          </a>
          - TODOS OS DIREITOS RESERVADOS.
        </p>
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
    </footer>
  );
};

export default Footer;
