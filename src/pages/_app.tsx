import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/GlobalStyles';
import { useState } from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <GlobalStyles />
      <Head>
        <title>QuandoLança</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
