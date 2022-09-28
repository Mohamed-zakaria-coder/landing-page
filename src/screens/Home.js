import React from 'react';
import Navbar from '../components/shared/Navbar';
import ProductCard from '../components/home/ProductCard';
import InfoCard from '../components/home/InfoCard';
import '../styles/home/home.css'
import Features from '../components/home/Features';
import HomeCarousel from '../components/home/Carousel';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="cover-container">
                <div className="cover-background"></div>
            <div className='cover'>
                <h1>Best Products For Your Daily Hair Routine</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat voluptatum quibusdam vitae. Totam nobis molestias quia necessitatibus, illum inventore officia quae. Provident, dolore eligendi enim perspiciatis adipisci non repellat culpa?</p>
                <div className='cover-img'>
                    <img src="https://cdn.shopify.com/s/files/1/0599/2441/4645/products/lotion-bottle-front-spray-right_800x.png?v=1662465511" alt="" />

                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <ProductCard/>
            <br /><br />
            <Features/>
            <InfoCard/>
            <HomeCarousel/>
            
        </div>
    );
}

export default Home;
