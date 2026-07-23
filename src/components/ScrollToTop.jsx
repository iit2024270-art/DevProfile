import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!showButton) {
    return null;
  }

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;