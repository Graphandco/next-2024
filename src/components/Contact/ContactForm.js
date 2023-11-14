'use client';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';

export const ContactForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <section id="contact-form" className="contact-form max-w-lg">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Votre nom:</label>
                    <div className="label-wrapper flex items-center gap-2">
                        {errors.name && <div className="form-error">Le champ nom est requis</div>}
                        <input type="text" className="w-full" id="username" required {...register('name', { required: true, minLength: 2 })} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Votre email:</label>
                    <div className="label-wrapper flex items-center gap-2">
                        {errors.email && <div className="form-error">Le champ email est requis</div>}
                        <input
                            type="email"
                            id="useremail"
                            className="w-full"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Objet du message:</label>
                    <div className="label-wrapper flex items-center gap-2">
                        {errors.object && <div className="form-error">Le champ objet est requis</div>}
                        <input className="w-full" type="text" id="userobject" required {...register('object', { required: true, minLength: 2 })} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Votre message:</label>
                    <div className="label-wrapper flex items-center gap-2">
                        {errors.message && <div className="form-error">Le champ message est requis</div>}
                        <textarea
                            className="w-full"
                            type="text"
                            id="usermessage"
                            rows="8"
                            required
                            {...register('message', { required: true, minLength: 2 })}
                        />
                    </div>
                </div>
                <Button onClick={handleSubmit(onSubmit)}>
                    <span>Envoyer</span>
                </Button>
            </form>
        </section>
    );
};
