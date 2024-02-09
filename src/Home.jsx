import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <div className="m-1 flex flex-col">
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
