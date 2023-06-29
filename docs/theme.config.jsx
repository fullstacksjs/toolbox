import Image from 'next/image';

const title = 'We Grow together';
const description = 'We Grow together';
const ogImage = {
  url: 'https://github.com/fullstacksjs/toolbox/blob/main/assets/thumbnail.png',
  alt: 'FullstacksJS - Toolbox',
};

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  nextThemes: {
    defaultTheme: 'dark',
  },
  darkMode: false,
  logo: (
    <div className="flex gap-1 items-center">
      <Image src="/logo.svg" alt="Logo" width={60} height={60} />
      <h1>Toolbox</h1>
    </div>
  ),
  project: {
    link: 'https://github.com/fullstacksjs/toolbox',
  },
  head: (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),
  primaryHue: 31,
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Toolbox',
      themeColor: '#F39F47',
      openGraph: {
        title,
        description,
        images: ogImage,
      },
      twitter: {
        title,
        description,
        images: ogImage,
        card: 'summary_large_image',
      },
    };
  },
  footer: {
    text: <span>MIT 2023 Fullstacksjs Toolbox</span>,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};

export default themeConfig;
