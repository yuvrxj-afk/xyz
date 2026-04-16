import ExpressJs from '@/components/technologies/ExpressJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Solidity from '@/components/technologies/Solidity';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Wagmi from '@/components/technologies/Wagmi';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Syvora',
    position: 'Software Engineer',
    location: 'Remote',
    image: '/company/syvora.png',
    description: [
      'Rebuilt redemption and stability pool flows for a DeFi lending protocol, improving protocol correctness and UX.',
      'Integrated cross-chain bridge and shipped Stablecoin V2 to production.',
      'Designed and built a gamified quest system with onchain airdrop distribution.',
      'Migrated state management from Redux to Zustand across the full production application.',
      'Mentored interns and organized an internal hackathon.',
    ],
    startDate: 'January 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Solidity',
        href: 'https://soliditylang.org/',
        icon: <Solidity />,
      },
      {
        name: 'Wagmi',
        href: 'https://wagmi.sh/',
        icon: <Wagmi />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: '#',
    github: '#',
  },
  {
    isCurrent: false,
    company: 'Metafic',
    position: 'Software Engineer',
    location: 'Remote',
    image: '/company/metafic.png',
    description: [
      'Built quiz modules, dynamic dashboards, and bulk CSV import/export for an LMS platform.',
      'Implemented Google OAuth, RBAC, and advanced table operations for a travel booking platform.',
      'Optimized React component performance and reduced render cycles across both products.',
      'Mentored junior engineers and reviewed PRs.',
    ],
    startDate: 'January 2024',
    endDate: 'December 2024',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Prisma',
        href: 'https://www.prisma.io/',
        icon: <Prisma />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
    ],
    website: 'https://metafic.com',
    linkedin: 'https://www.linkedin.com/company/metafic',
  },
];
