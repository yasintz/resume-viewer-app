import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.location = '/api/en';
  }, []);
  return null;
}

export default MyApp;
