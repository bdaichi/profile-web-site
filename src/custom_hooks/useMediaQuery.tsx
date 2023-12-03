import { useEffect, useState } from "react";

export const mediaQuery = {
  sp: "width < 602px",
  tablet: "602px <= width < 1162px",
  pc: "992px <= width",
};

//HACK:Material_uiにもuseMediaQueryがあるので、紛らわしい...けど他に良い感じの名前が思い浮かばない...
export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`;
  const [match, setMatch] = useState(true);

  useEffect(() => {
    setMatch(matchMedia(formattedQuery).matches);
  }, []);

  useEffect(() => {
    const mql = matchMedia(formattedQuery);

    if (mql.media === "not all" || mql.media === "invalid") {
      console.error(`useMediaQuery Error: Invalid media query`);
    }

    mql.onchange = (e) => {
      setMatch(e.matches);
    };

    return () => {
      mql.onchange = null;
    };
  }, [formattedQuery, setMatch]);

  return match;
};
