import React from 'react';
import Slider from 'react-slick';

export default function Events() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    '/posters/dj-p-k-event-citam.jpg',
    '/posters/dj-p-kfrma-nomenee.jpg',
    '/posters/dj-p-k-heaven-bound-poster.jpg',
    '/posters/dj-p-k-nrg-show-poster.jpg',
    '/posters/dj-p-k-event-254-live.jpg',
    '/posters/dj-p-k-xtreem-awards-poster.jpg',
    '/posters/dj-p-k-marantha-awards-poster.jpg',
  ];

  return (
    <Slider {...settings} className='home-events-slider'>
      {images.map((img, i) => {
        return (
          <img
            src={img}
            alt={`Event poster ${i + 1}`}
          />
        );
      })}
    </Slider>
  );
}
