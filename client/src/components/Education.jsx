import React from "react";
// import "./Education.css";

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
            institution: "Goel Institute of Technology and Management, Lucknow",
            year: "2022 – 2026",
            description:
                "Graduated with a strong foundation in software development, data structures, algorithms, database management, operating systems, computer networks, and full-stack web development. Completed multiple MERN Stack projects with a focus on building scalable and responsive web applications.",
        },
        {
            id: 2,
            degree: "Higher Secondary Education (Class XII)",
            institution: "Uttar Pradesh Board",
            year: "2021 – 2022",
            description:
                "Completed higher secondary education with a focus on Mathematics and Computer Science, developing strong analytical and problem-solving skills.",
        },
    ];

    return (
        <section id="education" className="py-5 section-dark fade-up">
            <div className="container">

                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-white">
                        Education <span className="accent">Journey</span>
                    </h2>

                    <p className="text-secondary">
                        My academic background and technical learning.
                    </p>
                </div>

                {/* Education Cards */}
                <div className="row justify-content-center g-4">
                    {educationData.map((edu) => (
                        <div key={edu.id} className="col-lg-8">
                            <div className="education-card p-4 rounded shadow">

                                <div className="d-flex justify-content-between flex-wrap mb-2">
                                    <h4 className="text-white fw-semibold mb-2">
                                        {edu.degree}
                                    </h4>

                                    <span className="badge bg-accent px-3 py-2">
                                        {edu.year}
                                    </span>
                                </div>

                                <h6 className="text-secondary mb-3">
                                    {edu.institution}
                                </h6>

                                <p className="text-secondary mb-0">
                                    {edu.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;