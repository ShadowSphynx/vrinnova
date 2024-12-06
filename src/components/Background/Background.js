import React from "react";
import clsx from "clsx"; // Optional: Helps manage class names conditionally
import "./Background.css";

// function Background({ children }) {
//   return <div className="section">{children}</div>;
// }

function Background({ children, className = "" }) {
  return <div className={clsx("section", className)}>{children}</div>;
}
export default Background;
