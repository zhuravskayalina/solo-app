import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface BaseButtonProps {
  isColored: boolean;
  link: string;
  children: ReactNode;
}

export default function BaseButton({ isColored, link, children }: BaseButtonProps) {
  return (
    <Link href={link} className={clsx(styles.button, isColored && styles.button_colored)}>
      {children}
    </Link>
  );
}
