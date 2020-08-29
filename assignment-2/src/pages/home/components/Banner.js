import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import '../../../style/slider.css';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';

const Banner = (props) => {
  return (
      <>
      <div>
      <AwesomeSlider
        animation="fallAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
      >
          <div object="true" data-src='/img/banner1.jpg' />
          <div object="true" data-src='/img/banner2.jpg' />
          <div object="true" data-src='/img/banner3.jpg' />
          <div object="true" data-src='/img/banner4.jpg' />
        </AwesomeSlider>
      </div>
      </>
  )
};
export default Banner;