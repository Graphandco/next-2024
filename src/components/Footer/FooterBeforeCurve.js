import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export const FooterBeforeCurve = () => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
    return (
        <div className="footer-before" ref={container}>
            <motion.div style={{ height }} className="circle-container">
                <div className="circle"></div>
            </motion.div>
        </div>
    );
};
