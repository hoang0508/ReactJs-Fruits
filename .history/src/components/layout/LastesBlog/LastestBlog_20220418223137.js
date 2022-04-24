import React from "react";
import PageLine from "../../PageLine";
import blogImg1 from "../../../assets/img/blog-1.jpg";
import blogImg2 from "../../../assets/img/blog-2.jpg";
import blogImg3 from "../../../assets/img/blog-3.jpg";

const LastestBlog = ({ heading }) => {
  return (
    <div className="LastestBlog">
      <PageLine heading={heading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </PageLine>
      <div className="LastestBlog-list">
        <div className="LastestBlog-item">
          <div className="LastestBlog-images">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestBlog;
