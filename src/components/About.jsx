const About = () => {
  return (
    <section
      id="about"
      className="hover:bg-[#122446] hover:text-[#AFCBFF] transition-colors duration-500 mb-44 mt-32 mx-4 rounded-t-md md:w-3/5"
    >
      <div className="group shadow-md  shadow-black p-6 archivFont border-2 border-black rounded-md">
        <h1 className="text-2xl mb-4">About Me</h1>
        <p className="lora text-lg tracking-widest">
          I&apos;m a Front-End Developer with a <span className="transition-color duration-[550ms] group-hover:text-[#d66969]">Bachelor&apos;s degree in
          Mathematics</span>. I love creating websites that are designed with the user
          experience in mind.
          <br />I have developed <span className="transition-color duration-[550ms] group-hover:text-[#d66969]">good communication and teamwork skills</span> working
          as a barista over a couple of years but I felt I could never show off
          my <span className="transition-color duration-[550ms] group-hover:text-[#d66969]">problem solving abilities</span>. Coding has allowed me to discover and
          unlock so much more that I&apos;m capable of.
          <br /> Other than creating web projects, I spend my free time
          writing, taking photos and filmmaking.
        </p>
      </div>
    </section>
  );
};

export default About;
