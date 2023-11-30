import { client } from '@/lib/contentful.js';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RealisationPage = async ({ params }) => {
    const realisation = await client.getEntries({ content_type: 'realisations', 'fields.slug[in]': params.slug });
    const { title, content } = realisation.items[0].fields;
    if (!realisation.items.length) {
        return notFound();
    }
    return (
        <section id="realisation" className="container">
            <h1>
                <span>{title}</span>
            </h1>
            <div>{documentToReactComponents(content)}</div>
        </section>
    );
};
export default RealisationPage;
