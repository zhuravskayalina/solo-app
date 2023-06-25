import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface BaseButtonProps {
  isColored: boolean;
  link: string;
  children: ReactNode;
  color: 'white' | 'gray';
}

export default function BaseButton({ isColored, link, children, color }: BaseButtonProps) {
  const colorTheme = color === 'white' ? styles.button_white : styles.button_gray;

  return (
    <Link
      href={link}
      className={clsx(styles.button, isColored && styles.button_colored, colorTheme)}
    >
      {children}
    </Link>
  );
}
