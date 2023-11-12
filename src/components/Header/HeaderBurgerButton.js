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
        <div
            ref={buttonRef}
            className={`header-burger sm:hidden scale-[0.7]  ${isActive ? 'open' : 'close'}`}
            onClick={() => {
                setIsActive(!isActive);
            }}
        >
            <div class="line line-top"></div>
            <div class="line line-middle"></div>
            <div class="line line-bottom"></div>
            {/* <svg fill="var(--secondary)" class="hamburger-svg" viewBox="0 0 100 100" width="35">
                <rect class="line top" width="12" height="2" x="9" y="8" rx="1"></rect>
                <rect class="line middle" width="12" height="2" x="9" y="13" rx="1"></rect>
                <rect class="line bottom" width="12" height="2" x="9" y="18" rx="1"></rect>
            </svg> */}
        </div>
    );
};
