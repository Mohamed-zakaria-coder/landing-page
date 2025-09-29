import React from "react";
import "../../styles/home/whyus.css";
import lotionImg from "../../images/hair-lotion.png";
import { FaLeaf, FaUserMd, FaThumbsUp } from "react-icons/fa";

const Whyus = () => {
  return (
    <section className="whyus" id="whyus">
      <div className="whyus-img">
        <img src={lotionImg} alt="Hair Lotion" />
      </div>
      <div className="whyus-info">
        <h3>Why Choose Us?</h3>
        <p className="whyus-subtitle">
          We combine nature and science to create products that truly care for you.
        </p>
        <ul>
          <li><FaLeaf /> 100% Natural Ingredients</li>
          <li><FaUserMd /> Backed by Medical Knowledge</li>
          <li><FaThumbsUp /> Trusted & Safe for Daily Use</li>
        </ul>
      </div>
    </section>
  );
};

export default Whyus;
