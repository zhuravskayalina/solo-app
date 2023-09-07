'use client';

import Image from 'next/image';
import styles from './Header.module.scss';
import { useTablet } from '@/hooks/useTablet';
import clsx from 'clsx';
import { useState } from 'react';

import logoImg from '@/assets/images/logo.svg';
import burgerMenuIcon from '@/assets/images/icons/burger.svg';
import closeIcon from '@/assets/images/icons/close.svg';
import Navigation from '@/components/Navigation/Navigation';
import AuthButtons from '@/components/AuthButtons/AuthButtons';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';
import Link from 'next/link';

export default function Header() {
  const [tabletScreen] = useTablet();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    if (tabletScreen) {
      setOpenMenu(false);
    }
  };

  const navigationScreen = (
    <>
      <div className={styles.header__nav}>
        <Navigation isTablet={false} closeBurgerMenu={handleCloseMenu} />
      </div>
      <div className={styles.header__auth}>
        <AuthButtons />
      </div>
    </>
  );

  const navigationTablet = (
    <button className={styles.burger__button} onClick={handleOpenMenu}>
      <Image src={openMenu ? closeIcon : burgerMenuIcon} alt="open menu" />
    </button>
  );
  return (
    <section
      className={clsx(
        styles.header,
        tabletScreen && styles.header_tablet,
        openMenu && styles.header_menu
      )}
    >
      <div className={styles.container}>
        <Link href="/">
          <Image src={logoImg} alt="logo" className={styles.logo} priority />
        </Link>
        {tabletScreen ? navigationTablet : navigationScreen}
      </div>
      {openMenu && <BurgerMenu closeMenu={handleCloseMenu} />}
    </section>
  );
}
