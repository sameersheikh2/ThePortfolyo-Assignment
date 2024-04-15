const Skills = ({ skills }) => {
    return (
        <section className="w-[85%] m-auto mt-24">
            <h2 className="text-neutral-400 text-xl tracking-wider mb-8">Skills</h2>
            {skills?.map((skill) => (
                <div key={skill?._id} className="my-10">
                    <div className="flex justify-between items-center text-neutral-400 text-xl">
                        <span>{skill?.name}</span>
                        <span>{skill?.percentage} %</span>
                    </div>
                    <div className="h-1 mt-4 bg-neutral-600 rounded-s-full rounded-e-full">
                        <div className={`rounded-s-full rounded-e-full h-full w-[$ bg-white`} style={{ width: `${skill?.percentage}%` }}></div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
