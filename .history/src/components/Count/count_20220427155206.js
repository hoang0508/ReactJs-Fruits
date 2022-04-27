import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="count">
      <div className="count-minus"></div>
      <input type="text" value={count} className="count-value" />
      <div className="count-plus"></div>
    </div>
  );
};

export default Count;
