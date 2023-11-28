import { Prestations } from '@/components/Prestations/Prestations';
import { client } from '@/lib/contentful.js';

const PrestationsPage = async () => {
    const questionsList = await client.getEntry('3bBgpDjfQgpKj7U8CyObu3');
    console.log(questionsList.fields);

    return (
        <section id="prestations">
            <div className="container">
                <h1>
                    <span>Prestations</span>
                </h1>
                <Prestations />
            </div>
        </section>
    );
};
export default PrestationsPage;
