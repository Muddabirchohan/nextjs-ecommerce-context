import React, { Component } from "react";
import Slider from "react-slick";

const SliderCustom = () =>   {
 
    const settings = {
      // dots: true, //display slider dots
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,

    };

    return (
      <div className="slider-base">
        <Slider {...settings}>
          <div>
            <h3>Sales on Article NO 1 -43 onwards</h3>
          </div>
  
          <div>
          <h3>80% off on all kids products </h3>
          </div>

          <div>
          <h3>Men And Women Wardrobe</h3>
          </div>
        </Slider>
      </div>
    );
  
}

export default SliderCustom