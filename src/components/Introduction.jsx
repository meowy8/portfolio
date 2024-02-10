import ScrollToButton from "./ScrollToSelectionButton";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className=" flex flex-col items-center p-10 mt-32 hover:bg-[#122446] hover:text-[#AFCBFF] transition-colors duration-500 rounded-bl-[200px] rounded-tr-[200px] rounded lg:rounded-bl-[300px] lg:rounded-tr-[300px]"
    >
      <div className="flex flex-col items-center md:flex-row lg:w-4/5">
        <div className="max-w-96 overflow-hidden mb-4">
          <img
            src="/Media/dazzle-line-man-programmer-writing-code-on-a-laptop-1.gif"
            alt=""
          />
        </div>
        <div className="md:w-3/5 ">
          <h1 className="text-2xl md:text-3xl">
            Hi, my name is Micheál <span className="text-sm">(me-hall)</span> !
          </h1>
          <p className="text-xl">
            I am a{" "}
            <span className="transition-color duration-[550ms]">
              Front-End Developer
            </span>{" "}
            born in Northern Ireland looking to share my skills with a great team of people and build
            some innovative websites.
          </p>
        </div>
      </div>
      <ScrollToButton />
    </section>
  );
};

export default Introduction;
