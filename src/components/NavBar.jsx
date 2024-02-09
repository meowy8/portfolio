import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-[#C19875] flex justify-between p-2 archivFont rounded-b">
      <div>
        <Link to={'/'} id="title" className="text-xl ">Micheal Hoey</Link>
      </div>
      <div id="pages" className="flex justify-between w-32 mx-4">
        <Link to={'/'}>Home</Link>
        <Link to={'/projects'}>Projects</Link>
      </div>
    </nav>
  )
}

export default NavBar