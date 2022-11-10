import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './layoutStyle.module.scss';
import cart from '../../assets/images/cart-shopping-solid.svg';
import bars from '../../assets/images/bars-solid.svg';
const Header = () => {
    const [menuVisibility, setMenuVisibility] = useState(true)
    const showingMenuHandler = () => {
        setMenuVisibility((prevState) => !prevState)
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}><Link to="/"><img src={logo} alt="logo" /></Link></div>
            <nav className={styles["wide-device-navigation-bar"]}>
                <ul >
                    <li>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories">Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">About Us</NavLink>
                    </li>
                </ul>
            </nav>
            <nav className={styles["thin-device-navigation-bar"]}>
                <button onClick={showingMenuHandler}><img src={bars} alt="hamburger-menu" /></button>
                <ul className={!menuVisibility && styles.hidden}>
                    <li>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories">Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">About Us</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.basket}>
                <Link to='basket'>
                    <img src={cart} alt="basket" />
                    <span>0</span>
                </Link>
            </div>
        </header>
    )
}

export default Header;
