import Link from 'next/link';
import { ScaleIn } from '../UI/ScaleIn';

export const HomeRealisationsItem = ({ index, title, manageModal, desc, link }) => {
    return (
        <ScaleIn>
            <Link
                href={`realisations/${link}`}
                onMouseEnter={(e) => {
                    manageModal(true, index, e.clientX, e.clientY);
                }}
                onMouseLeave={(e) => {
                    manageModal(false, index, e.clientX, e.clientY);
                }}
                className="home-project-item"
            >
                <h2>{title}</h2>
                <p>{desc}</p>
            </Link>
        </ScaleIn>
    );
};
