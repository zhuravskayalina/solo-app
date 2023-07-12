import { StaticImageData } from 'next/image';

export interface FeatureBlockProps {
  imageSide: 'right' | 'left';
  img: StaticImageData;
  title: { __html: string | TrustedHTML };
  description: string;
  buttonText: string;
}
