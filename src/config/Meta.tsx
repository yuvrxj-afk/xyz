import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

const avatarIcon = heroConfig.avatar;

// Base site configuration
export const siteConfig = {
  name: heroConfig.displayName,
  /** Short browser / OG site name */
  title: heroConfig.handle,
  description:
    'Full-stack engineer focused on Web3, onchain products, and AI-assisted tooling.',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '@yuvrxj7',
    github: 'yuvrxj-afk',
    linkedin: 'yuvrajsinghsisodiya',
    email: 'yuvrajsisodiya7302@gmail.com',
  },
  keywords: [
    'portfolio',
    'web3',
    'blockchain',
    'defi',
    'solidity',
    'nextjs',
    'typescript',
    'full-stack',
    heroConfig.handle.toLowerCase(),
    heroConfig.displayName.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: heroConfig.displayName,
    description: `${heroConfig.title} — ${about.description}`,
    keywords: ['portfolio', 'developer', 'full-stack', 'web3', 'typescript'],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  '/contact': {
    title: 'Contact',
    description:
      'Reach out for collaborations, contracts, or product work—form or socials.',
    keywords: ['contact', 'hire', 'collaboration', 'developer'],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
  },

  '/work-experience': {
    title: 'Work',
    description:
      'Professional experience across product engineering, Web3, and full-stack delivery.',
    keywords: ['work experience', 'career', 'software developer'],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  '/projects': {
    title: 'Projects',
    description:
      'Selected builds: protocols, apps, and experiments across Web3 and the web.',
    keywords: ['projects', 'portfolio', 'web development', 'web3'],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  '/blog': {
    title: 'Blog',
    description: 'Notes on engineering, Web3, and shipping useful software.',
    keywords: ['blog', 'engineering', 'web development'],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
  },

  '/resume': {
    title: 'Resume',
    description: `Résumé and CV for ${heroConfig.displayName}—skills, experience, and impact.`,
    keywords: ['resume', 'cv', 'skills'],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  '/gears': {
    title: 'Gears',
    description: 'Hardware and gear I use day to day.',
    keywords: ['setup', 'tools', 'gear'],
    ogImage: '/meta/gears.png',
    twitterCard: 'summary_large_image',
  },

  '/setup': {
    title: 'Setup',
    description: 'Editor, extensions, and environment preferences.',
    keywords: ['vscode', 'cursor', 'development environment'],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
  },

  '/journey': {
    title: 'Journey',
    description: 'Background, milestones, and how I got here.',
    keywords: ['journey', 'career', 'background'],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  '/journey/certificates': {
    title: 'Certificates',
    description: 'Certifications and formal credentials.',
    keywords: ['certificates', 'credentials'],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary',
  },
};

export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);
  const isHome = pathname === '/';

  return {
    metadataBase: new URL(siteConfig.url),
    title: isHome
      ? {
          default: heroConfig.displayName,
          template: `%s · ${heroConfig.handle}`,
        }
      : pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    icons: {
      icon: [{ url: avatarIcon, type: 'image/png' }],
      apple: [{ url: avatarIcon, type: 'image/png', sizes: '180x180' }],
    },
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: isHome
        ? heroConfig.displayName
        : `${pageMeta.title} · ${heroConfig.handle}`,
      description: pageMeta.description,
      siteName: heroConfig.handle,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: isHome ? heroConfig.displayName : pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: isHome
        ? heroConfig.displayName
        : `${pageMeta.title} · ${heroConfig.handle}`,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
