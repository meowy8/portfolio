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

  const photographyPortfolioIcons = [
    {
      text: "React",
      path: "/Icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png",
    },
    { text: "Javascript", path: "/Icons/icons8-javascript-96.png" },
    { text: "Tailwind", path: "/Icons/icons8-tailwind-css-96.png" },
    { text: "NextJS", path: "/Icons/next-js.256x256.png" },
  ];

  const setantaIcons = [
    {
      text: "React",
      path: "/Icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png",
    },
    { text: "Typescript", path: "/Icons/icons8-typescript-96.png" },
    { text: "Tailwind", path: "/Icons/icons8-tailwind-css-96.png" },
    { text: "NextJS", path: "/Icons/next-js.256x256.png" },
    { text: "Firebase", path: "/Icons/icons8-firebase-96.png" },
  ];

  const newMillimetreIcons = [
    {
      text: "React",
      path: "/Icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png",
    },
    { text: "Javascript", path: "/Icons/icons8-javascript-96.png" },
    { text: "Tailwind", path: "/Icons/icons8-tailwind-css-96.png" },
    { text: "MongoDB", path: "/Icons/icons8-mongodb-96.png" },
    { text: "NextJS", path: "/Icons/next-js.256x256.png" },
    { text: "Figma", path: "/Icons/icons8-figma-96.png" },
    { text: "TypeScript", path: "/Icons/icons8-typescript-96.png" },
  ];

  return (
    <section id="projects" className="my-16 ">
      <div className="flex justify-center p-4 ">
        <h1 className="text-2xl archivFont mb-10">Check out my projects!</h1>
      </div>
      <div className="flex flex-col items-center gap-8 lg:grid grid-cols-2 ">
        <ProjectCard
          title={"Millimetre"}
          urlPath={"https://mmillimetre.com"}
          imgPath={"/Media/new-millimetre-screenshot.png"}
          icons={newMillimetreIcons}
          githubPath={"https://github.com/meowy8/millimetre_v3"}
          text={
            "Discover new and lesser seen films with Millimetre! Sign up and find your new favourite film, record your thoughts in notes and add films to your watchlist. A fullstack application using the power of NextJS, React and MongoDB to build a new, exciting website for film enthusiasts. This is a project I plan to continue to work on in the future..."
          }
        />
        <ProjectCard
          title={"Millimetre (Old)"}
          urlPath={"https://millimetredemo.netlify.app/"}
          imgPath={"/Media/millimetre-screenshot.png"}
          icons={millimetreIcons}
          githubPath={"https://github.com/meowy8/millimetre"}
          text={
            "Start your journey into experimental cinema! Create a profile and add films to your watched list as you make your way through the catalogue. Add your thoughts in a note for each film so others can see. Uses the TMDB API along with a custom database using Firebase."
          }
          demoVersion={"Demo Site"}
        />
        <ProjectCard
          title={"Setanta"}
          urlPath={"https://setanta.netlify.app/"}
          imgPath={"/Media/setanta-screenshot.png"}
          icons={setantaIcons}
          githubPath={"https://github.com/meowy8/setanta"}
          text={
            "Setanta is a modern clothing e-commerce platform built with React and TypeScript. Offering a responsive shopping experience, Setanta showcases a curated collection of stylish apparel for fashion enthusiasts. With intuitive navigation and sleek design, users can effortlessly browse through a wide range of trendy outfits."
          }
        />
        <ProjectCard
          title={"Photography Portfolio"}
          urlPath={"https://micheal-photography-portfolio.netlify.app"}
          imgPath={"/Media/photography-portfolio-screenshot.png"}
          icons={photographyPortfolioIcons}
          githubPath={"https://github.com/meowy8/photography-portfolio"}
          text={
            "A simple portfolio website to host some of my own photography. Created using React and Next.js."
          }
        />
      </div>
    </section>
  );
};

export default Projects;
