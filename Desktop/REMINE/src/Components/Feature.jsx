import React from 'react';
import FeatureBox from './FeatureBox';
import feature_1 from '../images/feature_1.png';
import feature_2 from '../images/feature_2.png';


function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={feature_1} title='E Waste Recycling'/>
            <FeatureBox image={feature_2} title='Lithium Ion Batteries'/>

        </div>
    </div>
  )
}

export default Feature