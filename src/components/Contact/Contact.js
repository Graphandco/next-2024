import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ContactForm } from './ContactForm';

export const Contact = ({ contactText }) => {
    return (
        <section id="contact">
            <div className="container">
                <h1>
                    <span>Contact</span>
                </h1>
                <div>{documentToReactComponents(contactText.fields.content)}</div>
                <ContactForm />
            </div>
        </section>
    );
};
