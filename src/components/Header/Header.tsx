'use client';

import Image from 'next/image';
import styles from './Header.module.scss';
import { useTablet } from '@/hooks/useTablet';
import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';

import logoImg from '@/assets/images/logo.svg';
import burgerMenuIcon from '@/assets/images/icons/burger.svg';
import Navigation from '@/components/Navigation/Navigation';

export default function Header() {
  const [tabletScreen] = useTablet();
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleOpenMenu = () => {
    setShowBurgerMenu((prevState) => !prevState);
  };

  const closeBurgerMenu = () => {
    setShowBurgerMenu(false);
  };

  const navigationScreen = (
    <>
      <Navigation isTablet={false} closeBurgerMenu={closeBurgerMenu} />
      <div className={styles.auth}>
        <Link href="#" className={styles.auth__button}>
          Login
        </Link>
        <Link href="#" className={clsx(styles.auth__button, styles.auth__button_colored)}>
          Sign up
        </Link>
      </div>
    </>
  );

  const navigationTablet = (
    <button className={styles.burger__button} onClick={handleOpenMenu}>
      <Image src={burgerMenuIcon} alt="open menu" />
    </button>
  );

  const burgerMenu = (
    <section className={styles.burger__background} onClick={closeBurgerMenu}>
      <section className={styles.burger}>
        <Navigation isTablet closeBurgerMenu={closeBurgerMenu} />
      </section>
    </section>
  );

  return (
    <section className={clsx(styles.header, tabletScreen && styles.header_tablet)}>
      <div className={styles.container}>
        <Image src={logoImg} alt="logo" className={styles.logo} priority />
        {tabletScreen ? navigationTablet : navigationScreen}
      </div>
      {showBurgerMenu && burgerMenu}
    </section>
  );
}
