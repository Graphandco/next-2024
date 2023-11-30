import Accordions from '../../components/UI/Accordions';

export const PrestationsFAQ = () => {
    const questions = [
        {
            title: 'Suis-je propriétaire de mon nom de domaine ?',
            content:
                'Le nom de domaine est enregistré à VOTRE nom, nous en assurons simplement la gestion. Vous pouvez le récupérer ou le transférer à tout moment.',
        },
        {
            title: "Je n'y connais rien en informatique, serai-je capable d'ajouter des actualités sur mon site ?",
            content:
                'Bien sûr !Nos sites sont conçus pour que les contenus (textes, images...) puissent être édités facilement, sans besoin de grosses connaissances en informatique. Nous vous formerons pour une prise en main rapide et efficace.',
        },
        {
            title: 'Mon ancien site buggait souvent. Comment me prémunir de ce risque ?',
            content:
                'Nos sites sont constamment maintenus à jour pour éviter cela, les éventuels bugs sont éliminés avant livraison et nous assurons le support technique tout au long du partenariat.',
        },
        {
            title: 'Je suis pressé(e) ! Combien de temps prendra la création de mon site ?',
            content:
                "Tout dépend du site que vous souhaitez avoir. Les sites les plus complexes prennent bien sûr plus de temps, mais si vous êtes réactif et nous donnez toutes les informations (oui c'est un travail d'équipe !), le délai habituel est de 2 à 3 semaines en moyenne.",
        },
    ];
    return (
        <section id="faq">
            {/* {questions.map((question, index) => (
                <span>{question.q}</span>
            ))} */}
            <Accordions questions={questions} />
        </section>
    );
};
