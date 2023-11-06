import { Realisations } from '@/components/Realisations/Realisations';
import { client } from '@/lib/contentful.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RealisationsPage = async () => {
    // consuming the contentful api, getting the page properties
    // const test = await client.getEntry('2a5VbZigZF9TELm0x04f2V');
    const realisations = await client.getEntries({ content_type: 'realisations' });
    // const { title } = test.fields;
    // rendering the data in the desired format
    return <Realisations realisations={realisations} />;
};
export default RealisationsPage;

// async function getRealisations() {
//     const res = await fetch(
//         `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}&content_type=realisations`
//     );
//     // Recommendation: handle errors
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data !');
//     }
//     return res.json();
// }
// export default async function RealisationsPage() {
//     const realisations = await getRealisations();

//     return <Realisations realisations={realisations} />;
// }
