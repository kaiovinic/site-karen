import Carrossel from "../Carrossel/index";
import karen from "/public/karen01.png";

const Main = () => {
  const images = [
    "/public/imagens/carrossel02.png",
    "/public/imagens/carrossel03.png",
  ];

  return (
    <main>
      <section
        id="sobre"
        className="bg-slate-900 w-full  p-10 grid grid-cols-2 justify-items-center "
      >
        <div>
          <img src={karen} alt="foto Karen" className="max-w-[515px]" />
        </div>
        <div className="max-w-[650px] ">
          <Carrossel images={images} />
        </div>
      </section>
    </main>
  );
};

export default Main;
