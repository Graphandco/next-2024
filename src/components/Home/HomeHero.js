'use client';
import LottieRocket from '@/lottie/LottieRocket';
import Button from '../UI/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const HomeHero = () => {
    const rocket = {
        type: 'spring',
        damping: 15,
        stiffness: 200,
        delay: 0.3,
    };
    const content = {
        duration: 0.3,
    };
    return (
        <section className="hero container" id="hero">
            <motion.div className="hero-content" transition={content} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <div className="hero-subtitle">Un métier, une passion</div>
                <h1>
                    <span className="hero-title">Création de sites web</span>
                </h1>
                <div className="hero-description">
                    &#8618; Nous sommes spécialisés dans la réalisation de sites web. Moderne et intuitif, votre site sera un puissant levier pour accroitre la
                    vitalité de votre entreprise.
                </div>
                <div className="hero-cta">
                    <Button>
                        <Link href="/prestations">Voir nos prestations</Link>
                    </Button>
                </div>
            </motion.div>
            <motion.div className="hero-lottie" transition={rocket} initial={{ y: '700px' }} animate={{ y: '0px' }}>
                <LottieRocket />
            </motion.div>
        </section>
    );
};
