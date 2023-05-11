import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <title>Example</title>
      <meta name="description" content="description" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta property="og:description" content={'Og description'} />
      <meta property="og:title" content={'og:title'} />
      <meta property="og:type" content={'article'} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:image" content={'./img/og-image.jpg'} key={'./img/og-image.jpg'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={'Title'} />
      <meta name="twitter:description" content={'description'} />
      <meta name="twitter:image" content={'./img/og-image.jpg'} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
  );
}
