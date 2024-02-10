import SkillIcon from "./SkillIcon";

const ProjectCard = ({ title, urlPath, imgPath, icons, githubPath }) => {

  return (
    <div className="w-96 h-full p-2 bg-[#C19875] border-2 border-black rounded-md shadow-lg shadow-black transition-transform hover:scale-105 ">
      <div className="rounded-sm overflow-hidden">
        <img src={imgPath} alt="" />
      </div>
      <div className="p-2">
        <a href={urlPath} className="hover:underline underline-offset-4 decoration-red-700 hover:cursor-pointer text-2xl archivFont">{title}</a>
        <div className="mt-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className="flex justify-between p-2 text-white text-sm">
        <a href={urlPath} className="p-2 bg-black rounded-md border border-black hover:border-white">Live Demo</a>
        <a href={githubPath} className="p-2 bg-black rounded-md border border-black hover:border-white">GitHub Repo</a>
      </div>
      <div className="flex justify-center p-6 bg-[#618985] rounded-sm">
        {icons.map((icon, index) => {
          return <SkillIcon key={index} text={icon.text} iconPath={icon.path}/>
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
