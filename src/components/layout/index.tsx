import React from 'react';
import { Footer } from '../footer';
import { NavBar } from '../navbar';
import { LayoutProps } from '../../interfaces/layoutProps';
import styles from './layout.module.css';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
     <NavBar />
      <main className={styles.mainContainer}>{children}</main>
     <Footer />
    </>
  )
}
