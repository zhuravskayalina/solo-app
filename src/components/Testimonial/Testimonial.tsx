import styles from './Testimonial.module.scss';
import { TestimonialProps } from '@/components/Testimonial/types';

export default function Testimonial({ testimonial: { name, body } }: TestimonialProps) {
  return (
    <li className={styles.testimonial}>
      <p className={styles.testimonial__text}>&quot;{body}&quot;</p>
      <p className={styles.testimonial__name}>{name}</p>
      <p className={styles.testimonial__job}>Visual Designer</p>
    </li>
  );
}
