import React from "react";
import { useParams } from "react-router";

const Detailpage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Detailpage;
