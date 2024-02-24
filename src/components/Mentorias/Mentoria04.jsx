import Button02 from "../button/Button02";

const Mentoria04 = () => {
  return (
    <div className="grid m-10  font-medium">
      {/* <div className="bg-mentoria04 bg-cover bg-no-repeat  w-1/2 rounded shadow-2xl shadow-black"></div> */}
      <div className="text-start text-xl text-white  p-10 max-sm:text-sm ">
        <h2 className="text-5xl font-bold text-orange-900 p-10 max-sm:text-3xl">
          Orientação Vocacional
        </h2>
        <p>
          Programa de mentoria para você que busca definir qual profissão quer
          para o seu futuro.
        </p>
        <p>
          Escolher uma profissão antes de terminar o último ano do colegial, não
          é uma tarefa fácil.
        </p>
        <p>
          Você também anda fazendo esses questionamentos? Se a resposta for
          positiva, não espere para última hora para decidir seu futuro.
        </p>
        <p>Chegou a hora de definir sua carreira!</p>
        <p className="mb-[60px]">Identifique a profissão ideal para você</p>
        <Button02 />
      </div>
    </div>
  );
};

export default Mentoria04;
