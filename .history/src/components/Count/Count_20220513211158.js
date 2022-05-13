import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useImageContext } from "../context/Auth-Context.js";
import "./Count.scss";
const Count = ({ count1 }) => {
  const [value, setValue] = useState("");
  const { handleCountMinus, handleCountPlus, count } = useImageContext();
  return (
    <div className="count">
      <div className="count-minus" onClick={() => handleCountMinus()}>
        <FaMinus />
      </div>
      <input
        type="text"
        value={count1 === "" ? count : count1}
        className="count-value"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="count-plus" onClick={() => handleCountPlus()}>
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
