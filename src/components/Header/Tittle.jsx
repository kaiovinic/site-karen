// Imagem
import logo from "/public/logo_principal/logo06.png";

const Tittle = () => {
  return (
    <>
      <nav className="p-6">
        <img src={logo} alt="logo" className="w-60 max-lg:w-36" />
      </nav>
    </>
  );
};

export default Tittle;
