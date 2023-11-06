import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeaderCurve from './HeaderCurve';

export const menuSlide = {
    initial: { x: 'calc(100% + 100px)' },
    enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: 'calc(100% + 100px)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};
export const slide = {
    initial: { x: 80 },
    enter: (i) => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: (i) => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
};
export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } },
};

export default function HeaderMobileMenu({ navItems, pathname }) {
    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="burger-menu-wrapper">
            <div className="burger-menu-content">
                <div
                    // onMouseLeave={() => {
                    //     setSelectedIndicator(pathname);
                    // }}
                    className="burger-menu-nav"
                >
                    <div className="burger-menu-header">
                        <p>Un métier, une passion</p>
                    </div>
                    <ul className="mobile-nav-items">
                        {navItems.map((data, index) => {
                            return (
                                <motion.li
                                    key={index}
                                    className="link"
                                    // onMouseEnter={() => {
                                    //     setSelectedIndicator(data.href);
                                    // }}
                                    custom={index}
                                    variants={slide}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    // isActive={selectedIndicator == data.href}
                                    // setSelectedIndicator={setSelectedIndicator}
                                >
                                    {/* <motion.div variants={scale} animate={isActive ? 'open' : 'closed'} className="indicator"></motion.div> */}
                                    <Link href={data.href} className={pathname === `${data.href}` ? 'navlink active' : 'navlink'}>
                                        {data.label}
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
                {/* <div className="menu-footer">
                    <a>Awwwards</a>
                    <a>Instagram</a>
                    <a>Dribble</a>
                    <a>LinkedIn</a>
                </div> */}
            </div>
            <HeaderCurve />
        </motion.div>
    );
}
