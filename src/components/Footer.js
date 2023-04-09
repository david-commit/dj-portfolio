import React from 'react';

const Footer = () => {
  const date = Date.now().toString()
  console.log(date)
  return (
    <footer>
      <div className='footer-container'>
        <section className='footer-section'>&copy; Dj Prince Kim - 2023</section>
      </div>
    </footer>
  );
};

export default Footer;
