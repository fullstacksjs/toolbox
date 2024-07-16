import Image from 'next/image';
import { joinPaths } from '@fullstacksjs/toolbox';

const title = 'FullstacksJS - Toolbox';
const description = 'A zero-dependency 📦 tree-shakable🌲 collection of missing JavaScript utilities.';
const ogImage = {
  url: 'https://toolbox.fullstacksjs.com/thumbnail.png',
  alt: 'FullstacksJS - Toolbox',
};

const repo = 'https://github.com/fullstacksjs/toolbox';

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
    link: repo,
  },
  head: (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.url} />
      <meta property="og:image:alt" content={ogImage.alt} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.url} />
      <meta name="twitter:card" content="summary_large_image" />
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
  feedback: {
    content: 'Suggest a new function',
    useLink() {
      return 'https://github.com/fullstacksjs/toolbox/issues/new?assignees=&labels=proposal&projects=&template=proposal.yml&title=%5BProposal%5D%3A+';
    },
  },
  editLink: {
    component: ({ filePath, children, className }) => {
      return (
        <a
          href={joinPaths(repo, 'blob/main/docs', filePath)}
          className={className}
        >
          {children}
        </a>
      );
    },
  },
};

export default themeConfig;
