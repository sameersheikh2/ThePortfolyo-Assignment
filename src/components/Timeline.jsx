import React, { useState } from 'react';

const Timeline = ({ educations, experiences }) => {
    const [timelineSections, setTimelineSections] = useState({
        isExperienceVisible: true,
        isEducationVisible: false,
    });

    return (
        <div className="w-[85%] m-auto mt-40">
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
            <h2 className="text-neutral-400 text-3xl tracking-wider mb-8">{timelineSections.showEducation ? 'Education' : 'Experience'}</h2>
            {timelineSections.isExperienceVisible
                ? experiences?.map((experience) => (
                      <div key={experience._id} className="flex lg:flex-row flex-col justify-between lg:items-center">
                          <div className="flex flex-col gap-1">
                              <h1>{experience?.jobTitle}</h1>
                              <h2 className="text-sm text-orange-400">{experience.company_name}</h2>
                          </div>
                          <div className="flex flex-col mb-8">
                              <h3>{experience?.startDate}</h3>
                              <p className="text-xl font-light"> {experience?.summary}</p>
                              <h3>{experience?.jobLocation}</h3>
                          </div>
                          <div className="border border-b opacity-15 mb-7 bg-neutral-800"></div>
                      </div>
                  ))
                : educations?.map((education) => (
                      <div key={education._id} className="flex lg:flex-row flex-col justify-between lg:items-center">
                          <div className="flex flex-col gap-1">
                              <h1>{education?.jobTitle}</h1>
                              <h2 className="text-sm text-orange-400">{education.company_name}</h2>
                          </div>
                          <div className="flex flex-col mb-8">
                              <h3>{education?.startDate}</h3>
                              <p className="text-xl font-light"> {education?.summary}</p>
                              <h3>{education?.jobLocation}</h3>
                          </div>
                          <div className="border border-b opacity-15 mb-7 bg-neutral-800"></div>
                      </div>
                  ))}
        </div>
    );
};

export default Timeline;
