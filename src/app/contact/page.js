import { client } from '@/lib/contentful.js';
import { Contact } from '@/components/Contact/Contact';
const ContactPage = async () => {
    const contactText = await client.getEntry('lfvMVjcDfMRiLmUZbyut8');
    return <Contact contactText={contactText} />;
};
export default ContactPage;
