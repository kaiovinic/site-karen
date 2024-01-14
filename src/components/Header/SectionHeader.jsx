import Button02 from "../button/Button02";

const SectionHeader = () => {
  return (
    <>
      <section className="absolute top-[60%] left-[23%] -translate-x-1/2 -translate-y-1/2 w-[40%] text-center">
        <h1 className="text-4xl font-bold wrap text-[#816e26]">
          Consultoria, palestras e treinamentos sobre carreira.
        </h1>
        <p className="text-lg mt-5 text-white ">
          &#34;Imagine um futuro onde você é o proficional que todos desejam ter
          em sua equipe&#34;.
        </p>
        <Button02 />
      </section>
    </>
  );
};

export default SectionHeader;
