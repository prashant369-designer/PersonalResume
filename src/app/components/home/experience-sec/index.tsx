import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2023",
            title: "HTML Developer",
            company: "https://codegenit.com/",
            type: "Fulltime",
            description:"Developed and maintained scalable mobile app features for the HiHello social platform using Node.js, Express.js, and MongoDB. Implemented user authentication, profile management, and real-time messaging features."
        },
        {
            year: "2024",
            title: "Front End Developer",
            company: "https://www.codegenit.com/",
            type: "Fulltime",
            description: "Gained hands-on experience by working on live production projects, including e-commerce platforms and elearning web applications.Built and maintained full-stack features using React.js (frontend), Node.js + Express.js (backend), and MongoDB/MySQL (database), ensuring responsive, scalable, and secure performance across platforms."
        },
        {
            year: "2025",
            title: "MERN Stack Developer",
            company: "https://www.brancosoft.com/",
            type: "Fulltime",
            description: "Contributed to the development of live healthcare web applications, delivering end-to-end features including Admin Dashboards, Doctor Panels, Clinic Panels, and Patient Interfaces. Implemented role-based authentication, secure login systems, and data access control using JWT and middleware practices."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;