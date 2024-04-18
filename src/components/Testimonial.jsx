import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { motion, useAnimation, useInView } from 'framer-motion';

const Testimonial = ({ testimonials }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

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
        pauseOnHover: false,
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
        <div id="testimonials" ref={ref} className="w-[90%] h-[600px] md:h-[500px] m-auto mt-32 mb-32">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                className="text-neutral-400 text-xl tracking-wider mb-8"
            >
                Testimonials
            </motion.h2>
            <div className="slider-container flex flex-col justify-center w-full">
                <Slider {...settings}>
                    {testimonials?.map((testimonial) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={controls}
                            variants={{ visible: { opacity: 1, y: 0 } }}
                            transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                            className="bg-black px-11 py-16 rounded-xl"
                            key={testimonial?._id}
                        >
                            <div className="flex text-white justify-start items-start gap-x-10 mb-10">
                                <img src={testimonial?.image?.url} width={50} height={50} alt="" />
                                <div>
                                    <h1 className="text-2xl">{testimonial?.name}</h1>
                                    <h3>{testimonial?.position}</h3>
                                </div>
                            </div>
                            <p className="text-lg">&quot;{testimonial?.review}&quot;</p>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
