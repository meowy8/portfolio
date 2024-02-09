const SkillIcon = ({text, iconPath}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={iconPath} alt="" />
      <span className="text-[#a8d1d1] text-sm">{text}</span>
    </div>
  )
}

export default SkillIcon