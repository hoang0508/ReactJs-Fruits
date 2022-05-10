import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Count.scss";
const Count = () => {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState("");
  const handleCountMinus = () => {
    if (count > 0) {
      setCount(() => count - 1);
    }
  };
  const handleCountPlus = () => {
    setCount(() => count + 1);
  };
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
