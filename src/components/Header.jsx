import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Header = ({ title }) => {
    const [scrollPos, setScrollPos] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                className={`overflow-hidden p-5 w-full transition-transform ease-in duration-200 transform 
                ${scrollPos > 100 && `fixed top-0 z-50 bg-neutral-800 p-0`}
                flex justify-center items-center`}
            >
                <div className="flex lg:w-full w-[540px] md:min-w-[720px] justify-between items-center relative">
                    <h1 className="font-serif">{title.split(' ')[0]}</h1>
                    <nav className="lg:block hidden">
                        <ul className="flex font-medium justify-center items-center gap-6">
                            <Link to="home" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer">Home</li>
                            </Link>
                            <Link to="services" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer">Services</li>
                            </Link>
                            <Link to="about" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer">About</li>
                            </Link>
                            <Link to="projects" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer">Projects</li>
                            </Link>
                            <Link to="testimonials" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer">Reviews</li>
                            </Link>
                            <Link to="timeline" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer">Timeline</li>
                            </Link>
                        </ul>
                    </nav>

                    <button
                        type="button"
                        className={`hover:bg-orange-400 lg:block hidden hover:text-black px-4 py-2 outline outline-orange-400 outline-[1px] bg-black text-white duration-200 ease-out transition-all text-lg tracking-wider`}
                    >
                        CONTACT
                    </button>
                    <div className="lg:hidden block relative">
                        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl focus:outline-none">
                            {isMenuOpen ? <HiX /> : <HiMenu />}
                        </button>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.8 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed top-0 left-0 w-full h-full bg-black z-40"
                            ></motion.div>
                        )}
                    </div>
                </div>
            </motion.header>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed top-0 left-0 h-full w-full md:w-72 bg-neutral-800 p-4 z-50 overflow-y-auto"
                    >
                        <ul onClick={() => setIsMenuOpen(false)} className="flex h-full space-y-2 flex-col justify-center items-center gap-4">
                            <Link to="home" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer tracking-widest text-xl font-medium text-white">HOME</li>
                            </Link>
                            <Link to="services" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer tracking-widest text-xl font-medium text-white">SERVICES</li>
                            </Link>
                            <Link to="about" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer tracking-widest text-xl font-medium text-white">ABOUT</li>
                            </Link>
                            <Link to="projects" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer tracking-widest text-xl font-medium text-white">PROJECTS</li>
                            </Link>
                            <Link to="testimonials" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer tracking-widest text-xl font-medium text-white">REVIEWS</li>
                            </Link>
                            <Link to="timeline" spy={true} smooth={true} duration={500}>
                                <li className="cursor-pointer tracking-widest text-xl font-medium text-white">TIMELINE</li>
                            </Link>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
