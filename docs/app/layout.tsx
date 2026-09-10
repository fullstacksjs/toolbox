import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';

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
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--default-font-family',
});
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
      <div className="flex gap-2 items-center">
        <img alt="Logo" className="h-8" src="/logo.svg" />
        <span className="font-semibold translate-y-1">Toolbox</span>
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
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: 'rgb(35,37,46)' }} color={{ hue: 31 }} />
      <body className={inter.variable}>
        <Layout
          editLink={null}
          feedback={{ content: 'Suggest a new function', link: proposalLink }}
          navbar={navbar}
          nextThemes={{ defaultTheme: 'dark', forcedTheme: 'dark' }}
          pageMap={await getPageMap()}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          darkMode={false}
          docsRepositoryBase={`${repo}/blob/main/docs`}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
