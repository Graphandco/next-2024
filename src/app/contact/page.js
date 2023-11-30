import { client } from '@/lib/contentful.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ContactForm } from './ContactForm';

const ContactPage = async () => {
    const contactText = await client.getEntry('lfvMVjcDfMRiLmUZbyut8');
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
export default ContactPage;
