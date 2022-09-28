import React from 'react';
import FeatureCard from './FeatureCard';
import {GiHealthPotion} from 'react-icons/gi';
import {BsShieldCheck} from 'react-icons/bs';
import {MdLightMode} from 'react-icons/md';
import '../../styles/home/features.css'
const Features = () => {
    return (
        <div className='features'>
            <h3>Explore Amazing Features</h3>
            <p className='headline'>Bailo Smart Watch Has Lots Of Excellent Features</p>
            <FeatureCard icon = {<GiHealthPotion style={{color: 'red'}}/>} title={"Name"} description={"lorem Ipsum"} iconClass = {"first"}/>
            <FeatureCard icon = {<BsShieldCheck style={{color: 'green'}}/>} title={"Name"} description={"lorem Ipsum"} iconClass = {"second"}/>
            <FeatureCard icon = {<MdLightMode style={{color: '#13c3c9'}}/>} title={"Name"} description={"lorem Ipsum"} iconClass = {"third"}/>
        </div>
    );
}

export default Features;
