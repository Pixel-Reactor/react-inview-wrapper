"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  InView: () => InView
});
module.exports = __toCommonJS(src_exports);

// src/component/InView.tsx
var import_react = __toESM(require("react"), 1);
function InView({ children, customStyles, customStyleIn, customStyleOut }, _ref) {
  const [isOnView, setIsOnView] = (0, import_react.useState)(false);
  const [ReactStyle, setReactStyle] = (0, import_react.useState)({
    opacity: 0,
    transition: "all 0.3s",
    width: "100%",
    height: "100%"
  });
  (0, import_react.useEffect)(() => {
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
  const mainRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
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
  (0, import_react.useEffect)(() => {
    if (isOnView) {
      setReactStyle({ ...ReactStyle, opacity: 1 });
    } else {
      setReactStyle({ ...ReactStyle, opacity: 0 });
    }
  }, [isOnView]);
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      style: !customStyleIn && !customStyleOut ? ReactStyle : {},
      className: `${customStyles ? customStyles : ""} ${isOnView ? customStyleIn : customStyleOut || ""}`,
      ref: mainRef
    },
    children
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InView
});
