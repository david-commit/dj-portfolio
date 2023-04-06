import React from 'react';
import logo from '../images/PRINCE-KIM-LOGO.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <section>
        <Link href='/'>
          <Image src={logo} alt='' priority />
        </Link>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/about'>About Me</Link>
          <Link href='/services'>Services</Link>
          <Link href='/hire'>Hire</Link>
          <Link href='/mixes'>Mixes</Link>
          <Link href='/contacts'>Contacts</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
