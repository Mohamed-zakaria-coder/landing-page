import React from 'react';
import '../../styles/footer.css'
import rubyImg  from '../../images/RubyCosmo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="ruby-parent">
            <img src={rubyImg} alt="ruby-logo" className='ruby-logo'/>
            <h4>RubyCosmo</h4>
            </div>
            <p>By:M.Zakaria</p>
            <p>Copyrights ©️ 2022 </p>
        </div>
    );
}

export default Footer;
