import React from "react";
import PageLine from "../../PageLine";
import blogImg1 from "../../../assets/img/blog-1.jpg";
import blogImg2 from "../../../assets/img/blog-2.jpg";
import blogImg3 from "../../../assets/img/blog-3.jpg";
import "./LastestBlog.scss";
const dataBlog = [
  {
    id: 1,
    images: `${blogImg1}`,
    date: "20-04-2022",
    title: "What You Should Know About Detox Water",
  },
  {
    id: 2,
    images: `${blogImg2}`,
    date: "18-04-2022",
    title: "Better Hot Drink Elegant You Can Order By Online",
  },
  {
    id: 3,
    images: `${blogImg3}`,
    date: "30-04-2022",
    title: "Role of Genetics in Treating Low-grade Glioma",
  },
];

const LastestBlog = ({ heading }) => {
  return (
    <div className="LastestBlog">
      <PageLine heading={heading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </PageLine>
      <div className="container">
        <div className="LastestBlog-list">
          <div className="LastestBlog-item">
            <div className="LastestBlog-images">
              <img src={blogImg1} alt="" />
              <div className="LastestBlog-date">20-4-2022</div>
            </div>
            <div className="LastestBlog-title">
              What You Should Know About Detox Water
            </div>
            <div className="LastestBlog-more">Read more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestBlog;
