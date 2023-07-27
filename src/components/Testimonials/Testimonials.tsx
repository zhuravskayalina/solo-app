'use client';

import styles from './Testimonials.module.scss';
import { useEffect, useRef, useState } from 'react';
import { SoloClient } from '@/SoloClient/SoloClient';
import Testimonial from '@/components/Testimonial/Testimonial';
import clsx from 'clsx';

export interface TestimonialItem {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

interface ArrowIconProps {
  className: string;
}

const ArrowIcon = ({ className }: ArrowIconProps) => (
  <svg
    width="41"
    height="40"
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_887_24869)">
      <path
        d="M39.5 20L1.5 20"
        stroke="#6E757C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 13L1.5 20L8.5 27"
        stroke="#6E757C"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_887_24869">
        <rect width="40" height="40" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default function Testimonials() {
  const [data, setData] = useState<TestimonialItem[]>();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await SoloClient.getTestimonials();
        setData(data.slice(0, 10));
      } catch (error) {
        console.error('Got an error:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const scroll = (scrollOffset: number) => {
    if (listRef.current) {
      listRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.section__heading}>
        What people <br /> are saying
      </h3>
      {!data && '...loading testimonials :)'}
      {data && (
        <div className={styles.scroller}>
          <ul className={styles.section__list} ref={listRef}>
            {data.map((item) => (
              <Testimonial testimonial={item} key={item.id} />
            ))}
          </ul>
        </div>
      )}
      <div className={styles.buttons}>
        <button
          className={clsx(styles.button, styles.buttons__back)}
          onMouseDown={() => scroll(-370)}
        >
          <ArrowIcon className={styles.buttons__back__img} />
        </button>
        <button
          className={clsx(styles.button, styles.buttons__forward)}
          onMouseDown={() => scroll(370)}
        >
          <ArrowIcon className={styles.buttons__forward__img} />
        </button>
      </div>
    </section>
  );
}
