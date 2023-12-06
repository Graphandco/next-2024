import { client } from '@/lib/contentful.js';
import { PrestationsFAQ } from './PrestationsFAQ';

const PrestationsPage = async () => {
    const questionsList = await client.getEntry('3bBgpDjfQgpKj7U8CyObu3');

    return (
        <section id="prestations">
            <div className="container">
                <h1>Prestations</h1>
                <PrestationsFAQ questions={questionsList.fields} />
            </div>
        </section>
    );
};
export default PrestationsPage;
