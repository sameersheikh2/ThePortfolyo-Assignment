const About = ({ about }) => {
    return (
        <>
            <div className="w-[85%] m-auto mt-28">
                <h2 className="text-neutral-400 text-xl tracking-wider mb-8">About Me</h2>
                <div>
                    <h3 className="text-neutral-400">{about?.quote}</h3>
                    <h1 className="text-5xl font-serif font-bold mt-5 mb-10 max-w-[37rem]">{about?.subTitle}</h1>
                </div>
                <div>
                    <p className="">{about?.description}</p>
                </div>
            </div>
        </>
    );
};

export default About;
