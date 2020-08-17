import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import '../style/slider.css';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';

function Banner() { 
  return (
      <>
      <div>
      <AwesomeSlider
        animation="fallAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
      >
          <div data-src={ require('../img/banner1.jpg') } />
          <div data-src={ require('../img/banner2.jpg') } />
          <div data-src={ require('../img/banner3.jpg') } />
          <div data-src={ require('../img/banner4.jpg') } />
        </AwesomeSlider>
      </div>
      </>
  )
};
export default Banner;