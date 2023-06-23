import Image from 'next/image';

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  logo: <Image src="/logo.svg" alt="Logo" width={100} height={100} />,
  project: {
    link: 'https://github.com/fullstacksjs/toolbox',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Toolbox',
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
