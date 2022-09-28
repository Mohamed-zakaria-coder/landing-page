import React from 'react';

const FeatureCard = ({icon, title, description, iconClass}) => {
    return (
        <div className={`feature-card ${iconClass}`}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureCard;
