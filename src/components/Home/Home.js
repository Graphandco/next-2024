import { HomeHero } from './HomeHero';
import { HomeRealisations } from './HomeRealisations';
import { client } from '@/lib/contentful.js';

export const Home = async () => {
    const realisationsToShow = await client.getEntries({ content_type: 'realisations', 'fields.showOnHomepage[exists]': 'true' });
    return (
        <>
            <HomeHero />
            <HomeRealisations realisationsToShow={realisationsToShow.items} />
        </>
    );
};
