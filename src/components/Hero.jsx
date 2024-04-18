import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Hero = ({ about }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <main id="home" className="flex overflow-hidden w-[85%] mt-16 flex-col-reverse md:flex-row m-auto justify-center items-center">
            <div className="text-center md:text-left">
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, x: -400 }}
                    animate={controls}
                    variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -400 } }}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                    className="md:text-3xl text-xl "
                >
                    My Name is {about?.name}
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: -600 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1.3, ease: 'easeInOut' }}
                    className="font-serif font-semibold mb-8 md:text-6xl lg:text-8xl text-5xl my-10"
                >{`I'm a ${about?.title}`}</motion.h2>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.6, ease: 'easeInOut' }}
                    className=" text-sm md:text-base "
                >
                    {about?.subTitle}
                </motion.span>
            </div>
            <motion.img
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                className="mb-6 rounded-full"
                src={about?.avatar?.url}
                width={300}
                height={400}
                alt=""
            />
        </main>
    );
};

export default Hero;
