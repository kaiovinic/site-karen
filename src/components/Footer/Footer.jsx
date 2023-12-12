// Bootstrap Icons
import { BiLogoTiktok } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

// CSS
import styles from "./Footer.module.css";

// Imagem
import logo from "/Logo_karen03.png";

const Footer = () => {
  return (
    <footer>
      <section
        className={`${styles.paralax01} w-full bg-slate-900 text-black p-4 flex flex-row justify-between overflow-hidden bg-no-repeat
        `}
      >
        <nav>
          <a href="/">
            <img src={logo} alt="logo" className="w-80" />
          </a>
        </nav>

        <nav>
          <p className="text-2xl font-bold mr-10 mb-1">
            Me acompanhe em minhas redes sociais
          </p>
          <ul className="flex gap-x-14 mt-10 text-4xl ml-20">
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
          <div className="flex flex-col mt-10">
            <a
              href="mailto:karen.vanesca@hotmail.com"
              className="text-3xl font-bold mt-10 flex gap-2 hover:text-[#816e26]"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineEmail />
              karen.vanesca@hotmail.com
            </a>
            <a
              href="
              https://api.whatsapp.com/send?phone=5521983932168&text=Oi%20Karen,%20estou%20passando%20por%20um%20grande%20desafio%20profissional%20e%20preciso%20da%20sua%20ajuda!%20"
              target="_blank"
              rel="noreferrer"
              className="text-3xl font-bold mt-10 flex gap-2 hover:text-[#816e26]"
            >
              <FaWhatsapp className="text-green-500" />
              +55 21 9 83932168
            </a>
          </div>
        </nav>
      </section>
      <section>
        <nav className="m-2 font-bold text-center">
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
      </section>
    </footer>
  );
};

export default Footer;
