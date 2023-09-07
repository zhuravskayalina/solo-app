import { useMemo } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import { NavItem, NavigationProps } from '@/components/Navigation/types';

export default function Navigation({ isTablet, closeBurgerMenu }: NavigationProps) {
  const navItems: NavItem[] = useMemo(() => {
    return [
      {
        title: 'downloads',
        url: 'downloads',
      },
      {
        title: 'pricing',
        url: 'pricing',
      },
      {
        title: 'features',
        url: 'features',
      },
      {
        title: 'about us',
        url: 'about',
      },
      {
        title: 'contact',
        url: 'contact',
      },
    ];
  }, []);

  return (
    <nav className={clsx(styles.nav, isTablet && styles.nav_tablet)}>
      <ul className={styles.list}>
        {navItems.map((item: NavItem) => (
          <li key={item.url} className={styles.list__item}>
            <Link href={item.url} className={styles.list__link} onClick={closeBurgerMenu}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
