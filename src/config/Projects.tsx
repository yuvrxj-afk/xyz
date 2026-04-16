import EthersJs from '@/components/technologies/EthersJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import OpenAI from '@/components/technologies/OpenAI';
import Pinecone from '@/components/technologies/Pinecone';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Stripe from '@/components/technologies/Stripe';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Wagmi from '@/components/technologies/Wagmi';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'PreOracle',
    description:
      'AI-powered prediction market autopilot. Monitors 2,400+ Polymarket markets, generates BUY/SKIP/HOLD signals with confidence scores, and executes trades autonomously via embedded wallet.',
    image: '/project/preoracle.png',
    link: 'https://preoracle.xyz',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Claude API', icon: <OpenAI key="claude" /> },
      { name: 'Wagmi', icon: <Wagmi key="wagmi" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    live: 'https://preoracle.xyz',
    details: false,
    projectDetailsPageSlug: '/projects/preoracle',
    isWorking: true,
  },
  {
    title: 'T/agg',
    description:
      'Cross-chain bridge aggregation interface. Compares routes across multiple bridges for optimal execution and best-rate swaps.',
    image: '/project/tagg.png',
    link: 'https://appsweb-production-0dd7.up.railway.app',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Ethers.js', icon: <EthersJs key="ethers" /> },
      { name: 'Wagmi', icon: <Wagmi key="wagmi" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    live: 'https://appsweb-production-0dd7.up.railway.app',
    details: false,
    projectDetailsPageSlug: '/projects/tagg',
    isWorking: true,
  },
  {
    title: 'Pageprobe',
    description:
      'Chat with any PDF. Vector search over 500+ page documents in seconds using Pinecone and semantic embeddings.',
    image: '/project/pageprobe.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Pinecone', icon: <Pinecone key="pinecone" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/pageprobe',
    isWorking: true,
  },
  {
    title: 'Nexus',
    description:
      'Multi-purpose AI platform for code queries, image generation, and media synthesis. Built with OpenAI and Replicate AI with Stripe billing.',
    image: '/project/nexus.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'OpenAI API', icon: <OpenAI key="openai" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Stripe', icon: <Stripe key="stripe" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    live: '#',
    details: false,
    projectDetailsPageSlug: '/projects/nexus',
    isWorking: true,
  },
];
