import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function Home() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const colors = ['#0088FE', '#00C49F', '#FFBB28'];
  const sliderImages = [
    '/slider-images/dj-p-k-nrg-radio.jpg',
    '/slider-images/dj-p-k-dark-home-banner.jpg',
    '/slider-images/dj-p-k-kubash-event.jpg',
    '/slider-images/dj-p-k-garden.jpg',
  ];
  const delay = 5000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <Head>
        <title>Home - Dj Prince Kym</title>
        <meta
          name='description'
          content='Dj Prince Kym is a widely known gospel deejay and videographer'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='home-main-container'>
        <div className='home-slider'>
          <div className='slideshow'>
            <div
              className='slideshowSlider'
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {sliderImages.map((image, index) => (
                <img
                  className='slide'
                  key={index}
                  src={image}
                  alt='Slider Image'
                  // height={100}
                  // width={100}
                />
              ))}
            </div>

            <div className='slideshowDots'>
              {sliderImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? ' active' : ''}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
