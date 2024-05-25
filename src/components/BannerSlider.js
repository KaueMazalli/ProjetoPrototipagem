// BannerSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Define o intervalo de tempo entre as transições de slide
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="banner.png" alt="Banner 1" style={{ width: '100%' }} />
      </div>
      <div>
        <img src="banner1.png" alt="Banner 2" style={{ width: '100%' }} />
      </div>
      <div>
        <img src="banner2.png" alt="Banner 3" style={{ width: '100%' }} />
      </div>
    </Slider>
  );
};

export default BannerSlider;
