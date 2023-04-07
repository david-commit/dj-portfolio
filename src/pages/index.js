import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
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
        {/* ========== SLIDER ========== */}
        <div className='home-slider'>
          <div className='slideshow'>
            <div
              className='slideshowSlider'
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {sliderImages.map((image, index) => (
                <Image
                  className='slide'
                  key={index}
                  src={image}
                  alt='Slider Image'
                  height={100}
                  width={100}
                  quality={100}
                  priority
                  unoptimized
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
        {/* ========== SLIDER ========== */}
        {/* ========== HOME - ABOUT ========== */}
        <div className='home-about-container'>
          <div className='home-about-image'>
            <Image
              src='/dj-p-k-nice-studio-potrait.png'
              height={100}
              width={100}
              unoptimized
              style={{ filter: 'drop-shadow(-2px 2px 3px black)' }}
              alt='Dj Prince Kim'
            />
          </div>
          <div className='home-about-text'>
            <h2>Prince Kim the DJ</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur quod tempora nam quasi nihil culpa aliquid magni
              repellat quos dolorum asperiores unde expedita similique officia
              recusandae, veniam quidem minus! Ducimus!
            </p>
            <p className='home-about-additional-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur quod tempora nam quasi nihil culpa aliquid magni
              repellat
            </p>
            <Link href='/contacts'>
              <button>Contact me</button>
            </Link>
          </div>
        </div>
        {/* ========== HOME - ABOUT ========== */}
        <div className='home-friends-full-seperator'>
          <Image
            src='/dj-p-k-kubamba-backdrop.jpg'
            width={100}
            height={100}
            unoptimized
          />
        </div>
        {/* ========== SERVICES ========== */}
        <section className='home-services-main-container'>
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            similique consectetur! Iusto libero quae, labore amet sed
            accusantium natus.
          </p>
          <div className='home-services-container'>
            <div className='home-service'>
              <Image
                src='/dj-p-k-in-event.jpg'
                width={100}
                height={100}
                alt='Dj Prince Kim at event'
                unoptimized
              />
              <section className='home-service-text'>
                <h3>Events DeeJay</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores fugiat in pariatur vero quaerat laboriosam rerum.
                  Pariatur, molestiae vitae libero.
                </p>
              </section>
            </div>
            <div className='home-service'>
              <Image
                src='/dj-p-k-videography.jpg'
                width={100}
                height={100}
                alt='Dj Prince Kim videography'
                unoptimized
              />
              <section className='home-service-text'>
                <h3>Photo & Videography</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores fugiat in pariatur vero quaerat laboriosam rerum.
                  Pariatur, molestiae vitae libero.
                </p>
              </section>
            </div>
            <div className='home-service'>
              <Image
                src='/dj-p-k-kubamba-studio.jpg'
                width={100}
                height={100}
                alt='Dj Prince Kim studio'
                unoptimized
              />
              <section className='home-service-text'>
                <h3>TV, Radio & Corporate</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores fugiat in pariatur vero quaerat laboriosam rerum.
                  Pariatur, molestiae vitae libero.
                </p>
              </section>
            </div>
          </div>
        </section>
        {/* ========== SERVICES ========== */}
      </div>
    </>
  );
}
