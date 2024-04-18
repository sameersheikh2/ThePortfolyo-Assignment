import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Skills = ({ skills }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <section id="skills" className="w-[85%] m-auto mt-24">
            <motion.h2
                ref={ref}
                initial={{ opacity: 0, x: -500 }}
                animate={controls}
                variants={{ visible: { opacity: 1, x: 0 } }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                className="text-neutral-400 text-xl tracking-wider mb-8"
            >
                Skills
            </motion.h2>
            <div className="flex flex-wrap justify-between items-center">
                {skills?.map((skill) => (
                    <motion.div
                        key={skill?._id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        variants={{ visible: { opacity: 1, y: 0 } }}
                        transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                        className="my-10 w-full md:w-[40%]"
                    >
                        <div className="flex justify-between items-center text-neutral-400 text-xl">
                            <span>{skill?.name}</span>
                            <span>{skill?.percentage} %</span>
                        </div>
                        <div className="h-1 mt-4 bg-neutral-600 rounded-s-full rounded-e-full">
                            <div className={`rounded-s-full rounded-e-full h-full bg-white`} style={{ width: `${skill?.percentage}%` }}></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
