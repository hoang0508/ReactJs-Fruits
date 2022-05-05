import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Topdown.scss";
const Topdown = () => {
  const downRef = useRef(null);
  useEffect(() => {
    const handleDownup = () => {};
    window.addEventListener("scroll", handleDownup);
    return () => {
      window.removeEventListener("scroll", handleDownup);
    };
  }, []);
  return (
    <div className="down" ref={downRef}>
      <FaArrowUp />
    </div>
  );
};

export default Topdown;
