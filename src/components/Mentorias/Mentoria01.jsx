import Button02 from "../button/Button02";

const Mentoria01 = () => {
  return (
    <div className="grid m-10">
      {/* <div className="bg-mentoria01 bg-cover bg-no-repeat  w-1/2 rounded shadow-2xl shadow-black"></div> */}
      <div className="text-start text-white p-10  text-xl font-medium  max-sm:text-sm">
        <h2 className="text-5xl font-bold text-orange-900  p-10  max-sm:text-3xl">
          Domine sua carreira
        </h2>
        <p>
          Programa de mentoria para você que busca fortalecer seu foco
          profissional e desenvolver sua carreira.
        </p>
        <p>
          Você não consegue recolocação profissional? Possui dificuldade de
          encontrar caminhos para nova oportunidades no mercado de trabalho?
        </p>
        <p>
          Evolua profissionalmente, tenha satisfação profissional e colha os
          seus melhores resultados.
        </p>
        <p>Chegou a hora de acelerar sua carreira!</p>
        <p>
          Método próprio composto de três pilares Raiz, Consciência e
          Sustentabilidade, para o desenvolvimento da sua carreira profissional.
        </p>
        <p>
          Um programa individual e personalizado para quem busca Dominar a sua
          carreira.
        </p>
        <Button02 />
      </div>
    </div>
  );
};

export default Mentoria01;
