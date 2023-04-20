import React, {useState, useEffect} from 'react';
import Navbar from '../components/shared/Navbar';
import ProductCard from '../components/home/ProductCard';
import InfoCard from '../components/home/InfoCard';
import '../styles/home/home.css'
import Features from '../components/home/Features';
import HomeCarousel from '../components/home/Carousel';
import Footer from '../components/shared/Footer';
import {GoVerified} from 'react-icons/go'
const Home = () => {
  const [success,
    setSuccess] = useState(false)
  const [productsCount,
    setProductsCount] = useState()
  function showSuccess() {
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }
  useEffect(() => {
    setProductsCount(JSON.parse(localStorage.getItem('products')) != null && JSON.parse(localStorage.getItem('products')).length)

  }, [])
  function refreshCart() {
    setProductsCount(JSON.parse(localStorage.getItem('products')) != null && JSON.parse(localStorage.getItem('products')).length)

  }
  const products = [
    {
      name: "Hair Lotion",
      headline: "Hair Lotion For Your Hair Health",
      img: require ("../images/hair-lotion.png"),
      description: "The combination of our constituents is refreshing and natural. Rich, rich vitami" +
        "ns, moisturizers, and protective substances hydrates and strengthens hair when a" +
        "pplying. Hair feels fresh, shiney and soft after applying. The best solution for" +
        " your damaged, dry, or weak hair..",
      sizes: [
        {
          size: "M",
          price: 80,
          oldPrice: 110
        }, {
          size: "L",
          price: 120,
          oldPrice: 150
        }
      ]
    }
  ]

  return (
    <div className='home'>
      <Navbar productsCount={productsCount} showSuccess={showSuccess}/>
      <div className="cover-container">
        <div className="cover-background"></div>
        <div className='cover'>
          <div className='prod-description'>
            <h1>Best Natural Based Products For Your Daily Routine.</h1>
            <p>Get the best combination of hair products for, get the best results
              instantly and make your hair shine.
            </p>
          </div>
          <div className='cover-img'>
            <img
              src="https://cdn.shopify.com/s/files/1/0599/2441/4645/products/lotion-bottle-front-spray-right_800x.png?v=1662465511"
              alt=""/>

          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      {products.map(product => <ProductCard product={product} refreshCart={refreshCart}/>)}
      <br/><br/>
      <Features/>
      <HomeCarousel/>
      <InfoCard/>
       {success && <div className='success-message'>
        <GoVerified size={35} style={{
          color: 'green'
        }}/>
        <p>Successfully Ordered</p>
      </div>
}
      <Footer/>

    </div>
  );
}

export default Home;
