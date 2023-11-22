import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import { HomeAtouts } from './HomeAtouts';

export const HomeCompetences = ({ competencesText, webmasterText, atouts }) => {
    return (
        <section className="home-competences container">
            <h2>{competencesText?.fields?.title}</h2>
            <div className="home-competences-wrapper">
                <div className="home-competences-text">
                    <div className="home-competences-content">{documentToReactComponents(competencesText?.fields?.content)}</div>
                    <p>
                        Découvrez tout de suite <Link href="/prestations">nos prestations</Link> et trouvez celle adaptée à vos besoins !
                    </p>
                </div>
                <HomeAtouts atouts={atouts} />
            </div>
            <h3>{webmasterText?.fields?.title}</h3>
            <div className="home-webmaster-content">{documentToReactComponents(webmasterText?.fields?.content)}</div>
        </section>
    );
};
