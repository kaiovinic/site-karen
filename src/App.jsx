import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <>
      <a
        href="
        https://api.whatsapp.com/send?phone=5521983932168&text=Oi%20Karen,%20estou%20passando%20por%20um%20grande%20desafio%20profissional%20e%20preciso%20da%20sua%20ajuda!%20"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed w-20 h-20 bottom-10 right-10 bg-green-500  rounded-full flex items-center justify-center animate-bounce z-50"
      >
        <FaWhatsapp className="text-3xl text-white hover:text-black" />
      </a>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
