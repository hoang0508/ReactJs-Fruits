import React from "react";
import "./ModalPd.scss";
const ModalProduct = ({ urlM }) => {
  console.log(
    "🚀 ~ file: ModalProduct.js ~ line 4 ~ ModalProduct ~ urlM",
    urlM.images
  );
  return (
    <div className="modalP">
      <div className="modalP-content">
        <div className="modalP-content--left">
          <div className="modal-content--images">
            <img src={urlM.images} alt="" />
          </div>
          <div className="modal-content--thumb"></div>
        </div>
        <div className="modalP-content--right"></div>
      </div>
    </div>
  );
};

export default ModalProduct;
