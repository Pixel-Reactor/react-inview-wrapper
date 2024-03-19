// src/component/InView.tsx
import React, { useRef, useState, useEffect } from "react";
function InView({ children, customStyles, customStyleIn, customStyleOut }, _ref) {
  const [isOnView, setIsOnView] = useState(false);
  const [ReactStyle, setReactStyle] = useState({
    opacity: 0,
    transition: "all 0.3s",
    width: "100%",
    height: "100%"
  });
  useEffect(() => {
    if (customStyleIn || customStyleOut) {
      if (typeof customStyleIn !== "string") {
        console.error(
          "InView component error : customStyleIn prop has to be a string as it will set the className"
        );
      }
      if (typeof customStyleOut !== "string") {
        console.error(
          "InView component error : customStyleOut prop has to be a string as it will set the className"
        );
      }
    }
  }, [customStyleIn, customStyleOut]);
  const mainRef = useRef(null);
  useEffect(() => {
    const checkPos = () => {
      if (!mainRef.current)
        return;
      const rect = mainRef.current.getBoundingClientRect();
      const center = rect.height / 2;
      if (rect.top <= -center || rect.bottom >= window.innerHeight + center) {
        setIsOnView(false);
      } else {
        setIsOnView(true);
      }
    };
    window.addEventListener("resize", checkPos);
    window.addEventListener("scroll", checkPos);
    checkPos();
    return () => {
      window.removeEventListener("resize", checkPos);
      window.removeEventListener("scroll", checkPos);
    };
  }, []);
  useEffect(() => {
    if (isOnView) {
      setReactStyle({ ...ReactStyle, opacity: 1 });
    } else {
      setReactStyle({ ...ReactStyle, opacity: 0 });
    }
  }, [isOnView]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: !customStyleIn && !customStyleOut ? ReactStyle : {},
      className: `${customStyles ? customStyles : ""} ${isOnView ? customStyleIn : customStyleOut || ""}`,
      ref: mainRef
    },
    children
  );
}
export {
  InView
};
