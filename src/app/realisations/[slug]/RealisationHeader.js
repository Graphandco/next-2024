'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const RealisationHeader = ({ title, content, cover }) => {
    const titleArray = [...title];
    const titleSemiLength = Math.round(titleArray.length / 2);
    const titleLeft = titleArray.slice(0, titleSemiLength);
    const titleRight = titleArray.slice(titleSemiLength);
    const websiteContent = useRef('');
    const lettersGroup1 = useRef('');
    const lettersGroup2 = useRef('');
    const imageHolder = useRef('');
    const imageHolderImage = useRef('');

    const endValue = websiteContent.current?.offsetHeight * 0.75;

    ScrollTrigger.create({
        trigger: websiteContent.current,
        start: '-0.1% top',
        end: 'bottom bottom',
        onEnter: () => {
            gsap.set(websiteContent.current, { position: 'absolute', top: '195%' });
            // gsap.set(websiteContent.current, { position: 'absolute' });
        },
        onLeaveBack: () => {
            gsap.set(websiteContent.current, { position: 'fixed', top: '0' });
        },
    });
    gsap.to('.img-holder', {
        rotation: 0,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power2.inOut',
        scrollTrigger: {
            start: 'top top',
            end: '+=200%',
            scrub: 1,
        },
    });

    gsap.to('.img-holder img', {
        scale: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            start: 'top top',
            end: '+=200%',
            scrub: 1,
        },
    });
    useEffect(() => {
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
    }, []);

    function containsOnlySpaces(str) {
        return str.match(/^\s*$/) !== null;
    }
    // console.log(containsOnlySpaces(titleLeft[4]));

    return (
        <div>
            {/* <div className="logo"></div> */}
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
                <div className="img-holder" ref={imageHolder}>
                    <img src={cover} alt="" ref={imageHolderImage} />
                </div>
                <div className="content-holder">
                    {documentToReactComponents(content)}
                    <div className="row">
                        <h1>History</h1>
                    </div>
                    <div className="row">
                        <div className="img">
                            <img src="./img-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="img">
                            <img src="./img-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="img">
                            <img src="./img-3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <p>
                            In the age of knights and castles, master sculptors skillfully carved stones and marbles with great artistry. From mountains and
                            forests, the raw materials arose to be shaped according to their vision.
                        </p>
                    </div>
                    <div className="row">
                        <p>
                            These artisans, wielding hammers and chisels, brought to life the mysteries of faith and ancient tales in stone. Every stroke, with
                            precision and reverence, narrated stories of virtues, triumphs, and sometimes tragic human tales.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealisationHeader;
