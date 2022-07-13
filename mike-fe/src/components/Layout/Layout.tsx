import { ReactNode } from 'react';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

const Layout = ({ children, header, footer }: LayoutProps) => {
  return (
    <>
      <header className={styles.horizontalMargin}>{header}</header>
      <main className={styles.horizontalMargin}>{children}</main>
      <footer className={styles.horizontalMargin}>{footer}</footer>
    </>
  );
};

export default Layout;
