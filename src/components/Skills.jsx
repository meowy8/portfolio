import SkillIcon from "./SkillIcon"

const Skills = () => {
  const icons = [
    {text: 'React', path: "/Icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png"},
    {text: 'Javascript', path: "/Icons/icons8-javascript-96.png"},
    {text: 'Tailwind', path: "/Icons/icons8-tailwind-css-96.png"},
    {text: 'CSS', path: "/Icons/icons8-css-96.png"},
    {text: 'HTML', path: "/Icons/icons8-html-96.png"},
    {text: 'Firebase', path: "/Icons/icons8-firebase-96.png"},
    {text: 'Git', path: "/Icons/icons8-git-96.png"},
    {text: 'GitHub', path: "/Icons/icons8-github-96.png"}
  ]

  return (
    <section
    id="skills"
    className="bg-[#618985] grid grid-cols-4 rounded-lg mt-64 p-4"
  >
    {icons.map((icon, index) => {
      return <SkillIcon key={index} text={icon.text} iconPath={icon.path}/>
    })}
  </section>
  )
}

export default Skills