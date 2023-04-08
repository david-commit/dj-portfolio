import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function Events() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [
    '/posters/dj-p-k-event-citam.jpg',
    '/posters/dj-p-k-event-254-live.jpg',
    '/posters/dj-p-k-heaven-bound-poster.jpg',
    '/posters/dj-p-k-nrg-show-poster.jpg',
    '/posters/dj-p-kfrma-nomenee.jpg',
    '/posters/dj-p-k-xtreem-awards-poster.jpg',
    '/posters/dj-p-k-marantha-awards-poster.jpg',
  ];

  return (
    <Slider {...settings} style={{ width: '85%', margin: 'auto' }}>
      {images.map((img, i) => {
        return (
          <div>
            <Image src={img} height={100} width={100} alt={`Event poster ${i + 1}`} />
          </div>
        );
      })}
    </Slider>
  );
}
