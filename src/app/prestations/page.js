import { client } from '@/lib/contentful.js';
import { PrestationsFAQ } from './PrestationsFAQ';

const PrestationsPage = async () => {
    const questionsList = await client.getEntry('3bBgpDjfQgpKj7U8CyObu3');
    console.log(questionsList.fields);

    return (
        <section id="prestations">
            <div className="container">
                <h1>
                    <span>Prestations</span>
                </h1>
                <PrestationsFAQ />
            </div>
        </section>
    );
};
export default PrestationsPage;
