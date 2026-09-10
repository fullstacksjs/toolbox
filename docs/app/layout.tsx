import type { Metadata } from 'next';
import Image from 'next/image';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';

import './globals.css';

const title = 'FullstacksJS - Toolbox';
const description =
  'A zero-dependency 📦 tree-shakable🌲 collection of missing JavaScript utilities.';
const ogImage = {
  url: 'https://toolbox.fullstacksjs.com/thumbnail.png',
  alt: title,
};

const repo = 'https://github.com/fullstacksjs/toolbox';
const proposalLink = `${repo}/issues/new?assignees=&labels=proposal&projects=&template=proposal.yml&title=%5BProposal%5D%3A+`;

export const metadata: Metadata = {
  metadataBase: new URL('https://toolbox.fullstacksjs.com'),
  title: { default: title, template: '%s - Toolbox' },
  description,
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: { title, description, images: ogImage },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ogImage,
  },
};

const navbar = (
  <Navbar
    logo={
      <div className="flex gap-1 items-center">
        <Image src="/logo.svg" alt="Logo" width={60} height={60} />
        <span>Toolbox</span>
      </div>
    }
    projectLink={repo}
  />
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.JSX.Element> {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 31 }} backgroundColor={{ dark: 'rgb(35,37,46)' }} />
      <body>
        <Layout
          darkMode={false}
          nextThemes={{ defaultTheme: 'dark', forcedTheme: 'dark' }}
          navbar={navbar}
          footer={<Footer>MIT 2023 Fullstacksjs Toolbox</Footer>}
          docsRepositoryBase={`${repo}/blob/main/docs`}
          feedback={{ content: 'Suggest a new function', link: proposalLink }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
