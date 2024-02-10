const ScrollToSelectionButton = () => {
  const scrollToSelection = () => {
    const section = document.getElementById("skills");
    const offsetTop = section.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex w-full justify-center mt-10">
      <button
        onClick={scrollToSelection}
        className="bg-[#C19875] hover:bg-[#c98950] rounded-3xl w-16 h-16 text-[#414535] border-2 border-black flex  justify-center items-center"
      >
        <img src="/Icons/icons8-arrow-down-100.png" alt="" className="w-3/5"/>
      </button>
    </div>
  );
};

export default ScrollToSelectionButton;
