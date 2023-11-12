import { Realisation } from '@/components/Realisations/Realisation';
import { client } from '@/lib/contentful.js';
import { notFound } from 'next/navigation';

const RealisationPage = async ({ params }) => {
    const realisation = await client.getEntries({ content_type: 'realisations', 'fields.slug[in]': params.slug });

    if (!realisation.items.length) {
        return notFound();
    }
    return <Realisation realisation={realisation.items[0].fields} />;
};
export default RealisationPage;
