import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Services = ({ services }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div id="services" className="w-[85%] mt-28 m-auto">
            <motion.h2
                ref={ref}
                initial={{ opacity: 0, x: -500 }}
                animate={controls}
                variants={{ visible: { opacity: 1, x: 0 } }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                className="text-neutral-400 text-xl tracking-wider mb-8"
            >
                Services That I Provide
            </motion.h2>
            <div className="flex flex-wrap gap-4 justify-around items-center">
                {services?.map((service) => (
                    <motion.div
                        key={service?._id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        variants={{ visible: { opacity: 1, y: 0 } }}
                        transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                        className="rounded-xl w-[300px] h-[350px] pt-2 bg-transparent overflow-hidden border-[1px] border-neutral-600 text-center"
                    >
                        <img className="object-cover bg-red-400 m-auto rounded-full h-[150px] w-[150px]" src={service?.image.url} alt="" />
                        <h2 className="text-2xl mb-9 font-medium mt-2 font-mono">{service?.name}</h2>
                        <div className="bg-neutral-800 p-3 rounded-b-lg text-center flex items-center justify-center text-neutral-400 min-h-[120px]">
                            <p>{service?.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
