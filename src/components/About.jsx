import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const About = ({ about }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        console.log(inView);
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <>
            <div id="about" className="overflow-hidden w-[85%] m-auto mt-28">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, x: -500 }}
                    animate={controls}
                    variants={{ visible: { opacity: 1, x: 0 } }}
                    transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                    className="text-neutral-400 text-xl tracking-wider mb-8"
                >
                    About Me
                </motion.h2>
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: 400 }}
                        animate={controls}
                        variants={{ visible: { opacity: 1, x: 0 } }}
                        transition={{ delay: 0.6, duration: 1.1, ease: 'easeInOut' }}
                        className="text-neutral-400"
                    >
                        {about?.quote}
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, x: -500 }}
                        animate={controls}
                        variants={{ visible: { opacity: 1, x: 0 } }}
                        transition={{ delay: 0.7, duration: 1.3, ease: 'easeInOut' }}
                        className="text-5xl font-serif font-bold mt-5 mb-10 max-w-[37rem]"
                    >
                        {about?.subTitle}
                    </motion.h1>
                </div>
                <div>
                    <motion.p
                        initial={{ opacity: 0, x: -1000 }}
                        animate={controls}
                        variants={{ visible: { opacity: 1, x: 0 } }}
                        transition={{ delay: 1.4, duration: 1.8, ease: 'easeInOut' }}
                        className=""
                    >
                        {about?.description}
                    </motion.p>
                </div>
            </div>
        </>
    );
};

export default About;
