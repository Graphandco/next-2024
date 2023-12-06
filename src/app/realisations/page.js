import { client } from '@/lib/contentful.js';
import Link from 'next/link';
import { RealisationsCard } from './RealisationsCard';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '@/components/UI/Button';

const RealisationsPage = async () => {
    const realisations = await client.getEntries({ content_type: 'realisations' });
    const realisationsText = await client.getEntry('6HEClUsi34W1R4jV3wyKJQ');

    return (
        <section id="realisations">
            <div className="container">
                <h1>Réalisations</h1>
            </div>
            <div className="realisations-header">
                <div className="realisations-description bg-white/5 p-5">{documentToReactComponents(realisationsText?.fields?.content)}</div>
                <div className="realisations-cta bg-primary h-full flex flex-col justify-center items-center p-5">
                    <div className="realisations-cta-title mb-3 text-secondary">Envie d'échanger sur votre projet ?</div>
                    <Button secondary>
                        <Link href="/contact">Contactez-nous!</Link>
                    </Button>
                </div>
            </div>
            <div className="realisations-grid">
                {realisations?.items?.map((realisation, index) => (
                    <RealisationsCard key={index} realisation={realisation} />
                ))}
            </div>
        </section>
    );
};
export default RealisationsPage;
