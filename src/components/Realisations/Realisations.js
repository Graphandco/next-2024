import Link from 'next/link';
import Button from '../UI/Button';
import { RealisationsCard } from './RealisationsCard';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Realisations = ({ realisations, realisationsText }) => {
    return (
        <section id="realisations">
            <h1 className="container">Réalisations</h1>
            <div className="realisations-header">
                <div className="realisations-description bg-white/5 p-5">{documentToReactComponents(realisationsText.fields.content)}</div>
                <div className="realisations-cta bg-primary h-full flex flex-col justify-center items-center p-5">
                    <div className="realisations-cta-title mb-3 text-secondary">Envie d'échanger sur votre projet ?</div>
                    <Button secondary>
                        <Link href="/contact">Contactez-nous!</Link>
                    </Button>
                </div>
            </div>
            <div className="realisations-grid">
                {realisations.items.map((realisation, index) => (
                    <RealisationsCard key={index} realisation={realisation} />
                ))}
            </div>
        </section>
    );
};
