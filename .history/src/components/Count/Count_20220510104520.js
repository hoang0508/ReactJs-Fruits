import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useImageContext } from "../context/Auth-Context.js";
import "./Count.scss";
const Count = ({ count }) => {
  const [value, setValue] = useState("");
  const { handleCountMinus, handleCountPlus } = useImageContext();
  return (
    <div className="count">
      <div className="count-minus" onClick={() => handleCountMinus()}>
        <FaMinus />
      </div>
      <input
        type="text"
        value={count}
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
