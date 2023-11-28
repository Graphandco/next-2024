import React from 'react';
import Accordeon from '../Accordeon';

export const PrestationsFAQ = () => {
    const questions = [
        {
            q: 'Comment ?',
            r: 'comme ça',
        },
    ];
    return (
        <section id="faq">
            {questions.map((question, index) => (
                <Accordeon key={index} question={question.q}>
                    {question.r}
                </Accordeon>
            ))}
        </section>
    );
};
