import React, { useState } from 'react';
import logo from '../images/PRINCE-KIM-LOGO.png';
import Image from 'next/image';
import Link from 'next/link';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import the icons you need
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <header>
      <section>
        <Link href='/'>
          <Image src={logo} alt='Dj Prince Kim logo' priority />
        </Link>
        <div className='nav-toggle'>
          {showLinks ? (
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setShowLinks(!showLinks)}
              style={{ fontSize: '1.6rem', color: 'white' }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setShowLinks(!showLinks)}
              style={{ fontSize: '1.5rem', color: 'white' }}
            />
          )}
        </div>
        <nav id={showLinks ? 'hidden' : ''} onClick={() => setShowLinks(false)}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About Me</Link>
          <Link href='/services'>Services</Link>
          <Link href='/mixes'>Mixes</Link>
          <Link href='/contacts'>Contacts</Link>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
