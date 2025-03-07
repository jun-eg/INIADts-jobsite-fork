import { Css } from '../components/icons/Css';
import { Github } from '../components/icons/Github';
import Prisma from '../components/icons/Prisma';
import { ReactImg } from '../components/icons/React';
import { TypeScript } from '../components/icons/TypeScript';
import type { ActivityHistory } from '../types/type';

export const activityHistory: ActivityHistory[] = [
  {
    month: 4,
    title: 'othello',
    description:
      'INIAD.tsでは入会してまず最初にオセロ制作を行い、TypescriptやReactの基礎を学びます。',
    image: 'https://github.com/INIAD-Developers.png',
    techs: [ReactImg({ size: 2 }), TypeScript({ size: 2 })],
    courses: ['standard', 'stoic'],
  },
  {
    month: 5,
    title: 'minesweeper',
    description:
      'cssを学ぶためにマインスイーパー制作を行います。windows98などに搭載されているバージョンのデザインを目指します。',
    image: 'https://github.com/INIAD-Developers.png',
    techs: [ReactImg({ size: 2 }), TypeScript({ size: 2 }), Css({ size: 2 })],
    courses: ['stoic'],
  },
  {
    month: 6,
    title: 'tetris',
    description: 'hooksの使い方やコンポーネント分割を学ぶためにtetris作成を行います',
    image: 'https://github.com/INIAD-Developers.png',
    techs: [ReactImg({ size: 2 }), TypeScript({ size: 2 }), Css({ size: 2 })],
    courses: ['stoic'],
  },
  {
    month: 6,
    title: 'online othello',
    description: 'frourioを用いてフルスタック開発の基礎を学びます',
    image: 'https://github.com/INIAD-Developers.png',
    techs: [ReactImg({ size: 2 }), TypeScript({ size: 2 }), Css({ size: 2 }), Prisma({ size: 2 })],
    courses: ['stoic'],
  },
  {
    month: 7,
    title: 'gradius',
    description: 'frourioを用いたチーム開発を行い、学際に向けて準備をします',
    image: 'https://github.com/INIAD-Developers.png',
    techs: [
      ReactImg({ size: 2 }),
      TypeScript({ size: 2 }),
      Css({ size: 2 }),
      Prisma({ size: 2 }),
      Github({ size: 2 }),
    ],
    courses: ['stoic'],
  },
];
