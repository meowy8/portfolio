import Contact from "./Contact";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col gap-10 justify-between items-center bg-[#618985] p-10 text-white w-full lg:grid grid-cols-2 place-items-center"
    >
      <div className="flex flex-col gap-4 w-full md:w-2/5">
        <div>
          <span className="archivFont text-lg">Email:</span>
          <p className="roboto">mhoey8@hotmail.com</p>
        </div>
        <div>
          <span>Links:</span>
          <div className="flex">
            <a href="https://www.linkedin.com/in/micheal-hoey-271a50232/" target="_blank">
              <img
                src="/Media/kisspng-computer-icons-linkedin-5aff0283e54964.1704227815266617639392.png"
                alt=""
                className="w-12"
              />
            </a>
            <a href="https://github.com/meowy8" target="_blank">
              <img src="/Icons/icons8-github-96.png" alt="" className="w-12"/>
            </a>
          </div>
        </div>
      </div>
      <Contact />
      <div className="mt-8 flex flex-col text-xs roboto">
        <span>Illustration by Elisabet Guba from Ouch!</span>
        <a href="https://www.flaticon.com/free-icons/clean" title="clean icons">
          Clean icons created by Tanah Basah - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
