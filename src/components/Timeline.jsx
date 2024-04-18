import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Timeline = ({ educations, experiences }) => {
    const [timelineSections, setTimelineSections] = useState({
        isExperienceVisible: true,
        isEducationVisible: false,
    });

    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleString('en-us', { month: 'long' })} ${date.getFullYear()}`;
    };

    return (
        <div id="timeline" className="w-[85%] m-auto mt-40">
            <div className="flex justify-center mb-10 items-center gap-5">
                <button
                    type="button"
                    className={`${timelineSections.isExperienceVisible ? `bg-orange-400 text-black` : ``} hover:bg-orange-400 hover:text-black px-4 py-2 outline outline-orange-400 bg-black text-white duration-200 ease-out transition-all  rounded-3xl text-lg tracking-wider mb-8`}
                    onClick={() =>
                        setTimelineSections({
                            isExperienceVisible: true,
                            isEducationVisible: false,
                        })
                    }
                >
                    EXPERIENCE
                </button>
                <button
                    type="button"
                    className={`${timelineSections.isEducationVisible ? `bg-orange-400 text-white` : ``} hover:bg-orange-400 hover:text-black px-4 py-2 outline outline-orange-400 bg-black duration-200 ease-out transition-all text-white rounded-3xl text-lg tracking-wider mb-8`}
                    onClick={() =>
                        setTimelineSections({
                            isExperienceVisible: false,
                            isEducationVisible: true,
                        })
                    }
                >
                    EDUCATION
                </button>
            </div>
            <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: -50 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
                className="text-neutral-400 text-3xl tracking-wider mb-8"
            >
                {timelineSections.isEducationVisible ? 'Education' : 'Experience'}
            </motion.h2>
            {timelineSections.isExperienceVisible
                ? experiences?.map((experience) => (
                      <motion.div
                          key={experience._id}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          variants={{ visible: { opacity: 1, y: 0 } }}
                          transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                          className="flex lg:flex-row flex-col justify-between lg:items-center"
                      >
                          <div className="flex flex-col gap-1">
                              <h1>{experience?.jobTitle}</h1>
                              <h2 className="text-sm text-orange-400">{experience.company_name}</h2>
                          </div>
                          <div className="flex flex-col mb-8">
                              <h3>{`${formatDate(experience?.startDate)} - ${formatDate(experience?.endDate)}`}</h3>
                              <p className="text-xl font-light"> {experience?.summary}</p>
                              <h3>{experience?.jobLocation}</h3>
                          </div>
                          <div className="border border-b opacity-15 mb-7 bg-neutral-800"></div>
                      </motion.div>
                  ))
                : educations?.map((education) => (
                      <motion.div
                          key={education._id}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          variants={{ visible: { opacity: 1, y: 0 } }}
                          transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
                          className="flex lg:flex-row flex-col justify-between lg:items-center"
                      >
                          <div className="flex flex-col gap-1">
                              <h1>{education?.jobTitle}</h1>
                              <h2 className="text-sm text-orange-400">{education.company_name}</h2>
                          </div>
                          <div className="flex flex-col mb-8">
                              <h3>{`${formatDate(education?.startDate)} - ${formatDate(education?.endDate)}`}</h3>
                              <p className="text-xl font-light"> {education?.summary}</p>
                              <h3>{education?.jobLocation}</h3>
                          </div>
                          <div className="border border-b opacity-15 mb-7 bg-neutral-800"></div>
                      </motion.div>
                  ))}
        </div>
    );
};

export default Timeline;
