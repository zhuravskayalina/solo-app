import { StaticImageData } from 'next/image';

import flickIcon from '@/assets/images/icons/flick-up.svg';
import videoIcon from '@/assets/images/icons/video.svg';
import clockIcon from '@/assets/images/icons/time-clock.svg';

interface ProductivityItem {
  id: number;
  icon: StaticImageData;
  title: string;
}

export const productivityLandingItems: ProductivityItem[] = [
  {
    id: 1,
    icon: flickIcon,
    title: 'Use a simple way',
  },
  {
    id: 2,
    icon: videoIcon,
    title: 'A productivity platform',
  },
  {
    id: 3,
    icon: clockIcon,
    title: 'Save your time',
  },
];
