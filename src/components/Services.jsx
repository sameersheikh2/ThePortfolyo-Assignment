const Services = ({ services }) => {
    return (
        <div className="w-[85%] mt-28 m-auto">
            <h2 className="text-neutral-400 text-xl tracking-wider mb-8">Services That I Provide</h2>
            <div className="flex flex-wrap gap-4 justify-around items-center">
                {services?.map((service) => (
                    <div
                        key={service?._id}
                        className="rounded-xl w-[300px] h-[350px] pt-2 bg-transparent overflow-hidden border-[1px] border-neutral-600 text-center"
                    >
                        <img className="object-cover bg-red-400 m-auto rounded-full h-[150px] w-[150px]" src={service?.image.url} alt="" />
                        <h2 className="text-2xl mb-9 font-medium mt-2 font-mono">{service?.name}</h2>
                        <div className="bg-neutral-800 p-3 rounded-b-lg text-center flex items-center justify-center text-neutral-400 min-h-[120px]">
                            <p>{service?.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
