'use client';

import { FaSmile, FaCode, FaSadCry } from 'react-icons/fa';
import { GiSwordsPower } from 'react-icons/gi';
import { HomeCounter } from './HomeCounter';

export const HomeCounters = () => {
    const counters = [
        {
            number: 97,
            title: 'Fidélisation client',
            suffix: '%',
            icon: FaSmile,
        },
        {
            number: 15,
            title: "Ans d'expérience",
            suffix: '',
            icon: GiSwordsPower,
        },
        {
            number: 197436,
            title: 'Lignes de code',
            suffix: '',
            icon: FaCode,
        },
        {
            number: 12,
            title: "Demandes de réparation d'imprimante",
            suffix: '',
            icon: FaSadCry,
        },
    ];

    return (
        <section className="counters">
            <div className="counters-wrapper">
                {counters.map((count, index) => (
                    <HomeCounter key={index} value={count.number} title={count.title} suffix={count.suffix} Icon={count.icon} />
                ))}
            </div>
        </section>
    );
};
