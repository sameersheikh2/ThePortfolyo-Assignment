import React from 'react';

function Contact({ social_handles, about }) {
    return (
        <div className="w-[85%]  mt-52 m-auto">
            <h2 className="text-neutral-400 text-xl mb-10 tracking-wider">Contact</h2>
            <h2 className="text-2xl font-bold">Have Any Project Idea?</h2>
            <h2 className="text-2xl font-bold">Please Drop A Message</h2>
            <div className="flex mt-3 mb-10 justify-center items-center w-full flex-col md:w-[90%] lg:flex-row">
                <h2 className="text-lg text-neutral-400">{`Get in touch and let me know how i can help. Fill out the form and i'll be in touch as soon as possible.`}</h2>
                <div className="lg:w-1/2 w-full p-8 flex flex-col justify-start lg:justify-center items-start lg:items-center">
                    <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
                    <div className="w-48 flex flex-col justify-start items-start mb-2">
                        <h3 className="text-lg font-medium text-left">Address:</h3>
                        <span>{about?.address}</span>
                    </div>
                    <div className="w-48 flex items-start justify-start flex-col mb-2">
                        <h3 className="text-lg font-medium text-left">Phone:</h3>
                        <span>{about?.phoneNumber}</span>
                    </div>
                    <div className="w-48 flex flex-col items-start justify-start b-2">
                        <h3 className="text-lg font-medium text-left">Email:</h3>
                        <span>{about?.contactEmail}</span>
                    </div>
                    <div className="flex items-start justify-start w-[190px] space-x-4 mt-4">
                        {social_handles?.map((social) => (
                            <img key={social?._id} width={28} height={28} src={social?.image?.url} className="text-blue-500 hover:text-blue-700" />
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 md:w-3/4 w-full bg-neutral-800 rounded-xl p-8">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="e. g John Doe"
                                className="placeholder:text-neutral-300 placeholder:font-light mt-1 bg-neutral-500 outline-none p-2 w-full  rounded-md"
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
                                placeholder="e.g johndoe@mail.com"
                                className="placeholder:text-neutral-300 placeholder:font-light mt-1 p-2 w-full bg-neutral-500 outline-none rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Phone
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
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
                        <button
                            type="submit"
                            className="w-full bg-white text-black px-4 py-2 rounded-md hover:bg-black hover:text-white font-semibold text-lg  transition-colors  duration-300"
                        >
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
