import SkillIcon from "./SkillIcon";

const ProjectCard = ({
  title,
  urlPath,
  imgPath,
  icons,
  githubPath,
  text,
  demoVersion,
}) => {
  return (
    <div className=" w-96 h-full p-2 bg-[#8d3b3b] border-2 border-black rounded-md shadow-lg shadow-black transition-transform hover:scale-105 roboto">
      <div className="rounded-sm overflow-hidden h-48">
        <img src={imgPath} alt="" className="" />
      </div>
      <div className="pt-2 text-white my-1 rounded-md border-2 border-black shadow-sm shadow-black">
        <a
          href={urlPath}
          target="_blank"
          className="px-4 hover:underline underline-offset-4 decoration-black hover:cursor-pointer text-2xl archivFont"
        >
          {title}
        </a>
        <div className="p-4 border-[#121b2b] rounded-md text-[15px] mt-2 leading-relaxed tracking-wider">
          <p>{text}</p>
        </div>
        <div className="flex gap-4 justify-center p-4 text-white text-md">
          <a
            href={urlPath}
            target="_blank"
            className="p-2 bg-[#618985] rounded-md border border-black hover:border-white hover:bg-white hover:text-[#618985]"
          >
            {demoVersion ? demoVersion : "Live Site"}
          </a>
          <a
            href={githubPath}
            target="_blank"
            className="p-2 bg-[#618985] rounded-md border border-black hover:border-white hover:bg-white hover:text-[#618985] hover:cursor-pointer"
          >
            Code
          </a>
        </div>
        <div className="grid grid-cols-4  items-end p-6 bg-[#618985] rounded-sm w-full  gap-2">
          {icons.map((icon, index) => {
            return (
              <SkillIcon key={index} text={icon.text} iconPath={icon.path} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
