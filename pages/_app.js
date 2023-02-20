import styles from '../styles/globals.css';
import { AppDataProvider, MOBILE_LIMIT_SIZE } from '../contexts/app-data-context';
import Head from 'next/head';
import Footer from '../components/footer/footer';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { META_DESCRIPTIONS, META_TAGS, META_TITLES } from '../utils/meta-utils';
import TopBar from '../components/menu/top-bar';

function MyApp({ Component, pageProps }) {
  const [isMobile] = useState();
  const { pathname, locale, asPath } = useRouter();
  const { t } = useTranslation('common');
  const [url, setURL] = useState(`https://snaxx.xyz${locale == "EN" ? asPath : ("/" + locale + asPath)}`);

  return (
    <>
      <Head>
        <title>{META_TITLES[pathname]}</title>

        <link rel="alternate" hrefLang={locale.toLowerCase()} href={url} />
        <link rel="canonical" href={url} />
        <meta name="title" content={META_TITLES[pathname]} />
        <meta name="description" content={META_DESCRIPTIONS[pathname]} />
        <meta name="keywords" content={META_TAGS[pathname]} />

        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={META_TITLES[pathname]} />
        <meta property="og:description" content={META_DESCRIPTIONS[pathname]} />
        <meta property="og:image" content={"https://snaxx.xyz/min.jpg"} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="208" />
        <meta property="og:image:secure_url" content="https://snaxx.xyz/min.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={META_TITLES[pathname]} />
        <meta property="twitter:description" content={META_DESCRIPTIONS[pathname]} />
        <meta property="twitter:image" content="https://snaxx.xyz/min.jpg" />
        <meta property="twitter:image:src" content="https://snaxx.xyz/min.jpg" />
      </Head>

      <AppDataProvider>
        <TopBar />

        <Component {...pageProps} />

        <Footer />
      </AppDataProvider>
    </>
  );
}

export default MyApp
