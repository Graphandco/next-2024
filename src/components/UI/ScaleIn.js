'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ScaleIn = ({ children }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['0 1', '1.33 1'],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
    return (
        <motion.div
            className="flex"
            ref={targetRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            {children}
        </motion.div>
    );
};
