import { createContext, useState } from 'react';
import { createClient } from 'contentful';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const RealisationsContext = createContext();

export const RealisationsProvider = async ({ children }) => {
    async function getData() {
        const res = await fetch(
            `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=realisations`
        );

        return res.json();
    }
    const data = await getData();

    return <RealisationsContext.Provider value={{ data }}>{children}</RealisationsContext.Provider>;
};
