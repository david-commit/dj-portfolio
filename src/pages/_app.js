import '@/styles/globals.css';
import NavBar from '@/components/NavBar';
import '../styles/NavBar.css';
import { Open_Sans } from 'next/font/google'

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
    </div>
  );
}
