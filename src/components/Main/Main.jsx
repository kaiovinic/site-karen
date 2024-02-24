import Carrossel from "../Carrossel/index";
import Mentoria01 from "../Mentorias/Mentoria01";
import Mentoria02 from "../Mentorias/Mentoria02";
import Mentoria03 from "../Mentorias/Mentoria03";
import Mentoria04 from "../Mentorias/Mentoria04";
import VideoPlayer from "../VideoPlayer";
import Button01 from "../button/Button01";
import Button02 from "../button/Button02";
import styles from "./Main.module.css";
const Main = () => {
  const images = [
    "/carrossel/carrossel09.png",
    "/carrossel/carrossel01.jpeg",
    "/carrossel/carrossel02.jpeg",
    "/carrossel/carrossel03.jpeg",
    "/carrossel/carrossel04.jpeg",
    "/carrossel/carrossel05.jpeg",
    "/carrossel/carrossel06.jpeg",
    "/carrossel/carrossel07.jpeg",
    "/carrossel/carrossel08.jpeg",
  ];

  return (
    <main>
      <section
        id="sobre"
        className={`${styles.paralax01} bg-black w-full  p-10 grid grid-cols-2  justify-items-center bg-fixed`}
      >
        <div className="max-w-[530px] shadow-2xl shadow-black">
          <Carrossel images={images} />
        </div>

        <Button01 />
      </section>

      <section className={`${styles.paralax02}  bg-black  bg-fixed`}>
        <section className="p-10">
          <h2
            className="text-6xl font-bold text-white text-center m-10 mb-14
          text-shadow"
          >
            Eu posso te ajudar com...
          </h2>
          <section className="flex m-10">
            <article className="w-[20%] mr-10 text-center ">
              <h3 className="text-[#816e26] mb-6 text-3xl">
                Carreira profissional
              </h3>
              <p className="text-lg text-white">
                Saiba o momento certo para decidir o seu futuro.
              </p>
            </article>
            <article className="w-[300px] mr-10 text-center">
              <h3 className="text-[#816e26] mb-6 text-3xl">
                Foco Profissional
              </h3>
              <p className="text-lg text-white">
                Tenha uma base assertiva para o seu plano de ação.
              </p>
            </article>
            <article className="w-[300px] mr-10 text-center">
              <h3 className="text-[#816e26] mb-6 text-3xl">
                Conquistar o Emprego dos Sonhos
              </h3>
              <p className="text-lg text-white">
                Destaque-se da maioria dos candidatos.
              </p>
            </article>
            <article className="w-[300px] text-center">
              <h3 className="text-[#816e26] mb-6 text-3xl">Autoconhecimento</h3>
              <p className="text-lg text-white">
                Observe a si mesmo nas várias dimensões da vida. Reconheça suas
                limitações e fortaleça seu potencial.
              </p>
            </article>
          </section>
          <section className="flex m-10 p-20">
            <section className="w-[70%] mr-10 text-center">
              <h2 className="text-6xl font-bold text-white mb-10 text-shadow">
                Alcance seu potencial máximo:
              </h2>
              <h3 className="text-3xl font-bold text-[#816e26] mb-10 ">
                Descubra o caminho para o sucesso!
              </h3>
              <p className="text-lg text-start text-white">
                Prepare-se para uma jornada de autodescoberta e sucesso
                profissional! Supere as barreiras que estão bloqueando seu
                caminho e alcance seus objetivos. Visualize-se desenvolvendo
                novas habilidades, enfrentando desafios e agarrando as melhores
                oportunidades que a vida oferece. A realização profissional não
                é apenas sobre o trabalho, é sobre viver uma vida plena. Ao
                encontrar satisfação em sua carreira, você abre as portas para o
                crescimento pessoal, bem-estar e autoconfiança.
              </p>
              <Button02 />
            </section>
            <VideoPlayer />
          </section>
        </section>
      </section>

      <section
        id="mentorias"
        className={`${styles.paralax03} bg-black p-10 text-center bg-fixed`}
      >
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
