const Hero = ({ about }) => {
    return (
        <main className="flex w-[85%] mt-16 flex-col-reverse md:flex-row m-auto justify-center items-center">
            <div className="text-center md:text-left">
                <h1 className="md:text-3xl text-xl ">My Name is {about?.name}</h1>
                <h2 className="font-serif font-semibold mb-8 md:text-6xl lg:text-8xl text-5xl my-10">{`I'm a ${about?.title}`}</h2>
                <span className=" text-sm md:text-base ">{about?.subTitle}</span>
            </div>
            <img className="mb-6" src={about?.avatar?.url} width={300} height={400} alt="" />
        </main>
    );
};

export default Hero;
