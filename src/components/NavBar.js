import React, { useState } from 'react';
import logo from '../images/PRINCE-KIM-LOGO.png';
import Image from 'next/image';
import Link from 'next/link';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <header>
      <section>
        <Link href='/'>
          <Image src={logo} alt='Dj Prince Kim logo' priority />
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

export default NavBar;
