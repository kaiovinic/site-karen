import Button02 from "../button/Button02";

const Mentoria02 = () => {
  return (
    <div className="grid  m-10">
      {/* <div className="bg-mentoria02 bg-cover bg-no-repeat  w-1/2 rounded shadow-2xl shadow-black"></div> */}
      <div className="text-start  p-10 ">
        <h2 className="text-5xl font-bold text-orange-900 p-10">
          Programa Marca pessoal e uso do LinkedIn
        </h2>
        <p className="text-xl">
          O Linkedin é a ferramenta mais benéfica para profissionais. Além de
          dar oportunidade de se conectar com recrutadores e empresas, você vai
          obter conhecimentos sobre a ferramenta.{" "}
        </p>
        <p className="text-xl">
          Melhore seu engajamento, sua visibilidade e aumente suas chances para
          encontrar as melhores oportunidades no mercado.
        </p>
        <p className="text-xl ">
          Estruture seu LinkedIn, estabeleça sua marca pessoal no mercado e
          obtenha sucesso profissional.
        </p>
        <Button02 />
      </div>
    </div>
  );
};

export default Mentoria02;
