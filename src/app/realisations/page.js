import { Realisations } from '@/components/Realisations/Realisations';
import { client } from '@/lib/contentful.js';

const RealisationsPage = async () => {
    const realisations = await client.getEntries({ content_type: 'realisations' });
    const realisationsText = await client.getEntry('6HEClUsi34W1R4jV3wyKJQ');

    return <Realisations realisations={realisations} realisationsText={realisationsText} />;
};
export default RealisationsPage;
