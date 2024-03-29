const SkillIcon = ({text, iconPath}) => {
  return (
    <div className="flex flex-col items-center transition-transform hover:scale-105 duration-50 w-20">
      <img src={iconPath} alt="" />
      <span className="text-[#a8d1d1] text-sm">{text}</span>
    </div>
  )
}

export default SkillIcon