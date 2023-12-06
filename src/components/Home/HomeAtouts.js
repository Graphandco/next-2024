'use client';
import { FaPaintBrush, FaUserAlt, FaLock, FaMobileAlt } from 'react-icons/fa';

export const HomeAtouts = ({ atouts }) => {
    const pictosNames = {
        brush: FaPaintBrush,
        user: FaUserAlt,
        lock: FaLock,
        mobile: FaMobileAlt,
    };

    return (
        <div className="home-atouts">
            <h2>Les atouts de votre site</h2>
            <div className="home-atouts-wrapper">
                {atouts?.items?.map((atout, index) => {
                    const { picto, title, description } = atout?.fields;
                    let Picto = pictosNames[picto];
                    return (
                        <div className="atout-item" key={index}>
                            <Picto />
                            <div className="atout-title">{title}</div>
                            <div className="atout-description">{description}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
