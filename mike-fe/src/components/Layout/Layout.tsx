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
      {header}
      <main className={styles.horizontalMargin}>
        {children}
        <p style={{ height: '150vh' }}>ksjdjdjdjdf</p>
      </main>
      <footer className={styles.horizontalMargin}>{footer}</footer>
    </>
  );
};

export default Layout;
