'use client';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const HeaderBurgerButton = ({ isActive, setIsActive }) => {
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(buttonRef.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {
                    gsap.to(buttonRef.current, {
                        scale: 1,
                        duration: 0.25,
                        ease: 'power1.out',
                    });
                },
                onEnterBack: () => {
                    gsap.to(buttonRef.current, {
                        scale: 0,
                        duration: 0.25,
                        ease: 'power1.out',
                    });
                },
            },
        });
    }, []);

    return (
        <div ref={buttonRef} className={`header-burger sm:hidden  ${isActive ? 'header-burger-active' : ''}`}>
            <div
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className="header-burger-button"
                // backgroundColor="white"
            >
                <div className={`header-burger-bars ${isActive ? 'burger-active' : ''}`}></div>
            </div>
        </div>
    );
};
