import Head from 'next/head';
import Script from 'next/script';
import "../public/static/assets/css/style1-default.min.css";
// import "../public/static/assets/css/style1-mintgreen.min.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Navbar from '@/components/LandingHome/Navbar/Navbar';
import Footer from '@/components/LandingHome/Footer/Footer';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LandingZ</title>
        <meta name="description" content="simple description for your site" />
        <meta name="keywords" content="keyword1, keyword2" />
        <meta name="author" content="Jobz" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@yourtwitterusername" />
        <meta name="twitter:creator" content="@yourtwitterusername" />
        <meta name="twitter:url" content="http://yourdomain.com" />
        <meta name="twitter:title" content="Your home page title, max 140 char" />
        <meta name="twitter:description" content="Your site description, maximum 140 char " />
        <meta name="twitter:image" content="/static/assets/img/twittercardimg/twittercard-144-144.png" />

        {/* Facebook Open Graph Meta Tags */}
        <meta property="og:title" content="Your home page title" />
        <meta property="og:url" content="http://yourdomain.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Your site name here" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/assets/img/opengraph/fbphoto-476-476.png" />

        {/* Desktop Bookmark and Icons */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/static/assets/img/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" type="image/x-icon" href="/static/assets/img/favicon/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/static/assets/img/favicon/favicon.ico" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/static/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/assets/vendor/fontawesome/css/font-awesome.min.css" />
        <link id="cbx-style" data-layout="1" rel="stylesheet" href="/static/assets/css/style1-default.min.css" media="all" />
        <link rel="stylesheet" href="/static/assets/vendor/lity/lity.min.css" media="all" />
        <link rel="stylesheet" href="/static/assets/vendor/owl-carousel/assets/owl.carousel.min.css" media="all" />
        <link rel="stylesheet" href="/static/assets/vendor/owl-carousel/assets/owl.theme.default.min.css" media="all" />

        {/* Google Font */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300,800%7CExo:300,400,500,600,700,900" rel="stylesheet" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/static/assets/vendor/owl-carousel/owl.carousel.min.js" strategy="beforeInteractive" />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;