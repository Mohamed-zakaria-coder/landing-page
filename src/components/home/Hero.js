import { Sparkles } from "lucide-react";
import "../../styles/home/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Shine Starts Here</h1>
        <p className="hero-subtitle">
          Premium hair care products designed to nourish, protect, and bring out your natural beauty.
        </p>
        <button className="hero-button">
          Shop Now <Sparkles size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
