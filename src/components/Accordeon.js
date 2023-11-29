'use client';
import { AccordionItem as Item } from '@szhsin/react-accordion';

export default function Accordeon({ header, ...rest }) {
    return (
        <Item
            className="accordion"
            {...rest}
            header={
                <>
                    {header}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="chevron"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        alt="Chevron Down"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </>
            }
            buttonProps={{
                className: ({ isEnter }) => `accordion-btn ${isEnter && 'expanded'}`,
            }}
            contentProps={{ className: 'accordion-content' }}
            panelProps={{ className: 'accordion-panel' }}
        />
    );
}
