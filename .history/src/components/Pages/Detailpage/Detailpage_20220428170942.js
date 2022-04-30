import React from "react";
import { useParams } from "react-router";
import { useHookAPI } from "../../../hooks/useHookAPI";

const Detailpage = () => {
  const { id } = useParams();
  console.log(id);
  const { value: itemDetails } = useHookAPI(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products/${id}`
  );
  console.log(
    "🚀 ~ file: Detailpage.js ~ line 9 ~ Detailpage ~ itemDetails",
    itemDetails
  );
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Detailpage;
