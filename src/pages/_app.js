import '@/styles/globals.css';
import Header from '@/components/Header';
import '../styles/Header.css';
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <div className={openSans.className}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
