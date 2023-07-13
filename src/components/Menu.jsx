
import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaList,
  FaTelegram,
  FaTwitter,
  FaTimes,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/mobilelogo.jpg";

const Menu = () => {
  const [switch_, setSwitch] = useState(false);
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
      {!switch_ && (
        <div className="bars_">
          <button style={{ border: "unset", backgroundColor: "black" }}>
            {" "}
            <img
              src={logo}
              alt="logo"
              width={"120px"}
              height={"60px"}
              style={{ position: "relative" }}
              onClick={()=>{window.location.href="sarubashi.com"}}
            />{" "}
          </button>
          <FaList
            style={{
              float: "right",
              fontSize: "20px",
              color: "rgba(89, 205, 153, 0.682)",
              marginTop: "5px",
              marginRight: "10px",
            }}
            onClick={() => {
              setSwitch(!switch_);
            }}
          />
        </div>
      )}

      <div className={switch_ ? "overlay_" : "overlay"}>
        <nav className="content">
          <Link className="link" to={"roadmap"} smooth={true} duration={800}>
            {" "}
            Roadmap
          </Link>
          <Link className="link" to={"referral"} smooth={true} duration={800}>
            {" "}
            Referral{" "}
          </Link>
          <Link className="link" to={"why-us"} smooth={true} duration={800}>
            {" "}
            Why us{" "}
          </Link>
          <Link className="link" to={"faqs"} smooth={true} duration={800}>
            {" "}
            FAQs{" "}
          </Link>
          <FaTimes
            onClick={() => {
              setSwitch(!switch_);
            }}
            style={{ color: "red", fontSize: "18px", marginTop: "3px" }}
          />
        </nav>
      </div>

      <div className="_container">
        <img
          src={logo}
          alt="logo"
          width={"110px"}
          height={"40px"}
          style={{
            position: "relative",
            marginTop: "5px",
            borderRadius: "3px",
          }}
        />

        <nav className="bars">
          <Link className="link" to={"roadmap"} smooth={true} duration={800}>
            {" "}
            Roadmap{" "}
          </Link>
          <Link className="link" to={"referral"} smooth={true} duration={800}>
            {" "}
            Referral{" "}
          </Link>
          <Link className="link" to={"why-us"} smooth={true} duration={800}>
            {" "}
            Why us{" "}
          </Link>
          <Link className="link" to={"faqs"} smooth={true} duration={800}>
            {" "}
            FAQs
          </Link>
        </nav>

        <div className="bars">
          <Link
            onClick={instaLink}
            className="link"
            to={"https://instagram.com/bashi_token"}
            smooth={true}
            duration={800}
          >
            {" "}
            <FaInstagram onClick={instaLink} />{" "}
          </Link>
          <Link
            onClick={twitterLink}
            className="link"
            to={
              "https://twitter.com/bashi_token/status/1671137121145442304?s=46"
            }
            smooth={true}
            duration={800}
          >
            {" "}
            <FaTwitter onClick={twitterLink} />
          </Link>
          <Link
            onClick={telegramLink}
            className="link"
            to={"https://t.me/+GEE7e2N50dkyZWM0"}
            smooth={true}
            duration={800}
          >
            {" "}
            <FaTelegram onClick={telegramLink} />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
