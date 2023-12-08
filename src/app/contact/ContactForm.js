'use client';
import { useForm } from 'react-hook-form';
import Button from '../../components/UI/Button';

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
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_name"
                        id="floating_name"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-primary appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
                        placeholder=" "
                        required
                    />
                    <label
                        for="floating_name"
                        class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Votre nom
                    </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                        placeholder=" "
                        required
                    />
                    <label
                        for="floating_email"
                        class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Votre adresse e-mail
                    </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_object"
                        id="floating_object"
                        class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-primary appearance-none text-white focus:outline-none focus:ring-0 focus:border-white peer"
                        placeholder=" "
                        required
                    />
                    <label
                        for="floating_object"
                        class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Objet du message
                    </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <label for="message" class="block mb-2 text-sm font-medium">
                        Votre message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm bg-transparent text-white rounded-lg border-2 border-primary focus:white focus:border-white "
                        placeholder=" "
                    ></textarea>
                </div>

                {/**/}

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
