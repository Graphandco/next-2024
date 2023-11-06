'use client';
import Image from 'next/image';
import { HeaderNav } from './HeaderNav';
import { motion, useScroll } from 'framer-motion';
import useScrollPosition from '@/hooks/useScrollPosition';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { HeaderBurgerButton } from './HeaderBurgerButton';
import HeaderMobileMenu from './HeaderMobileMenu';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const scrollPosition = useScrollPosition();
    const dynamicOpacity = `calc(${scrollPosition}% - 50%)`;
    const headerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ['0 1' /*starts bottom of viewport crosses top of element*/, '1.33 1'],
    });
    const logoWidth = scrollPosition > 100 ? '30px' : '50px';

    const pathname = usePathname();
    const navItems = [
        {
            label: 'Accueil',
            href: '/',
        },
        {
            label: 'Prestations',
            href: '/prestations',
        },
        {
            label: 'Réalisations',
            href: '/realisations',
        },
        {
            label: 'Contact',
            href: '/contact',
        },
    ];

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    // console.log(scrollPosition);

    return (
        <motion.header className="sticky top-0 z-50">
            <div className="header-overlay" style={{ opacity: dynamicOpacity }}></div>
            <div className="container flex justify-between items-center py-3">
                <motion.div
                    ref={headerRef}
                    className="header-logo transition-all"
                    style={{
                        width: logoWidth,
                        // opacity: scrollYProgress,
                    }}
                >
                    <Image src="/logo.svg" alt="Logo Graph and Co" width={50} height={50} priority />
                </motion.div>
                <HeaderNav navItems={navItems} />
            </div>
            <HeaderBurgerButton isActive={isActive} setIsActive={setIsActive} />
            <AnimatePresence mode="wait">{isActive && <HeaderMobileMenu navItems={navItems} setIsActive={setIsActive} pathname={pathname} />}</AnimatePresence>
        </motion.header>
    );
};
