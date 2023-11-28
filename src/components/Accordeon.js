'use client';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function Accordeon({ question, children }) {
    return (
        <>
            <div class="szh-accordion">
                <div class="szh-accordion__item">
                    <h3 class="szh-accordion__item-heading">
                        <button class="szh-accordion__item-btn">What is Lorem Ipsum?</button>
                    </h3>
                    <div class="szh-accordion__item-content">
                        <div role="region" class="szh-accordion__item-panel">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
            <div class="szh-accordion">
                <div class="szh-accordion__item">
                    <h3 class="szh-accordion__item-heading">
                        <button class="szh-accordion__item-btn">What is Lorem Ipsum?</button>
                    </h3>
                    <div class="szh-accordion__item-content">
                        <div role="region" class="szh-accordion__item-panel">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
            {/* // <Accordion>
        //     <AccordionItem header={question.q}>{children} </AccordionItem>
        // </Accordion> */}
        </>
    );
}
