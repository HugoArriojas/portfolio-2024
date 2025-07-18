import '../styles/globals.scss';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import Head from 'next/head';

//router
import { useRouter } from 'next/router';

//analytics
import Script from 'next/script';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import { Analytics } from '@vercel/analytics/next';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url) gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name='theme-color'
          content='#261b4b'
        />
        <title>Hugo Arriojas - Software Engineer</title>
        <link
          href='/favicon.png'
          rel='icon'
          sizes='32x32'
          type='image/x-icon'
        />

        <meta
          name='description'
          content="Software engineer with expertise in web development and e-commerce solutions, specializing in creating scalable, acessible, and efficient web applications. Skilled in various programming languages, frameworks, and tools, I am committed to delivering high-quality solutions that meet user needs and business objectives. Let's connect and build the future together!"
        />
        <meta
          name='keyword'
          content='portfolio, javascript, software, developer'
        />
      </Head>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-E7CDSP4N58'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E7CDSP4N58', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <link
        rel='icon'
        href='/initialsSquare.png'
        type='image/x-icon'
        sizes='any'
      ></link>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.route}
            className='h-full'
          >
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
