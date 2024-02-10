import Contact from "./Contact"

const Footer = () => {
  return (
    <footer className="bg-[#618985] p-10 text-white w-full">
      <Contact />
      <div className="mt-10 flex flex-col text-sm">
        <span>Illustration by Elisabet Guba from Ouch!</span>
        <a href="https://www.flaticon.com/free-icons/clean" title="clean icons">Clean icons created by Tanah Basah - Flaticon</a>
      </div>
    </footer>
  )
}

export default Footer