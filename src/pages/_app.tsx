import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/GlobalStyles';
import Head from 'next/head';
import { UserProvider } from '../context/UserContext';
import { FlashMessageCard } from '../components/FlashMessageCard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return(
    <>
      <GlobalStyles />
      <Head>
        <title>QuandoLança</title>
      </Head>
      <FlashMessageCard />
      <UserProvider>
        {asPath !== '/login' && asPath !== '/register' && <Header/>}
        <Component {...pageProps} />
        {asPath !== '/login' && asPath !== '/register' && <Footer/>}
      </UserProvider>
    </>
  );
}
