import React from "react";
import PageLine from "../../PageLine";
import blogImg1 from "../../../assets/img/blog-1.jpg";
import blogImg2 from "../../../assets/img/blog-2.jpg";
import blogImg3 from "../../../assets/img/blog-3.jpg";
import blogImg4 from "../../../assets/img/blog-3.jpg";
import blogImg5 from "../../../assets/img/blog-3.jpg";
import blogImg6 from "../../../assets/img/blog-3.jpg";
import blogImg7 from "../../../assets/img/blog-3.jpg";
import blogImg8 from "../../../assets/img/blog-3.jpg";

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
    <section className="LastestBlog">
      <PageLine heading={heading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </PageLine>
      <div className="container">
        <div className="LastestBlog-list">
          {dataBlog &&
            dataBlog.length > 0 &&
            dataBlog.map((item) => (
              <div className="LastestBlog-item" key={item.id}>
                <div className="LastestBlog-images">
                  <img src={item.images} alt="" />
                  <div className="LastestBlog-date">{item.date}</div>
                </div>
                <div className="LastestBlog-content">
                  <div className="LastestBlog-title">{item.title}</div>
                  <div className="LastestBlog-more">Read more</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LastestBlog;
