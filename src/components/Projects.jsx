const Projects = ({ projects }) => {
    return (
        <div className="mt-32 w-[85%] m-auto">
            <h2 className="text-neutral-400 text-3xl tracking-wider mb-8">My Projects</h2>
            <div className="flex justify-center gap-4 lg:justify-between mt-10 items-center flex-wrap">
                {projects?.map((project, index) => (
                    <div
                        key={project?._id}
                        className="group hover:shadow-sm hover:shadow-neutral-600 cursor-pointer relative w-[360px] mb-24 rounded-lg h-[490px]"
                    >
                        <h1 className="absolute z-10 hidden group-hover:flex justify-center items-center w-full font-serif tracking-wider top-[20%] text-4xl">
                            Project {index + 1}
                        </h1>
                        <div className="h-[55%] rounded-t-lg overflow-hidden">
                            <img
                                className=" w-full h-full group-hover:opacity-[50%] group-hover:scale-105 ease-linear duration-200 transition-all cursor-pointer rounded-t-lg object-cover"
                                src={project?.image?.url}
                                alt=""
                            />
                        </div>

                        <div className="text-center mt-1">
                            <p className="text-xl text-white ">{project?.techStack.map((tech) => tech).join('⋅')}</p>
                            <p className="p-3 text-neutral-400 mt-1 text-lg overflow-hidden text-wrap">{project?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
