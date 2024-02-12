import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 justify-between items-center bg-[#618985] p-10 text-white w-full lg:grid grid-cols-2 place-items-center">
      <div className="flex flex-col">
        <span className="archivFont text-lg">Email:</span>
        <p className="roboto">mhoey8@hotmail.com</p>
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
