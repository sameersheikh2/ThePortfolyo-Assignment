import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Projects = ({ projects }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div id="projects" className="mt-32 w-[85%] m-auto">
            <motion.h2
                ref={ref}
                initial={{ opacity: 0, x: -500 }}
                animate={controls}
                variants={{ visible: { opacity: 1, x: 0 } }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                className="text-neutral-400 text-xl tracking-wider mb-8"
            >
                Projects
            </motion.h2>
            <div className="flex justify-center gap-4 lg:justify-between mt-10 items-center flex-wrap">
                {projects?.map((project, index) => (
                    <motion.div
                        key={project?._id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        variants={{ visible: { opacity: 1, y: 0 } }}
                        transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                        className="group hover:shadow-sm hover:shadow-neutral-600 cursor-pointer relative w-[360px] mb-24 rounded-lg h-auto md:h-[550px]"
                    >
                        <h1 className="absolute z-10 hidden group-hover:flex justify-center items-center w-full font-serif tracking-wider top-[20%] text-4xl">
                            Project {index + 1}
                        </h1>
                        <div className="h-[55%] rounded-t-lg overflow-hidden">
                            <img
                                className="w-full h-full group-hover:opacity-[50%] group-hover:scale-105 ease-linear duration-200 transition-all cursor-pointer rounded-t-lg object-cover"
                                src={project?.image?.url}
                                alt=""
                            />
                        </div>
                        <div className="text-center mt-1">
                            <p className="text-xl text-white ">{project?.techStack.map((tech) => tech).join('⋅')}</p>
                            <p className="p-3 text-neutral-400 mt-1 text-lg overflow-hidden text-wrap">{project?.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
