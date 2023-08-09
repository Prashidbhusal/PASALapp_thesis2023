import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";


const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/prashid-bhusal-99380321a/";
  };
  return (
    <div className="aboutContainer">
      <Typography component="h1">About Us</Typography>
      <div className="aboutProfile">
        <Avatar
          style={{ width: "15vmax", height: "15vmax" }}
          
          alt="Founder"
        />
        <h1>Prashid Bhusal</h1>
        <h3>(Head of Pasal)</h3>
        <Button onClick={visitLinkedin} color="primary">
          Visit My Linkedin
        </Button>
        <span>
        Welcome to Pasal, your ultimate destination for a seamless and exceptional online shopping experience. Just like its meaning, Pasal, which translates to "shop" in many languages, encapsulates our commitment to providing you with a virtual marketplace that offers convenience, variety, and top-notch service.
        </span>
        <span>
        As we continue to evolve and grow, we invite you to be a part of our journey. Explore our wide range of products, get to know our dedicated team, and witness firsthand the convenience and excitement of shopping at Pasal. We are not just a platform; we are your digital shopping companion.
        </span>
        <span>
        At Pasal, our mission is to redefine your online shopping experience. We aim to be more than just an e-commerce platform; we want to be your go-to destination for discovering new products, exploring trends, and making purchases with confidence. Our goal is to connect you with a world of possibilities, all within the comfort of your digital space.
        </span>
        <span>
        Thank you for considering Pasal for your online shopping needs. We look forward to serving you and making your shopping experience memorable and enjoyable.
        </span>
      </div>
      <div className="aboutDeatils">
        <div className="inspiration">
          <h4>Our Inspiration</h4>
          <p>
            
          </p>
        </div>
        <div className="philosophy">
          <h4>Who We Are:</h4>
          <p>
          We are more than just a website; we are a team of dedicated individuals who are passionate about simplifying your shopping journey. Our team comprises tech enthusiasts, customer service experts, creative minds, and strategic thinkers, all working together to create an e-commerce platform that mirrors your preferences and needs.
          </p>
        </div>
        <div className="craft">
          <h4>What We Offer:</h4>
          <p>
          At Pasal, we offer a vast array of products that cater to your diverse needs and desires. From fashion and electronics to home essentials and much more, our extensive range of categories ensures that you'll find something that suits your taste. With a user-friendly interface and seamless navigation, shopping with us is not just easy—it's enjoyable.
          </p>
        </div>
        <div className="mission">
          <h4>Our Approach:</h4>
          <p>
          Our approach is centered around you, the customer. We believe in making your experience as delightful as possible. That's why we emphasize the quality of our products, the security of your transactions, and the efficiency of our delivery services. Your satisfaction is our driving force, and we continually strive to exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
