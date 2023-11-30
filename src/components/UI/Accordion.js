import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import gsap from 'gsap';

const Accordion = ({ title, id, content, expanded, setExpanded }) => {
    const isOpen = id === expanded;
    const ref = useRef();

    useEffect(() => {
        gsap.to(ref.current.children[1], {
            height: isOpen ? 'auto' : 0,
        });
        gsap.to(ref.current.children[0].children[1], {
            rotate: isOpen ? 90 : 0,
            duration: 0.5,
        });
    }, [isOpen]);

    return (
        <AccordionContainer ref={ref}>
            <AccordionHeader onClick={() => setExpanded(id === expanded ? -1 : id)}>
                <h3>{title}</h3>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
                </svg>
            </AccordionHeader>
            <AccordionContent>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </AccordionContent>
        </AccordionContainer>
    );
};

export default Accordion;

const AccordionContainer = styled.li`
    width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
    padding: 1rem;
    cursor: pointer;
`;

const AccordionHeader = styled.div`
    width: 100%;
    height: 50px;
    padding: 0.5rem;
    box-sizing: border-box;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: flex-start;

    h3 {
        padding: 0;
        margin: 0;
        color: #f4f5ff;
    }

    svg {
        width: 2rem;
        height: auto;
        margin-left: auto;
    }
`;
const AccordionContent = styled.div`
    width: 100%;
    height: 5px;
    box-sizing: border-box;
    overflow: hidden;

    p {
        padding: 1rem;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 168%;
    }
`;
