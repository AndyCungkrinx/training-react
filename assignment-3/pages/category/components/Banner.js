import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useQuery, gql } from "@apollo/client";
import {withApollo} from '../../../lib/apollo';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const BANNER_LIST = gql`
  query{
    getHomepageSlider{
        slider_id
        images{
          image_id
          image_url
        }
    }
  }
`;

const Banner = (props,ctx) => {
    const response = useQuery(BANNER_LIST, []);
    const { loading, error, data } = response;
    if (loading) {
      return <div>loading...</div>;
    }  if (error) {
      return <div>error...</div>;
    } 
    //console.log(data);
    const slider = data.getHomepageSlider.images;
    //console.log(slider);
    //console.log(image);
    
    return (
        <>
        <AutoplaySlider
            play={true}
            mobileTouch={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={5000}
        >
          {slider.map((images) => {
              return (
              <div key={images.image_id}>
              <img src={images.image_url} style={{resizeMode: 'stretch', width: '100%'}}/>
              </div>
              );
          })}
        </AutoplaySlider>
        </>
    )
  };
  
export default withApollo({ ssr: true })(Banner);