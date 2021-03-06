import { useState, useEffect } from "react";

const useHideOnScrolled = () => {
  const [hiddenNav, setHiddenNav] = useState(true);
  const [hiddenBottomIcons, setHiddenBottomIcons] = useState(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setHiddenNav(top < 200);
    setHiddenBottomIcons(top >= 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { hiddenNav, hiddenBottomIcons };
};

export default useHideOnScrolled;
