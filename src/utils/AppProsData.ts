import { StaticImageData } from 'next/image';
import circlesSquareIcon from '@/assets/images/icons/circles-square.svg';
import magnifierIcon from '@/assets/images/icons/magnifier.svg';
import squareIcon from '@/assets/images/icons/square.svg';
import circleIcon from '@/assets/images/icons/circle.svg';
import linedCircleIcon from '@/assets/images/icons/lined-circle.svg';
import paperIcon from '@/assets/images/icons/paper.svg';
import chatIcon from '@/assets/images/icons/chat.svg';
import puzzleIcon from '@/assets/images/icons/puzzle.svg';

interface AppPros {
  id: number;
  icon: StaticImageData;
  title: { __html: string | TrustedHTML };
  description: string;
}

export const appPros: AppPros[] = [
  {
    id: 1,
    icon: circlesSquareIcon,
    title: { __html: 'Protect Your <br> Data' },
    description: '4,729 curated design resources to energize your creative workflow',
  },
  {
    id: 2,
    icon: magnifierIcon,
    title: { __html: 'Super Smart <br> Search' },
    description: '4,729 curated design resources to energize your creative workflow',
  },
  {
    id: 3,
    icon: squareIcon,
    title: { __html: 'Control everything <br> in one place' },
    description: '4,729 curated design resources to energize your creative workflow',
  },
  {
    id: 4,
    icon: circleIcon,
    title: { __html: 'Work better <br> together' },
    description: '4,729 curated design resources to energize your creative workflow',
  },
  {
    id: 5,
    icon: linedCircleIcon,
    title: { __html: '24/7 Live Customer <br> Support' },
    description: '4,729 curated design resources to energize your creative workflow',
  },
  {
    id: 6,
    icon: paperIcon,
    title: {
      __html: 'Project <br> Management',
    },
    description: '4,729 curated design resources to energize your creative workflow',
  },
  {
    id: 7,
    icon: chatIcon,
    title: { __html: 'Workflow <br> builder' },
    description: '4,729 curated design resources to energize your creative workflow',
  },
  {
    id: 8,
    icon: puzzleIcon,
    title: { __html: 'Bring your team in <br> channels' },
    description: '4,729 curated design resources to energize your creative workflow',
  },
];
