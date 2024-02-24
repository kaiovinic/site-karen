import Button02 from "../button/Button02";

const Mentoria03 = () => {
  return (
    <div className="grid m-10 text-xl font-medium">
      {/* <div className="bg-mentoria03 bg-cover bg-no-repeat  w-1/2 rounded shadow-2xl shadow-black"></div> */}
      <div className="text-start text-white p-10  max-sm:text-sm">
        <h2 className="text-5xl font-bold text-orange-900 p-10  max-sm:text-3xl">
          Reformulação curricular
        </h2>
        <p>
          Diariamente, centenas de bons candidatos são eliminados em processos
          seletivos por não terem seus currículos bem elaborados.
        </p>
        <p>Seu currículo tem formato ideal para atrair os recrutadores?</p>
        <p>
          Você receberá um currículo profissional bem estruturado e elaborado
          por quem entende de recrutamento em até 72 horas.
        </p>
        <p>
          Devolutiva online para que você entenda cada item reformulado e tenha
          segurança na hora da entrevista.
        </p>
        <p className=" mb-[80px]">
          Não perca mais tempo. Invista em você e saia na frente!{" "}
        </p>
        <Button02 />
      </div>
    </div>
  );
};

export default Mentoria03;
