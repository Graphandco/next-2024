'use client';
import React, { useState, useRef } from 'react';
import Accordion from './Accordion';
const Accordions = ({ questions }) => {
    const [expanded, setExpanded] = useState(999);
    return (
        <ul>
            {questions.map((question, index) => (
                <Accordion key={index} id={index} title={question.title} content={question.content} expanded={expanded} setExpanded={setExpanded} />
            ))}
        </ul>
    );
};

export default Accordions;
