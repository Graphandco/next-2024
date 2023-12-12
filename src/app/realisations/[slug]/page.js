import { client } from '@/lib/contentful.js';
// @ts-ignore
import { notFound } from 'next/navigation';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RealisationHeader from './RealisationHeader';

const RealisationPage = async ({ params }) => {
    const realisation = await client.getEntries({ content_type: 'realisations', 'fields.slug[in]': params.slug });
    const { title, content } = realisation.items[0].fields;
    const cover = realisation.items[0].fields.cover.fields.file.url;
    // console.log(cover);
    if (!realisation.items.length) {
        return notFound();
    }
    return (
        <section id="realisation" className="realisation container">
            <RealisationHeader title={title} content={content} cover={cover} />
        </section>
    );
};
export default RealisationPage;
