import React from "react";
import styled from "styled-components";
const Socialstyle = styled.div`
  width: 100%;
  max-width: 400px;
  .social-share-icon {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .social-share-text {
    color: white;
    margin-left: 20px;
    font-size: 16px;
  }

  .social-share-item {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .social-share-item.facebook {
    background-color: #3b5999;
  }

  .social-share-item.facebook .social-share-icon {
    color: #3b5999;
  }

  .social-share-item.instagram {
    background-color: #e4405f;
  }

  .social-share-item.instagram .social-share-icon {
    color: #e4405f;
  }

  .social-share-item.twitter {
    background-color: #55acee;
  }

  .social-share-item.twitter .social-share-icon {
    color: #55acee;
  }

  .social-share-item + .social-share-item {
    margin-top: 20px;
  }
`;

const Social = () => {
  return (
    <Socialstyle>
      <button class="social-share-item facebook">
        <i class="fab fa-facebook social-share-icon"></i>
        <span class="social-share-text">Share this post on Facebook</span>
      </button>
      <button class="social-share-item instagram">
        <i class="fab fa-instagram social-share-icon"></i>
        <span class="social-share-text">Share this post on Instagram</span>
      </button>
      <button class="social-share-item twitter">
        <i class="fab fa-twitter social-share-icon"></i>
        <span class="social-share-text">Share this post on Twitter</span>
      </button>
    </Socialstyle>
  );
};

export default Social;
