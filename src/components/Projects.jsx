import ProjectCard from "./ProjectCard";

const Projects = () => {
  const millimetreIcons = [
    {
      text: "React",
      path: "/Icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png",
    },
    { text: "Javascript", path: "/Icons/icons8-javascript-96.png" },
    { text: "Tailwind", path: "/Icons/icons8-tailwind-css-96.png" },
    { text: "Firebase", path: "/Icons/icons8-firebase-96.png" },
  ];

  const pictiurlannIcons = [
    {
      text: "React",
      path: "/Icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png",
    },
    { text: "Javascript", path: "/Icons/icons8-javascript-96.png" },
    { text: "Tailwind", path: "/Icons/icons8-tailwind-css-96.png" },
  ];

  const memoryGameIcons = [
    {
      text: "React",
      path: "/Icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png",
    },
    { text: "Javascript", path: "/Icons/icons8-javascript-96.png" },
    { text: "CSS", path: "/Icons/icons8-css-96.png" },
    { text: "HTML", path: "/Icons/icons8-html-96.png" },
  ];

  const finesseIcons = [
    { text: "Javascript", path: "/Icons/icons8-javascript-96.png" },
    { text: "CSS", path: "/Icons/icons8-css-96.png" },
    { text: "HTML", path: "/Icons/icons8-html-96.png" },
  ];

  return (
    <section className="my-16">
      <div className="flex justify-center p-4">
        <h1 className="text-2xl archivFont mb-10">Check out my projects!</h1>
      </div>
      <div className="flex flex-col items-center gap-8">
        <ProjectCard
          title={"Millimetre"}
          urlPath={"https://millimetre.netlify.app/"}
          imgPath={"/Media/millimetre-screenshot.png"}
          icons={millimetreIcons}
          githubPath={"https://github.com/meowy8/millimetre"}
        />
        <ProjectCard
          title={"Pictiurlann"}
          urlPath={"https://pictiurlann.netlify.app/"}
          imgPath={"/Media/pictiurlann-screenshot.png"}
          icons={pictiurlannIcons}
        />
        <ProjectCard
          title={"Memory Game"}
          urlPath={"https://memorygameportfolio.netlify.app/"}
          imgPath={"/Media/memory-game-screenshot.png"}
          icons={memoryGameIcons}
        />
        <ProjectCard
          title={"Finesse"}
          urlPath={"https://finesseshopping.netlify.app/"}
          imgPath={"/Media/finesse-screenshot.png"}
          icons={finesseIcons}
        />
      </div>
    </section>
  );
};

export default Projects;
