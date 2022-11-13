import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/GlobalStyles';
import Head from 'next/head';
import { UserProvider } from '../context/UserContext';
import { FlashMessageCard } from '../components/FlashMessageCard';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <GlobalStyles />
      <Head>
        <title>QuandoLança</title>
      </Head>
      <FlashMessageCard />
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
