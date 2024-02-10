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
    <section className="my-16 ">
      <div className="flex justify-center p-4 ">
        <h1 className="text-2xl archivFont mb-10">Check out my projects!</h1>
      </div>
      <div className="flex flex-col items-center gap-8 lg:grid grid-cols-2 ">
        <ProjectCard
          title={"Millimetre"}
          urlPath={"https://millimetre.netlify.app/"}
          imgPath={"/Media/millimetre-screenshot.png"}
          icons={millimetreIcons}
          githubPath={"https://github.com/meowy8/millimetre"}
          text={
            "Start your journey into experimental cinema! Create a profile and add films to your watched list as you make your way through the catalogue. Add your thoughts in a note for each film so others can see. Uses the TMDB API along with a custom database using Firebase."
          }
        />
        <ProjectCard
          title={"Pictiurlann"}
          urlPath={"https://pictiurlann.netlify.app/"}
          imgPath={"/Media/pictiurlann-screenshot.png"}
          icons={pictiurlannIcons}
          text={
            "A mock magazine website for film articles. Allows you to save articles to a list and view them once signed in. Uses Tailwind for styling, React Router for page routing and the Context API for sharing data across pages. The name comes from the Irish word for cinema!"
          }
        />
        <ProjectCard
          title={"Weather App"}
          urlPath={"https://weatheappportfolio.netlify.app/"}
          imgPath={"/Media/weather-app-screenshot.png"}
          icons={finesseIcons}
          text={
            "Weather app built using vanilla Javascript and CSS. Search for a location and view details about the weather with help from WeatherAPI. Also uses the Pexels API to find and display a random image related to that location."
          }
        />
          <ProjectCard
            title={"Memory Game"}
            urlPath={"https://memorygameportfolio.netlify.app/"}
            imgPath={"/Media/memory-game-screenshot.png"}
            icons={memoryGameIcons}
            text={
              "A memory game where you have to select each number in the list without clicking the same one twice. Uses React state to handle the scoreboard and Javascript for game mechanics. A project completed as part of The Odin Project course. "
            }
          />
      </div>
    </section>
  );
};

export default Projects;
