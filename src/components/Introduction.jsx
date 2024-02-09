import ScrollToButton from "./ScrollToSelectionButton"

const Introduction = () => {
  return (
    <section id="introduction" className=" flex flex-col items-center p-10 mt-10">
        <div className="max-w-96 overflow-hidden mb-4">
          <img
            src="/Media/dazzle-line-man-programmer-writing-code-on-a-laptop-1.gif"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl">
            Hi, my name is Micheál <span className="text-sm">(me-hall)</span>!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <ScrollToButton />
      </section>
  )
}

export default Introduction