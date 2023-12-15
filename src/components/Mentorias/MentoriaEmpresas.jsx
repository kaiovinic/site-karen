import Button02 from "../button/Button02";
import person01 from "/public/mentorias/person01.jpg";
import person02 from "/public/mentorias/person02.jpg";
import person03 from "/public/mentorias/person03.jpg";

const MentoriaEmpresas = () => {
  return (
    <div className="text-center p-10 ">
      <h3 className="text-5xl font-bold text-orange-900  p-10 ">
        Atração e Seleção
      </h3>
      <p className="text-2xl  w-1/2 m-auto">
        Seleção de profissionais alinhados com os requisitos, competências e
        habilidades necessárias para o sucesso do seu negócio.
      </p>
      <div className="flex justify-center ">
        <div className="w-[400px]">
          <img
            src={person01}
            alt="Pessoa"
            className="rounded-full shadow-2xl m-20 shadow-black w-64 h-64  "
          />
          <h3 className="text-3xl font-bold text-black mb-10">
            Contrate Profissionais Eficientes
          </h3>
          <p className="text-xl w-[90%] text-start">
            Habilidades compatíveis com as necessidades do seu negócio.
          </p>
        </div>
        <div className="w-[400px]">
          <img
            src={person02}
            alt="Pessoa"
            className="rounded-full shadow-2xl m-20 shadow-black w-64 h-64"
          />
          <h3 className="text-3xl font-bold text-black mb-20">
            Otimize suas Contratações
          </h3>
          <p className="text-xl w-[90%] text-start">
            Encontre candidatos certos para as posições estratégicas de sua
            empresa.
          </p>
        </div>
        <div className="w-[400px]">
          <img
            src={person03}
            alt="Pessoa"
            className="rounded-full shadow-2xl m-20 shadow-black w-64 h-64 "
          />
          <h3 className="text-3xl font-bold text-black mb-10">
            Redução de tempo na sua contratação
          </h3>
          <p className="text-xl w-[90%] tetx-start">
            Recrutamento e Seleção com qualidade e na velocidade que o seu
            negócio precisa.
          </p>
        </div>
      </div>
      <div>
        <h3 className="mt-10">Não perca tempo!</h3>
        <h3 className="mb-10">
          Contrate agora um Recrutamento & Seleção alinhado aos valores da sua
          empresa.
        </h3>
        <p className="text-xl ">
          Otimize suas contratações com qualidade na Atração, Recrutamento e
          Seleção.
        </p>
        <h2>Acelere a contratação </h2>
        <Button02 />
      </div>
    </div>
  );
};

export default MentoriaEmpresas;
