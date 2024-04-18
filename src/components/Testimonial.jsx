import React from 'react';
import Slider from 'react-slick';

const Testimonial = ({ testimonials }) => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 100,
        cssEase: 'linear',
        slidesToShow: 1,
        speed: 1500,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplaySpeed: 3500,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplaySpeed: 3500,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 3500,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };
    return (
        <div className="w-[90%] h-[600px] md:h-[500px] m-auto mt-32 mb-32">
            <h2 className="text-neutral-400 text-xl tracking-wider mb-8">Testimonials</h2>
            <div className="slider-container flex flex-col justify-center w-full">
                <Slider {...settings}>
                    {testimonials?.map((testimonial) => (
                        <div className="bg-black px-11 py-16 rounded-xl" key={testimonial?._id}>
                            <div className="flex text-white justify-start items-start gap-x-10 mb-10">
                                <img src={testimonial?.image?.url} width={50} height={50} alt="" />
                                <div>
                                    <h1 className="text-2xl">{testimonial?.name}</h1>
                                    <h3>{testimonial?.position}</h3>
                                </div>
                            </div>
                            <p className="text-lg">&quot;{testimonial?.review}&quot;</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
