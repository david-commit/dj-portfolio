import '../styles/NavBar.css';
import { useState } from 'react';
import logo from '../images/PRINCE-KIM-LOGO.png';
import Image from 'next/image';
import Link from 'next/link';

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
            <p
              onClick={() => setShowLinks(!showLinks)}
              style={{ fontSize: '1.6rem', color: 'white' }}
            >Show</p>
          ) : (
            <p
              onClick={() => setShowLinks(!showLinks)}
              style={{ fontSize: '1.5rem', color: 'white' }}
            >Hide</p>
          )}
        </div>
        <nav id={showLinks ? 'hidden' : ''} onClick={() => setShowLinks(false)}>
          <Link href='/'>Home</Link>
          <Link href='/services'>Services</Link>
          <Link href='/hire'>Hire</Link>
          <Link href='/mixes'>Mixes</Link>
          <Link href='/contacts'>Contacts</Link>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
