import { useEffect } from 'react'
import 'tailwindcss/tailwind.css';
import _ from 'purekit';
import './styles.css';

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window._ = _;
  }, []);

  return <Component {...pageProps} />;
}
