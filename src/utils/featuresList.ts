import fakeUi1 from '@/assets/images/fake-ui-1.png';
import fakeUi2 from '@/assets/images/fake-ui-2.png';
import fakeUi3 from '@/assets/images/fake-ui-3.png';
import planeIcon from '@/assets/images/plane.png';
import speakIcon from '@/assets/images/speachbubble.png';
import cursorIcon from '@/assets/images/cursor.png';
import { StaticImageData } from 'next/image';

export interface FeatureBlock {
  image: StaticImageData;
  icon: StaticImageData;
  title: string;
  description: string;
  id: number;
  buttonTitle: string;
  buttonLink: string;
}

export const featuresList: FeatureBlock[] = [
  {
    image: fakeUi1,
    icon: cursorIcon,
    title: 'Stay focused whenever, wherever',
    description: 'We are a growing family of 382,081 designers and makers from around the world',
    id: 1,
    buttonLink: '#',
    buttonTitle: 'Watch how it work',
  },
  {
    image: fakeUi2,
    icon: speakIcon,
    title: 'Share files at the right time',
    description: 'We are a growing family of 382,081 designers and makers from around the world',
    id: 2,
    buttonLink: '#',
    buttonTitle: 'Get Solo Desktop',
  },
  {
    image: fakeUi3,
    icon: planeIcon,
    title: 'Collaborate from anywhere',
    description: 'We are a growing family of 382,081 designers and makers from around the world',
    id: 1,
    buttonLink: '#',
    buttonTitle: 'Schedule a demo',
  },
];
