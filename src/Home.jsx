import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <div className=" flex flex-col items-center">
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
