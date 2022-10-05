import React from 'react';

const FeatureCard = ({icon, title, description, iconClass, color}) => {
    return (
        <div className={`feature-card ${iconClass}`}>
            {icon}
            <h3 style={{color: color}}>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureCard;
