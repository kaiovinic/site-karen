import Button02 from "../button/Button02";

const SectionHeader = () => {
  return (
    <>
      <section
        className="absolute top-[60%] left-[23%] -translate-x-1/2 -translate-y-1/2 w-[40%] text-center 
      max-lg:top-[70%] max-lg:left-[50%] max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 "
      >
        <h1 className="text-4xl font-bold wrap text-[#816e26] max-sm:text-2xl max-sm:text-center">
          Consultoria, palestras e treinamentos sobre carreira.
        </h1>
        <p className="text-lg mt-5 text-white font-medium  max-lg:text-black max-sm:text-sm max-sm:text-center">
          &#34;Imagine um futuro onde você é o proficional que todos desejam ter
          em sua equipe&#34;.
        </p>
        <Button02 />
      </section>
    </>
  );
};

export default SectionHeader;
