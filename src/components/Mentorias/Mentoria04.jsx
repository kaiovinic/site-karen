import Button02 from "../button/Button02";

const Mentoria04 = () => {
  return (
    <div className="grid m-10">
      {/* <div className="bg-mentoria04 bg-cover bg-no-repeat  w-1/2 rounded shadow-2xl shadow-black"></div> */}
      <div className="text-start  p-10 ">
        <h2 className="text-5xl font-bold text-orange-900 p-10">
          Orientação Vocacional
        </h2>
        <p className="text-xl">
          Programa de mentoria para você que busca definir qual profissão quer
          para o seu futuro.
        </p>
        <p className="text-xl">
          Escolher uma profissão antes de terminar o último ano do colegial, não
          é uma tarefa fácil.
        </p>
        <p className="text-xl">
          Você também anda fazendo esses questionamentos? Se a resposta for
          positiva, não espere para última hora para decidir seu futuro.
        </p>
        <p className="text-xl">Chegou a hora de definir sua carreira!</p>
        <p className="text-xl mb-[60px]">
          Identifique a profissão ideal para você
        </p>
        <Button02 />
      </div>
    </div>
  );
};

export default Mentoria04;
