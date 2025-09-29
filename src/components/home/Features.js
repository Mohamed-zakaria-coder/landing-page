import React from 'react';
import FeatureCard from './FeatureCard';
import {FaLeaf} from 'react-icons/fa';
import {MdAttachMoney} from 'react-icons/md';
import {BsClockHistory} from 'react-icons/bs';
import '../../styles/home/features.css'
const Features = () => {
  return (
    <div className='features' id='features'>
      <div>
        <h3>Explore Amazing Features</h3>
        <p className='headline'>RubyCosmo Products Have Lots Of Excellent Features</p>
      </div>
      <div className='feature-cards-parent'> <FeatureCard
          icon=
          {<FaLeaf style={{
          color: '#229f22'
          
        }} />
    } 
          title={"Natural"}
          description={"Our Products Are Natural Based So You Can Have The Benefits Of Both Natural And Therapeutic Constituents."}
          iconClass={"first"}
          color= {'#229f22'}
          />
        <FeatureCard
          icon=
          {<BsClockHistory style={{
          color: 'gray'
        }
      } />}
          title={"Fast Results"}
          description={"Save Your Time Searching Trusted Products And Get Best Results In No Time."}
          iconClass={"third"}
          color={'gray'}/>
          <FeatureCard
          icon=
          {<MdAttachMoney style={{
          color: 'rgba(37, 92, 253, 0.85)'
        }
      } />}
          title={"Cost"}
          description={"You Will Get High Quality Products With Reasonable Price."}
          iconClass={"second"}
          color={'rgba(37, 92, 253, 0.85)'}/>
      </div>
    </div>
  );
}

export default Features;
