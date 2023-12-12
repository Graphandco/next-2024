'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const RealisationHeader = ({ title, content, cover }) => {
    const titleArray = [...title];
    const titleSemiLength = Math.round(titleArray.length / 2);
    const titleLeft = titleArray.slice(0, titleSemiLength);
    const titleRight = titleArray.slice(titleSemiLength);
    const websiteContent = useRef(null);
    const lettersGroup1 = useRef(null);
    const lettersGroup2 = useRef(null);

    const endValue = websiteContent.current?.offsetHeight * 0.75;

    ScrollTrigger.create({
        trigger: websiteContent.current,
        start: '-0.1% top',
        end: 'bottom bottom',
        onEnter: () => {
            gsap.set(websiteContent.current, { position: 'absolute', top: '195%' });
        },
        onLeaveBack: () => {
            gsap.set(websiteContent.current, { position: 'fixed', top: '0' });
        },
    });

    gsap.to(lettersGroup1.current, {
        x: () => -innerWidth * 3,
        scale: 10,
        ease: 'power2.inOut',
        scrollTrigger: {
            start: 'top top',
            end: `+=200%`,
            scrub: 1,
        },
    });

    gsap.to(lettersGroup2.current, {
        x: () => innerWidth * 3,
        scale: 10,
        ease: 'power2.inOut',
        scrollTrigger: {
            start: 'top top',
            end: `+=200%`,
            scrub: 1,
        },
    });

    function containsOnlySpaces(str) {
        return str.match(/^\s*$/) !== null;
    }
    // console.log(containsOnlySpaces(titleLeft[4]));

    return (
        <div>
            {' '}
            <div className="logo"></div>
            <div className="header">
                <div className="letters" ref={lettersGroup1}>
                    {titleLeft.map((letter, index) => (
                        <div key={index} className={containsOnlySpaces(letter) ? 'empty' : 'full'}>
                            {letter}
                        </div>
                    ))}
                </div>
                <div className="letters" ref={lettersGroup2}>
                    {titleRight.map((letter, index) => (
                        <div key={index} className={containsOnlySpaces(letter) ? 'empty' : 'full'}>
                            {letter}
                        </div>
                    ))}
                </div>
            </div>
            <div className="website-content" ref={websiteContent}>
                <div className="img-holder">
                    <img src={cover} alt="" />
                </div>
                <div className="content-holder">{documentToReactComponents(content)}</div>
            </div>
        </div>
    );
};

export default RealisationHeader;
