import { Link } from "react-router-dom";
import SkillIcon from "./SkillIcon";
import CardSkills from "./CardSkills";

const ProjectCard = ({ title, urlPath, imgPath, icons }) => {

  return (
    <div className="w-96 p-2 bg-[#C19875] border-2 border-black rounded-md shadow-lg shadow-black transition-transform hover:scale-105">
      <div className="rounded-sm overflow-hidden">
        <img src={imgPath} alt="" />
      </div>
      <div className="p-2">
        <Link to={urlPath} className="hover:underline hover:text-white text-2xl archivFont">{title}</Link>
        <div className="mt-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
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
