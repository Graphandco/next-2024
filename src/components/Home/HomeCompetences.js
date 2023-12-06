import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import { HomeAtouts } from './HomeAtouts';
import Button from '../UI/Button';

export const HomeCompetences = ({ competencesText, webmasterText, atouts }) => {
    return (
        <>
            <section className="home-competences">
                <div className="home-competences-wrapper container">
                    {/* <h2 className="gradient-text">{competencesText?.fields?.title}</h2> */}
                    <div className="home-competences-title">
                        <h2 className="gradient-text">
                            Nos compétences <br></br>à votre service
                        </h2>
                        <Button>
                            <Link href="/realisations">Voir nos réalisations</Link>
                        </Button>
                    </div>
                    <div className="home-competences-text">
                        <div className="home-competences-content">{documentToReactComponents(competencesText?.fields?.content)}</div>
                        <p>
                            Découvrez tout de suite <Link href="/prestations">nos prestations</Link> et trouvez celle adaptée à vos besoins !
                        </p>
                    </div>
                </div>
            </section>
            <section className="home-atouts">
                <div className="container">
                    <HomeAtouts atouts={atouts} />
                    <h2>{webmasterText?.fields?.title}</h2>
                    <div className="home-webmaster-content">{documentToReactComponents(webmasterText?.fields?.content)}</div>
                </div>
            </section>
        </>
    );
};
