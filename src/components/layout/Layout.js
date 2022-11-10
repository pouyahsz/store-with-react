import React from 'react'
import Footer from './Footer';
import Header from './Header';
import styles from './layoutStyle.module.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;
