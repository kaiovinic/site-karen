import Carrossel from "../Carrossel/index";
import Mentoria01 from "../Mentorias/Mentoria01";
import Mentoria02 from "../Mentorias/Mentoria02";
import Mentoria03 from "../Mentorias/Mentoria03";
import Mentoria04 from "../Mentorias/Mentoria04";
import VideoPlayer from "../VideoPlayer";
import Button01 from "../button/Button01";
import Button02 from "../button/Button02";
import karen from "/public/karen01.png";

const Main = () => {
  const images = [
    "/public/carrossel/carrossel01.jpeg",
    "/public/carrossel/carrossel02.jpeg",
    "/public/carrossel/carrossel03.jpeg",
    "/public/carrossel/carrossel04.jpeg",
    "/public/carrossel/carrossel05.jpeg",
    "/public/carrossel/carrossel06.jpeg",
    "/public/carrossel/carrossel07.jpeg",
    "/public/carrossel/carrossel08.jpeg",
  ];

  return (
    <main>
      <section
        id="sobre"
        className="bg-white w-full  p-10 grid grid-cols-2  justify-items-center  "
      >
        <h2 className="text-6xl font-bold text-[#816e26] text-center col-span-2 mb-10 ">
          A Karen
        </h2>
        <div>
          <img
            src={karen}
            alt="foto Karen"
            className="max-w-[530px] shadow-2xl shadow-black"
          />
        </div>
        <div className="max-w-[500px] shadow-2xl shadow-black">
          <Carrossel images={images} />
        </div>

        <Button01 />
      </section>

      <section className="bg-white p-10 ">
        <h2
          className="text-6xl font-bold text-black text-center m-10 mb-14
        text-shadow"
        >
          Eu posso te ajudar com...
        </h2>
        <section className="flex m-10">
          <article className="w-[20%] mr-10 text-center ">
            <h3 className="text-[#816e26] mb-14 text-3xl">
              Carreira profissional
            </h3>
            <p className="text-lg">
              Saiba o momento certo para decidir o seu futuro.
            </p>
          </article>
          <article className="w-[300px] mr-10 text-center">
            <h3 className="text-[#816e26] mb-24 text-3xl">Foco Profissional</h3>
            <p className="text-lg">
              Tenha uma base assertiva para o seu plano de ação.
            </p>
          </article>
          <article className="w-[300px] mr-10 text-center">
            <h3 className="text-[#816e26] mb-14 text-3xl">
              Conquistar o Emprego dos Sonhos
            </h3>
            <p className="text-lg">Destaque-se da maioria dos candidatos.</p>
          </article>
          <article className="w-[300px] text-center">
            <h3 className="text-[#816e26] mb-24 text-3xl">Autoconhecimento</h3>
            <p className="text-lg">
              Observe a si mesmo nas várias dimensões da vida. Reconheça suas
              limitações e fortaleça seu potencial.
            </p>
          </article>
        </section>

        <section className="flex m-10 p-20">
          <section className="w-[70%] mr-10 text-center">
            <h2 className="text-6xl font-bold text-black mb-10 text-shadow">
              Alcance seu potencial máximo:
            </h2>
            <h3 className="text-3xl font-bold text-[#816e26] mb-10 ">
              Descubra o caminho para o sucesso!
            </h3>
            <p className="text-lg text-start">
              Prepare-se para uma jornada de autodescoberta e sucesso
              profissional! Supere as barreiras que estão bloqueando seu caminho
              e alcance seus objetivos. Visualize-se desenvolvendo novas
              habilidades, enfrentando desafios e agarrando as melhores
              oportunidades que a vida oferece. A realização profissional não é
              apenas sobre o trabalho, é sobre viver uma vida plena. Ao
              encontrar satisfação em sua carreira, você abre as portas para o
              crescimento pessoal, bem-estar e autoconfiança.
            </p>

            <Button02 />
          </section>
          <VideoPlayer />
        </section>
      </section>

      <section id="mentorias" className="bg-white p-10 text-center">
        <h2 className="text-6xl font-bold text-[#816e26] ">Mentorias</h2>
        <div className="grid grid-cols-2 justify-items-center">
          <Mentoria01 />
          <Mentoria03 />
          <Mentoria02 />
          <Mentoria04 />
        </div>
      </section>
    </main>
  );
};

export default Main;
