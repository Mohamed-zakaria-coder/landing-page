import React from 'react';
import '../../styles/footer.css'
import rubyImg  from '../../images/WhatsApp_Image_2022-09-29_at_1.41.36_AM-removebg-preview.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="ruby-parent">
            <img src={rubyImg} alt="ruby-logo" className='ruby-logo'/>
            <h4>RubyCosmo</h4>
            </div>
            <p>By:M.zakaria</p>
            <p>Copyrights ©️ 2022 </p>
        </div>
    );
}

export default Footer;
