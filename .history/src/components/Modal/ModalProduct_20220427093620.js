import React from "react";
import "./ModalPd.scss";
const ModalProduct = ({ urlM }) => {
  // console.log(
  //   "🚀 ~ file: ModalProduct.js ~ line 4 ~ ModalProduct ~ item",
  //   urlM
  // );
  return (
    <div className="modalP">
      <div className="modalP-content">
        <div className="modalP-content--left">
          <div className="modal-content--images"></div>
          <div className="modal-content--thumb"></div>
        </div>
        <div className="modalP-content--right"></div>
      </div>
    </div>
  );
};

export default ModalProduct;
