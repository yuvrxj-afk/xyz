import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Solidity from '@/components/technologies/Solidity';
import TypeScript from '@/components/technologies/TypeScript';
import Wagmi from '@/components/technologies/Wagmi';
import React from 'react';

/** Used by chat / meta keywords, URLs, assistant context. */
export const heroHandle = 'yuvrxj';

/** Opens X DM compose for @yuvrxj7 (numeric id from your profile / chat URL). */
export const heroMessageOnXUrl =
  'https://x.com/messages/compose?recipient_id=1364956899028987906';

/** Large headline — who you are on the page. */
export const heroDisplayName = 'Yuvraj Singh Sisodiya';

/**
 * Local file (downloaded from Cloudinary). To make a longer seamless loop,
 * re-encode with ffmpeg, e.g. `ffmpeg -stream_loop 2 -i hero-bg-source.mp4 -c copy hero-bg-loop.mp4`
 */
export const heroBackgroundVideoSrc = '/hero/hero-bg-source.mp4';

export const heroBackgroundPosterSrc = '';

/** 1 = normal speed. Slightly below 1 can mask jumpy loops on short clips. */
export const heroVideoPlaybackRate = 1;

/**
 * Curated skills for prompts / resume context (no duplicate “React + Next”).
 * Hero pills are a shorter visual subset with icons.
 */
export const skills = [
  { name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { name: 'Next.js', href: 'https://nextjs.org/' },
  { name: 'Node.js', href: 'https://nodejs.org/' },
  { name: 'NestJS', href: 'https://nestjs.com/' },
  { name: 'Express', href: 'https://expressjs.com/' },
  { name: 'PostgreSQL', href: 'https://www.postgresql.org/' },
  { name: 'MongoDB', href: 'https://www.mongodb.com/' },
  { name: 'Solidity', href: 'https://soliditylang.org/' },
  { name: 'Wagmi', href: 'https://wagmi.sh/' },
  { name: 'Vercel', href: 'https://vercel.com/' },
  { name: 'Docker', href: 'https://www.docker.com/' },
  { name: 'Redis', href: 'https://redis.io/' },
  { name: 'Go', href: 'https://go.dev/' },
] as const;

/**
 * Hero chips — icons, tight set: Next implies React; Nest + Node cover most
 * Express-shaped APIs; Redis / Docker / Go / Vercel stay in `skills` for prompts.
 */
export const heroStackPills = [
  {
    label: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: <TypeScript key="ts" />,
  },
  {
    label: 'Next.js',
    href: 'https://nextjs.org/',
    icon: <NextJs key="next" />,
  },
  {
    label: 'Node.js',
    href: 'https://nodejs.org/',
    icon: <NodeJs key="node" />,
  },
  {
    label: 'NestJS',
    href: 'https://nestjs.com/',
    icon: <NestJs key="nest" />,
  },
  {
    label: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    icon: <PostgreSQL key="pg" />,
  },
  {
    label: 'MongoDB',
    href: 'https://www.mongodb.com/',
    icon: <MongoDB key="mongo" />,
  },
  {
    label: 'Solidity',
    href: 'https://soliditylang.org/',
    icon: <Solidity key="sol" />,
  },
  {
    label: 'Wagmi',
    href: 'https://wagmi.sh/',
    icon: <Wagmi key="wagmi" />,
  },
] as const;

export const heroConfig = {
  name: heroHandle,
  displayName: heroDisplayName,
  handle: heroHandle,
  title: 'Full-stack engineer · Web3 & AI',
  avatar: '/assets/image.png',

  skills,

  bio: 'I work across the stack on <b>onchain</b> stuff—trading flows, dashboards, the glue between wallet and backend. Plenty of it is slow queries, half-finished states, and tightening copy so it matches what actually happens when someone hits confirm. <b>Indore, India</b>. Remote. I keep my hours loose enough to overlap with Europe and the US.',

  stackPills: heroStackPills,

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Message on X',
      href: heroMessageOnXUrl,
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/yuvrxj7',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yuvrajsinghsisodiya/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/yuvrxj-afk',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:yuvrajsisodiya7302@gmail.com',
    icon: <Mail />,
  },
];
