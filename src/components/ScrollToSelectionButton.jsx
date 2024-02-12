const ScrollToSelectionButton = ({ children, location }) => {
  const scrollToSelection = () => {
    const section = document.getElementById(location);
    const offsetTop = section.offsetTop;

    window.scrollTo({
      top: offsetTop - 65,
      behavior: "smooth",
    });
  };

  return <button onClick={scrollToSelection} className="hover:drop-shadow-md">{children}</button>;
};

export default ScrollToSelectionButton;
