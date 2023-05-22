import '@/styles/globals.css';
import NavBar from '@/components/NavBar';
import '../styles/NavBar.css';
import '../styles/Home.css';
import '../styles/Footer.css';
import Footer from '@/components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Open_Sans } from 'next/font/google'
import '../styles/Hire.css';
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <div className={openSans.className}>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
