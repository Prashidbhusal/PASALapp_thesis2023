import React from "react";
import "./Footer.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CategoryIcon from "@mui/icons-material/Category";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerContainer">
        <div className="leftFooter">
          <h4 className="footerHeading">Quick Links</h4>
          <Link className="quickLink" to="/about">
            <AttractionsIcon className="footerIcon" />
            About us
          </Link>
          <Link className="quickLink" to="/contact">
            <AddIcCallIcon className="footerIcon" />
            Contact us
          </Link>
          <Link className="quickLink" to="/products">
            <CategoryIcon className="footerIcon" />
            Products
          </Link>
          <Link className="quickLink" to="/login">
            <ExitToAppIcon className="footerIcon" />
            Sign In
          </Link>
        </div>

        <div className="midFooter">
          <h1>Pasal</h1>
        {/* <img src="images/logo.png" alt="Pasal Logo" /> */}
  <p>"Discover Ethnic All Products"</p>
  <p className="copy">Copyrights 2023 &copy; Pasal</p>
</div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a className="socialLink" href="https://twitter.com/">
            <TwitterIcon className="twitterSvgIcon" />
            Twitter
          </a>
          <a className="socialLink" href="http://youtube.com">
            <YouTubeIcon className="youtubeSvgIcon" />
            Youtube
          </a>
          <a className="socialLink" href="http://instagram.com">
            <InstagramIcon className="instagramSvgIcon" />
            Instagram
          </a>
          <a className="socialLink" href="http://facebook.com">
            <FacebookIcon className="facebookSvgIcon" />
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
