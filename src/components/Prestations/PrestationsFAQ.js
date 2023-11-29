import React from 'react';
import { Accordion } from '@szhsin/react-accordion';
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
            <Accordion transition transitionTimeout={250}>
                {questions.map((question, index) => (
                    <Accordeon header="What is Lorem Ipsum?" initialEntered>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordeon>
                ))}
            </Accordion>
        </section>
    );
};
