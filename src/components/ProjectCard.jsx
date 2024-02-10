import SkillIcon from "./SkillIcon";

const ProjectCard = ({ title, urlPath, imgPath, icons, githubPath, text }) => {
  return (
    <div className="w-96 h-full p-2 bg-[#C19875] border-2 border-black rounded-md shadow-lg shadow-black transition-transform hover:scale-105 ">
      <div className="rounded-sm overflow-hidden h-48">
        <img src={imgPath} alt="" className=""/>
      </div>
      <div className="p-2">
        <a
          href={urlPath}
          target="_blank"
          className="hover:underline underline-offset-4 decoration-[#592020] hover:cursor-pointer text-2xl archivFont"
        >
          {title}
        </a>
        <div className="mt-4 border-2 border-[#121b2b] bg-[#592020] p-4 rounded-lg text-slate-200 text-sm">
          <p>{text}</p>
        </div>
      </div>
      <div className="flex justify-between p-2 text-white text-sm">
        <a
          href={urlPath}
          target="_blank"
          className="p-2 bg-[#592020] rounded-md border border-black hover:border-white"
        >
          Live Demo
        </a>
        <a
          href={githubPath}
          target="_blank"
          className="p-2 bg-[#592020] rounded-md border border-black hover:border-white hover:cursor-pointer"
        >
          GitHub Repo
        </a>
      </div>
      <div className="flex justify-center p-6 bg-[#618985] rounded-sm">
        {icons.map((icon, index) => {
          return (
            <SkillIcon key={index} text={icon.text} iconPath={icon.path} />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
