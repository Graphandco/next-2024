import { client } from '@/lib/contentful.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const PolitiqueConfidentialite = async () => {
    const Politique = await client.getEntry('20TucLu9CyN1kmNY0lYkD9');
    return (
        <section id="politique">
            <div className="container">
                <h1>Politique de confidentialité</h1>
                <div>{documentToReactComponents(Politique?.fields?.content)}</div>
            </div>
        </section>
    );
};
export default PolitiqueConfidentialite;
