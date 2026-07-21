import React from "react";
// import "./About.css";

const About = () => {
    return (
        <section id="about" className="py-5 section-dark fade-up">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-4">
                    <h2 className="display-5 fw-bold text-white">
                        About <span className="accent">Me</span>
                    </h2>
                    <p className="text-secondary mt-2">
                        Passionate Full Stack MERN Developer
                    </p>
                </div>

                {/* About Text */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <p className="lead text-light">
                            I'm <strong>Ritik Chaurasiya</strong>, a Full Stack MERN Developer
                            with a strong foundation in building responsive, scalable,
                            and user-centric web applications. I enjoy transforming ideas
                            into efficient digital solutions through clean code, modern
                            technologies, and intuitive user experiences.
                        </p>

                        <p className="text-secondary">
                            My expertise includes developing dynamic frontend interfaces,
                            designing secure backend APIs, managing databases, and deploying
                            complete web applications with a focus on performance,
                            maintainability, and best development practices.
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="row g-2 mt-4 justify-content-center">
                    {[
                        "React.js",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "JavaScript",
                        "Bootstrap",
                        "HTML5",
                        "CSS3",
                        "Git",
                        "GitHub",
                    ].map((skill, i) => (
                        <div key={i} className="col-auto">
                            <span className="badge bg-accent px-3 py-2">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Card */}
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6">
                        <div className="card service-card border-0">
                            <div className="card-body p-4">
                                <h4 className="text-white mb-3">
                                    What I Offer
                                </h4>

                                <ul className="list-unstyled text-light lead">
                                    <li>✔ Full Stack MERN Application Development</li>
                                    <li>✔ Responsive & Modern User Interface Design</li>
                                    <li>✔ RESTful API Development & Integration</li>
                                    <li>✔ Database Design & Management</li>
                                    <li>✔ Performance Optimization & Deployment</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;