import { Button } from "components/button";
import { useAuthContext } from "components/context/Auth-Context";
import { auth } from "Firebase-app/Firebase-config";
import { signOut } from "firebase/auth";
import React from "react";
import {
  FaLocationArrow,
  FaMailBulk,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import "./Header.scss";

const HeaderContact = () => {
  const { userInfo } = useAuthContext();
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header className="header">
      <div className="header-contact">
        <div className="container">
          <div className="header-info">
            <div className="header-info--add">
              <span className="header-info--icon">
                <FaLocationArrow />
              </span>
              <span>175 5th Ave Premium Area, New York</span>
            </div>
            <div className="header-info--gmail">
              <span className="header-info--icon">
                <FaMailBulk />
              </span>
              <span>hh@gmail.com</span>
            </div>
          </div>
          <div className="header-auth">
            {!userInfo ? (
              <Button type="submit" className={"button-sign"} to="/sign-in">
                Sign In
              </Button>
            ) : (
              <div>
                <span>Welcome back!! </span>
                <strong>{userInfo?.displayName}</strong>
              </div>
            )}
            <div>
              <Button onClick={handleSignOut} className={"button-sign"}>
                Sign out
              </Button>
            </div>
            <div className="header-social">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <FaPinterestP />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderContact;
