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
    // const logoRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: logoRef,
    //     offset: ['0 1' /*starts bottom of viewport crosses top of element*/, '1.33 1'],
    // });
    const logoWidth = scrollPosition > 100 ? '30px' : '40px';
    const logoFontSize = scrollPosition > 100 ? '18px' : '23px';

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
        <motion.header className="sticky top-0 z-50 overflow-hidden w-full">
            <div className="header-overlay" style={{ opacity: dynamicOpacity }}></div>
            <div className="header-wrapper container flex justify-between items-center py-3">
                <div className="header-logo flex items-center gap-2">
                    <motion.div
                        // ref={logoRef}
                        className="header-logo-image transition-all"
                        style={{
                            width: logoWidth,
                            // opacity: scrollYProgress,
                        }}
                    >
                        <Image src="/logo.svg" alt="Logo Graph and Co" width={50} height={50} priority />
                    </motion.div>
                    <motion.div
                        className="header-logo-title text-white font-title min-w-max"
                        style={{
                            fontSize: logoFontSize,
                            // opacity: scrollYProgress,
                        }}
                    >
                        Graph & Co
                    </motion.div>
                </div>
                <HeaderNav navItems={navItems} />
                <HeaderBurgerButton isActive={isActive} setIsActive={setIsActive} />
                <AnimatePresence mode="wait">
                    {isActive && <HeaderMobileMenu navItems={navItems} setIsActive={setIsActive} pathname={pathname} />}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};
