import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Realisation = ({ realisation }) => {
    const { title, content } = realisation;
    return (
        <section id="realisation" className="container">
            <h1>
                <span>{title}</span>
            </h1>
            <div>{documentToReactComponents(content)}</div>
        </section>
    );
};
