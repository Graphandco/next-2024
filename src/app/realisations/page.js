import { Realisations } from '@/components/Realisations/Realisations';
import { client } from '@/lib/contentful.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RealisationsPage = async () => {
    const realisations = await client.getEntries({ content_type: 'realisations' });
    return <Realisations realisations={realisations} />;
};
export default RealisationsPage;
