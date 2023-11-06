import Image from 'next/image';
import React from 'react';

export const RealisationsCard = ({ realisation }) => {
    const { title, slug, logo, cover, featured, description } = realisation.fields;
    const coverURL = `https:${realisation.fields.cover.fields.file.url}`;
    const coverWidth = realisation.fields.cover.fields.file.details.image.width;
    const coverHeight = realisation.fields.cover.fields.file.details.image.height;
    return (
        <article>
            <div className="realisation-image">
                <Image src={coverURL} width={coverWidth} height={coverHeight} alt={`${title} cover`} priority />
            </div>
            <div className="realisation-title">{title}</div>
        </article>
    );
};
