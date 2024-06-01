const SkillIcon = ({ text, iconPath }) => {
  return (
    <div className="flex flex-col items-center transition-transform hover:scale-105 duration-50">
      <img src={iconPath} alt="" className="w-12" />
      <span className="text-[#a8d1d1] text-sm">{text}</span>
    </div>
  );
};

export default SkillIcon;
