'use client';
import Link from 'next/link';
import { ScaleIn } from '../UI/ScaleIn';
import Image from 'next/image';

export const HomeRealisationsItem = ({ index, manageModal, rea }) => {
    // const { title, link, description } = rea;
    return (
        <ScaleIn>
            <Link
                href={`realisations/${rea?.link}`}
                onMouseEnter={(e) => {
                    manageModal(true, index, e.clientX, e.clientY);
                }}
                onMouseLeave={(e) => {
                    manageModal(false, index, e.clientX, e.clientY);
                }}
                className="home-project-item"
            >
                <div className="home-project-content">
                    <div className="home-project-description">
                        <h2>{rea?.title}</h2>
                        <p>{rea?.description}</p>
                    </div>
                    <div className="home-project-logo">
                        <Image
                            src={`https:${rea?.logo.fields.file.url}`}
                            width={rea?.logo.fields.file.details.image.width}
                            height={rea?.logo.fields.file.details.image.height}
                            alt={rea?.title}
                        />
                    </div>
                </div>
            </Link>
        </ScaleIn>
    );
};
