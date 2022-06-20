import React from "react";
import styled from "styled-components";
import bannerCart from "../../assets/img/page-banner-3.jpg";
const Blogstyle = styled.div`
  .blog {
    &-banner {
      min-height: 400px;
      position: relative;
    }
  }
`;

const Blog = () => {
  return (
    <Blogstyle>
      <div
        className="blog-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerCart})` }}
      >
        <div className="overlay"></div>
        <h3 className="blog-heading heading-page">Blog</h3>
      </div>
    </Blogstyle>
  );
};

export default Blog;
