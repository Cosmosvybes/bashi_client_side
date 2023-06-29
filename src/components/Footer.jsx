import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaMailBulk,
  FaDiscord,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();
  const twitterLink = () => {
    window.open(
      "https://twitter.com/bashi_token/status/1671137121145442304?s=46"
    );
  };
  const instaLink = () => {
    window.open("https://instagram.com/bashi_token");
  };
  const telegramLink = () => {
    window.open("https://t.me/+GEE7e2N50dkyZWM0");
  };
  return (
    <>
      <div className="footer-details">
        <div>
          <ul>
            <span
              style={{
                color: "rgba(89, 205, 153, 0.682)",
                textDecoration: "underline",
              }}
            >
              {" "}
              Social media{" "}
            </span>

            <li>
              {" "}
              <Link
                to="https://twitter.com/bashi_token/status/1671137121145442304?s=46"
                className="link"
                onClick={twitterLink}
              >
                {" "}
                <FaTwitter   onClick={twitterLink} /> Twitter
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                to="https://instagram.com/bashi_token"
                className="link"
                onClick={instaLink}
              >
                {" "}
                <FaInstagram  onClick={instaLink}/> Instagram
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"https://discord.com"} className="link">
                {" "}
                <FaDiscord /> Discord{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <span
              style={{
                color: "rgba(89, 205, 153, 0.682)",
                textDecoration: "underline",
              }}
            >
              {" "}
              Customer support{" "}
            </span>

            <li>
              {" "}
              <Link
                onClick={telegramLink}
                className="link"
                to="https://t.me/+GEE7e2N50dkyZWM0"
              >
                {" "}
                <FaTelegram  onClick={telegramLink} /> Telegram
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className="link" to="https://sarubashi.com">
                {" "}
                <FaMailBulk /> support@sarubashi.com
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          background: "black",
          textAlign: "center",
          position: "relative",
          marginTop: "-15px",
        }}
      >
        <p>
          Sarubashi is a powerful and customizable token for initiating seamless
          transaction. With advanced features and customizable token economics,
          and ethereum cryptocurrency support and secure storage.
        </p>
        <span
          style={{ color: "rgba(89, 205, 153, 0.682)", textAlign: "center" }}
        >
          {" "}
          Sarubashi &copy; All rights reserved {year}{" "}
        </span>{" "}
      </div>
    </>
  );
};

export default Footer;
