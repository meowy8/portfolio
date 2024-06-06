import Lottie from "lottie-web";
import ScrollToButton from "./ScrollToSelectionButton";
import { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    const element = document.getElementById("animation-container");
    Lottie.loadAnimation({
      container: element, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Media/dazzle-line-man-programmer-writing-code-on-a-laptop-1.json", // the path to the animation json
    });
  }, []);

  return (
    <div className="h-screen">
      <section
        id="introduction"
        className="group flex flex-col items-center p-10 mt-32 hover:bg-[#122446] hover:text-[#AFCBFF] transition-colors duration-500 rounded-bl-[200px] rounded-tr-[200px] rounded lg:rounded-bl-[300px] lg:rounded-tr-[300px]"
      >
        <div className="flex flex-col items-center md:flex-row lg:w-4/5">
          <div
            id="animation-container"
            className="w-4/6 md:w-3/6 overflow-hidden mb-4"
          ></div>
          <div className="md:w-3/5 ">
            <h1 className="text-2xl md:text-3xl">
              Hi, my name is Micheál <span className="text-sm">(me-hall)</span>{" "}
              !
            </h1>
            <p className="text-xl">
              I&apos;m a{" "}
              <span className="transition-color duration-[550ms] group-hover:text-[#d66969]">
                Front-End Developer
              </span>{" "}
              born in Northern Ireland looking to share my skills with a great
              team of people and build innovative websites.
            </p>
            <div className="flex justify-center w-full mt-10 roboto">
              <div className="flex justify-center border border-black group-hover:border rounded-md m-2 p-2 hover:bg-[#AFCBFF] hover:text-[#d66969] w-32">
                <ScrollToButton location={"footer"}>Contact Me</ScrollToButton>
              </div>
              <a
                target="_blank"
                href="https://www.dropbox.com/scl/fi/urvqfgjyfmieuphh5r3q8/Web-Developer.pdf?rlkey=s2uo20acjvow030s9rhkqh9m6&st=iir66gnl&dl=0"
                className=""
              >
                <button className="border border-black group-hover:border rounded-md m-2 p-2 hover:bg-[#AFCBFF] hover:text-[#d66969] w-32">
                  CV
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-10">
          <ScrollToButton location={"skills"}>
            <div className="bg-[#C19875] hover:bg-[#c98950] rounded-3xl w-16 h-16 text-[#414535] border-2 border-black flex  justify-center items-center">
              <img
                src="/Icons/icons8-arrow-down-100.png"
                alt=""
                className="w-3/5"
              />
            </div>
          </ScrollToButton>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
