import Button02 from "../button/Button02";

const Mentoria01 = () => {
  return (
    <div className="grid m-10">
      {/* <div className="bg-mentoria01 bg-cover bg-no-repeat  w-1/2 rounded shadow-2xl shadow-black"></div> */}
      <div className="text-start  p-10 ">
        <h2 className="text-5xl font-bold text-orange-900  p-10">
          Domine sua carreira
        </h2>
        <p className="text-xl">
          Programa de mentoria para você que busca fortalecer seu foco
          profissional e desenvolver sua carreira.
        </p>
        <p className="text-xl">
          Você não consegue recolocação profissional? Possui dificuldade de
          encontrar caminhos para nova oportunidades no mercado de trabalho?
        </p>
        <p className="text-xl">
          Evolua profissionalmente, tenha satisfação profissional e colha os
          seus melhores resultados.
        </p>
        <p className="text-xl">Chegou a hora de acelerar sua carreira!</p>
        <p className="text-xl">
          Método próprio composto de três pilares Raiz, Consciência e
          Sustentabilidade, para o desenvolvimento da sua carreira profissional.
        </p>
        <p className="text-xl">
          Um programa individual e personalizado para quem busca Dominar a sua
          carreira.
        </p>
        <Button02 />
      </div>
    </div>
  );
};

export default Mentoria01;
