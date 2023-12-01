import Accordions from '../../components/UI/Accordions';

export const PrestationsFAQ = ({ questions }) => {
    const formatedQuestions = questions.question?.map(({ key: title, value: content, ...rest }) => ({
        title,
        content,
        ...rest,
    }));

    return (
        <section id="faq">
            <h2>FAQ</h2>
            <div className="faq-wrapper">
                <Accordions questions={formatedQuestions} />
                <img src="images/faq.svg" alt="" />
            </div>
        </section>
    );
};
