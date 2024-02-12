import ScrollToSelectionButton from "./ScrollToSelectionButton";

const NavBar = () => {
  return (
    <nav className="fixed flex justify-between items-center w-full max-w-[1500px] p-2 m-0 archivFont rounded-b transition-all hover:shadow-2xl shadow-black duration-200 hover:bg-[#f2e3bc] z-50">
      <div>
        <span className="text-2xl text-[#000000] hover:drop-shadow-md hover:cursor-default">
          Micheal Hoey
        </span>
      </div>
      <div id="pages" className="flex justify-between w-56 mx-4 ">
        <ScrollToSelectionButton location={"introduction"}>
          Home
        </ScrollToSelectionButton>
        <ScrollToSelectionButton location={"skills"}>
          Skills
        </ScrollToSelectionButton>
        <ScrollToSelectionButton location={"projects"}>
          Projects
        </ScrollToSelectionButton>
        <ScrollToSelectionButton location={'about'}>
          About
        </ScrollToSelectionButton>
      </div>
    </nav>
  );
};

export default NavBar;
