'use client';
import Image from 'next/image';
import React from 'react';

export const RealisationsCard = ({ realisation }) => {
    const { title, slug, logo, cover, featured, description } = realisation.fields;
    const coverURL = `https:${realisation.fields.cover.fields.file.url}`;
    const coverWidth = realisation.fields.cover.fields.file.details.image.width;
    const coverHeight = realisation.fields.cover.fields.file.details.image.height;
    return (
        <article>
            <span>{title}</span>
            <Image src={coverURL} width={coverWidth} height={coverHeight} alt={`${title} cover`} />
        </article>
    );
};
