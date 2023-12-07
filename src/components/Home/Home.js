import { HomeCompetences } from './HomeCompetences';
import { HomeHero } from './HomeHero';
import { HomeRealisations } from './HomeRealisations';
import { HomeCounters } from './HomeCounters';
import { client } from '@/lib/contentful.js';

export const Home = async () => {
    const competencesText = await client.getEntry('EwBnK5J60TpiDuSI6wEl6');
    const webmasterText = await client.getEntry('5SvxDz4fu7WooFGOMxwNtu');
    const atouts = await client.getEntries({ content_type: 'atouts' });
    const realisationsToShow = await client.getEntries({ content_type: 'realisations', 'fields.showOnHomepage[exists]': 'true' });
    return (
        <>
            <HomeHero />
            <HomeCompetences competencesText={competencesText} webmasterText={webmasterText} atouts={atouts} />
            <HomeRealisations realisationsToShow={realisationsToShow.items} />
            <HomeCounters />
        </>
    );
};
