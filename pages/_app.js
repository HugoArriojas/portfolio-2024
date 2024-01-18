import '../styles/globals.scss';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

//router
import { useRouter } from 'next/router';

// script
import Script from 'next/script';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WDYNZ86RP2"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WDYNZ86RP2', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <link
        rel="icon"
        href="/initialsSquare.png"
        type="image/x-icon"
        sizes="any"
      ></link>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            className="h-full"
          >
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
