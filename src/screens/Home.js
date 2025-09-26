import { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import ProductCard from "../components/home/ProductCard";
import Whyus from "../components/home/Whyus";
import "../styles/home/home.css";
import Features from "../components/home/Features";
import HomeCarousel from "../components/home/Carousel";
import FAQ from "../components/home/FAQ";
import Footer from "../components/shared/Footer";
import { GoVerified } from "react-icons/go";
import Hero from "../components/home/Hero";
import Cover from "../components/home/Cover";
const Home = () => {
  const [success, setSuccess] = useState(false);
  const [productsCount, setProductsCount] = useState();
  function showSuccess() {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }
  const [upVal, setUpVal] = useState();
  useEffect(() => {
    setProductsCount(
      JSON.parse(localStorage.getItem("products")) != null &&
        JSON.parse(localStorage.getItem("products")).length
    );
  }, [upVal]);
  function refreshCart() {
    setProductsCount(
      JSON.parse(localStorage.getItem("products")) != null &&
        JSON.parse(localStorage.getItem("products")).length
    );
  }
  const products = [
    {
      name: "Hair Lotion",
      headline: "Hair Lotion For Your Hair Health",
      img: require("../images/hair-lotion.png"),
      description:
        "The combination of our constituents is refreshing and natural. Rich, rich vitami" +
        "ns, moisturizers, and protective substances hydrates and strengthens hair when a" +
        "pplying. Hair feels fresh, shiney and soft after applying. The best solution for" +
        " your damaged, dry, or weak hair..",
      sizes: [
        {
          size: "M",
          price: 80,
          oldPrice: 110,
        },
        {
          size: "L",
          price: 120,
          oldPrice: 150,
        },
      ],
    },
  ];

  return (
    <div className="home">
      <Navbar
        productsCount={productsCount}
        showSuccess={showSuccess}
        setUpVal={setUpVal}
        upVal={upVal}
      />
      <Cover />
      {products.map((product) => (
        <ProductCard product={product} refreshCart={refreshCart} />
      ))}
      <br />
      <br />
      <Features />
      <HomeCarousel />
      <Whyus />
      {success && (
        <div className="success-message">
          <GoVerified
            size={35}
            style={{
              color: "green",
            }}
          />
          <p>Successfully Ordered</p>
        </div>
      )}
      <Hero/>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
