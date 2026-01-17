import React from "react";
// import "./Education.css";

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Technology (B-Tech)",
            institution: "Goel Institute of Technology and Management",
            year: "2022 – 2026",
            description:
                "Studying core computer science subjects including data structures, programming, web development and database management.",
        },
        {
            id: 2,
            degree: "Higher Secondary (12th)",
            institution: "UP Board",
            year: "2021 - 2022",
            description:
                "Completed senior secondary education with focus on mathematics and computer science.",
        },
    ];

    return (
        <section id="education" className="py-5 section-dark fade-up">
            <div className="container">

                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="text-white fw-bold display-6">
                        My <span className="accent">Education</span>
                    </h2>
                </div>

                {/* Education List */}
                <div className="row justify-content-center g-4">
                    {educationData.map((edu) => (
                        <div key={edu.id} className="col-md-8">
                            <div className="education-card p-4 rounded shadow">
                                <h4 className="text-white fw-semibold">{edu.degree}</h4>
                                <h6 className="text-secondary">{edu.institution}</h6>
                                <small className="text-accent">{edu.year}</small>
                                <p className="text-secondary mt-2">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
