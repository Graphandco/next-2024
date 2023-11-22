'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { HomeRealisationsItem } from './HomeRealisationsItem';
import Button from '../UI/Button';
import Link from 'next/link';

const projects = [
    {
        title: 'Hola Maté',
        desc: 'Boutique de Maté',
        src: 'cover-hola-mate.jpg',
        color: '#2B4D28',
        link: 'hola-mate',
    },
    {
        title: 'Bomot',
        desc: 'Écriture & communication',
        src: 'cover-bomot.jpg',
        color: '#8a8a8a',
        link: 'bomot',
    },
    {
        title: 'Willow Tarot',
        desc: 'Guidance personnelle',
        src: 'cover-willow.jpg',
        color: '#1D2D29',
        link: 'willow-tarot',
    },
    {
        title: 'Loïde Guitare',
        desc: 'Créateur de guitares',
        src: 'cover-loide.jpg',
        color: '#171a25',
        link: 'loide-guitare',
    },
];

const scaleAnimation = {
    initial: { scale: 0, x: '-50%', y: '-50%' },
    enter: {
        scale: 1,
        x: '-50%',
        y: '-50%',
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        scale: 0,
        x: '-50%',
        y: '-50%',
        transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
};

export const HomeRealisations = ({ realisationsToShow }) => {
    const [modal, setModal] = useState({ active: false, index: 0 });
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    // console.log(realisationsToShow);

    let xMoveContainer = useRef(null);
    let yMoveContainer = useRef(null);
    let xMoveCursor = useRef(null);
    let yMoveCursor = useRef(null);
    let xMoveCursorLabel = useRef(null);
    let yMoveCursorLabel = useRef(null);

    useEffect(() => {
        //Move Container
        xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', {
            duration: 0.8,
            ease: 'power3',
        });
        yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', {
            duration: 0.8,
            ease: 'power3',
        });
        //Move cursor
        xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
            duration: 0.5,
            ease: 'power3',
        });
        yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
            duration: 0.5,
            ease: 'power3',
        });
        //Move cursor label
        xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', {
            duration: 0.45,
            ease: 'power3',
        });
        yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', {
            duration: 0.45,
            ease: 'power3',
        });
    }, []);

    const moveItems = (x, y) => {
        xMoveContainer.current(x);
        yMoveContainer.current(y);
        xMoveCursor.current(x);
        yMoveCursor.current(y);
        xMoveCursorLabel.current(x);
        yMoveCursorLabel.current(y);
    };
    const manageModal = (active, index, x, y) => {
        moveItems(x, y);
        setModal({ active, index });
    };

    return (
        <section id="realisations" className="home-realisations">
            <div className="container">
                {/* {realisationsToShow.map((rea, index) => (
                    <div key={index}>{rea.fields.title}</div>
                ))} */}
            </div>
            <div className="container">
                <h2>Dernières réalisations</h2>
                <div
                    onMouseMove={(e) => {
                        moveItems(e.clientX, e.clientY);
                    }}
                    className="projects"
                >
                    <div className="realisations-list">
                        {/* {projects.map((project, index) => {
                            return (
                                <HomeRealisationsItem
                                    index={index}
                                    title={project.title}
                                    desc={project.desc}
                                    link={project.link}
                                    manageModal={manageModal}
                                    key={index}
                                />
                            );
                        })} */}
                        {realisationsToShow.map((rea, index) => {
                            return <HomeRealisationsItem index={index} rea={rea?.fields} manageModal={manageModal} key={index} />;
                        })}
                    </div>

                    <>
                        <motion.div
                            ref={modalContainer}
                            variants={scaleAnimation}
                            initial="initial"
                            animate={active ? 'enter' : 'closed'}
                            className="modal-container"
                        >
                            <div style={{ top: index * -100 + '%' }} className="modal-slider">
                                {realisationsToShow.map((rea, index) => {
                                    return (
                                        <div className="modal" style={{ backgroundColor: rea?.fields.color }} key={`modal_${index}`}>
                                            <Image
                                                src={`https:${rea?.fields.cover.fields.file.url}`}
                                                width={rea?.fields.cover.fields.file.details.image.width}
                                                height={rea?.fields.cover.fields.file.details.image.height}
                                                alt={rea?.fields.title}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                        <motion.div
                            ref={cursor}
                            className="cursor"
                            variants={scaleAnimation}
                            initial="initial"
                            animate={active ? 'enter' : 'closed'}
                        ></motion.div>
                        <motion.div
                            ref={cursorLabel}
                            className="cursor-label"
                            variants={scaleAnimation}
                            initial="initial"
                            animate={active ? 'enter' : 'closed'}
                        >
                            Découvrir
                        </motion.div>
                    </>
                    <Button className="mt-12">
                        <Link href="/realisations">Tout voir</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
