import React from 'react';
import Slider from 'react-slick';

function Arrows(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#ccc',
        borderRadius: '50%',
        border: 'none',
        height: '20px',
        width: '20px',
        scale: '1.3',
      }}
      onClick={onClick}
    />
  );
}

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
    nextArrow: <Arrows />,
    prevArrow: <Arrows />,
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
          slidesToScroll: 2,
        },
      },
    ],
  };

  const images = [
    '/posters/dj-p-k-event-citam.jpg',
    '/posters/dj-p-kfrma-nomenee.jpg',
    '/posters/dj-p-k-heaven-bound-poster.jpg',
    '/posters/dj-p-k-nrg-show-poster.jpg',
    '/posters/dj-p-k-poster-kubamba.jpg',
    '/posters/dj-p-k-poster-poster-kubash-ngong.jpg',
    '/posters/dj-p-k-poster-royal-knights.jpg',
    '/posters/dj-p-k-groove-awards-better-poster.jpg',
    '/posters/dj-p-k-event-254-live.jpg',
    '/posters/dj-p-k-xtreem-awards-poster.jpg',
    '/posters/dj-p-k-marantha-awards-poster.jpg',
    '/posters/dj-p-k-album-launch.jpg',
    '/posters/dj-p-k-poster-kubamba-sports.jpg',
    '/posters/dj-p-k-poster-kubamba-d.jpg',
    '/posters/dj-p-k-truth-fm-poster.jpg',
  ];

  return (
    <Slider {...settings} className='home-events-slider'>
      {images.map((img, i) => {
        return <img src={img} key={img} alt={`Event poster ${i + 1}`} />;
      })}
    </Slider>
  );
}
