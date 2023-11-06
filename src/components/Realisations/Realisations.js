import { RealisationsCard } from './RealisationsCard';

export const Realisations = ({ realisations }) => {
    return (
        <section id="realisations">
            <h1 className="container">Realisations</h1>
            <div className="realisations-grid">
                {realisations.items.map((realisation) => (
                    <RealisationsCard realisation={realisation} />
                ))}
            </div>
        </section>
    );
};
