import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className=" flex justify-between items-center w-full p-2 archivFont rounded-b transition-shadow hover:shadow-2xl shadow-black duration-200 ">
      <div>
        <Link to={'/'} id="title" className="text-2xl text-[#000000] hover:drop-shadow-md">Micheal Hoey</Link>
      </div>
      <div id="pages" className="flex justify-between w-32 mx-4 ">
        <Link to={'/'} className="hover:drop-shadow-md">Home</Link>
        <Link to={'/projects'} className="hover:drop-shadow-md">Projects</Link>
      </div>
    </nav>
  )
}

export default NavBar