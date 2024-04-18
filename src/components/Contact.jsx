import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Contact = ({ social_handles, about }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <>
            <div id="contact" ref={ref} className="w-[85%] mt-52 m-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -500 }}
                    animate={controls}
                    variants={{ visible: { opacity: 1, x: 0 } }}
                    transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                    className="text-neutral-400 text-xl mb-10 tracking-wider"
                >
                    Contact
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, x: -500 }}
                    animate={controls}
                    variants={{ visible: { opacity: 1, x: 0 } }}
                    transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                    className="text-2xl font-bold mb-4"
                >
                    Have Any Project Idea?
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, x: -500 }}
                    animate={controls}
                    variants={{ visible: { opacity: 1, x: 0 } }}
                    transition={{ delay: 0.7, duration: 1.2, ease: 'easeInOut' }}
                    className="text-2xl font-bold mb-10"
                >
                    Please Drop A Message
                </motion.h2>
                <div className="flex mt-3 mb-10 justify-center items-center w-full flex-col md:w-[90%] lg:flex-row">
                    <motion.h2
                        initial={{ opacity: 0, x: -1000 }}
                        animate={controls}
                        variants={{ visible: { opacity: 1, x: 0 } }}
                        transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
                        className="text-lg text-neutral-400 mb-10"
                    >
                        Get in touch and let me know how I can help. Fill out the form and I'll be in touch as soon as possible.
                    </motion.h2>
                    <div ref={ref} className="lg:w-1/2 mb-10 w-full flex flex-col justify-start lg:justify-center items-start lg:items-center">
                        <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
                        <div className="w-48 flex flex-col justify-start items-start mb-2">
                            <h3 className="text-lg font-medium text-left">Address:</h3>
                            <span>{about?.address}</span>
                        </div>
                        <div className="w-48 flex items-start justify-start flex-col mb-2">
                            <h3 className="text-lg font-medium text-left">Phone:</h3>
                            <span>{about?.phoneNumber}</span>
                        </div>
                        <div className="w-48 flex flex-col items-start justify-start mb-2">
                            <h3 className="text-lg font-medium text-left">Email:</h3>
                            <span>{about?.contactEmail}</span>
                        </div>
                        <div className="flex items-start justify-start w-[190px] space-x-4 mt-4">
                            {social_handles?.map((social) => (
                                <img
                                    key={social?._id}
                                    width={28}
                                    height={28}
                                    src={social?.image?.url}
                                    className="text-blue-500 hover:text-blue-700"
                                />
                            ))}
                        </div>
                    </div>

                    <div ref={ref} className="lg:w-1/2 md:w-3/4 w-full bg-neutral-800 rounded-xl p-8">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="e.g. John Doe"
                                    className="placeholder:text-neutral-300 placeholder:font-light mt-1 bg-neutral-500 outline-none p-2 w-full rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="e.g. johndoe@mail.com"
                                    className="placeholder:text-neutral-300 placeholder:font-light mt-1 p-2 w-full bg-neutral-500 outline-none rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-white">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone number"
                                    className="placeholder:text-neutral-300 placeholder:font-light mt-1 p-2 w-full bg-neutral-500 outline-none rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-white">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Write Message..."
                                    className="placeholder:text-neutral-300 placeholder:font-light mt-1 p-2 w-full bg-neutral-500 outline-none rounded-md"
                                ></textarea>
                            </div>
                            <button className="w-full bg-white text-black px-4 py-2 rounded-md hover:bg-black hover:text-white font-semibold text-lg transition-colors duration-300">
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="h-16 w-full flex justify-between px-10 mt-10 text-white text-sm font-light">
                <h2>© 2024 ThePortfolio</h2>
                <h2>developed by @sameer</h2>
            </footer>
        </>
    );
};

export default Contact;
