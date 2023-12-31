import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import gsap from 'gsap';

const Accordion = ({ id, title, content, expanded, setExpanded }) => {
    const isOpen = id === expanded;
    const ref = useRef();

    useEffect(() => {
        gsap.to(ref.current.children[1], {
            height: isOpen ? 'auto' : 0,
        });
        gsap.to(ref.current.children[0].children[0], {
            rotate: isOpen ? 45 : 0,
            duration: 0.5,
        });
    }, [isOpen]);

    return (
        <li ref={ref} className={`accordion-item ${id === expanded ? 'expanded' : ''}`}>
            <AccordionHeader onClick={() => setExpanded(id === expanded ? -1 : id)}>
                {/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
                </svg> */}
                <svg fill="white" height="35px" viewBox="0 0 24 24" width="35px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <h3>{title}</h3>
            </AccordionHeader>
            <div className="accordion-content">
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </li>
    );
};

export default Accordion;

const AccordionHeader = styled.div`
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    align-items: center;
    gap: 2rem;
    h3 {
        padding: 0;
        margin: 0;
        color: #f4f5ff;
        font-size: clamp(1.2rem, 11px + 1vw, 1.5rem);
        font-weight: bold;
        font-family: var(--text-font);
    }
`;
