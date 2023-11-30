import Accordions from '../../components/UI/Accordions';

export const PrestationsFAQ = () => {
    const questions = [
        {
            title: 'Comment ?',
            content: 'comme ça',
        },
        {
            title: 'Comment 1 ?',
            content: 'comme ça 1',
        },
        {
            title: 'Comment ? 2',
            content: 'comme ça 2',
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
