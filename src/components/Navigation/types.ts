export interface NavItem {
  title: string;
  url: string;
}

export interface NavigationProps {
  isTablet: boolean;
  closeBurgerMenu: () => void;
}
