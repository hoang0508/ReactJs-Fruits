import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const Count = () => {
  const [count, setCount] = useState(0);
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
      <input type="text" value={count} className="count-value" />
      <div className="count-plus" onClick={() => handleCountPlus()}>
        <FaPlus />
      </div>
    </div>
  );
};

export default Count;
