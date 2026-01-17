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
                        MERN Stack Developer & Problem Solver
                    </p>
                </div>

                {/* About Text */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <p className="lead text-light">
                            I’m a passionate <strong>MERN Stack Developer</strong> and Computer Science
                            student focused on building <strong>beautiful, fast, and scalable</strong>
                            web applications. I turn ideas into real products using clean code,
                            modern UI/UX principles and strong problem-solving.
                        </p>

                        <p className="text-secondary">
                            My work blends modern frontend experience with reliable backend engineering.
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="row g-2 mt-4 justify-content-center">
                    {[
                        "React",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "JavaScript",
                        "Bootstrap",
                        "HTML & CSS",
                        "Git & GitHub",
                    ].map((skill, i) => (
                        <div key={i} className="col-auto">
                            <span className="badge bg-accent px-3 py-2">{skill}</span>
                        </div>
                    ))}
                </div>

                {/* Card */}
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6">
                        <div className="card service-card border-0">
                            <div className="card-body p-4">
                                <h4 className="text-white mb-3">🤝 What I Bring</h4>
                                <ul className="list-unstyled text-light lead">
                                    <li>⚡ Full-stack MERN development</li>
                                    <li>🎨 Professional UI / UX</li>
                                    <li>🔐 Secure backend APIs</li>
                                    <li>☁️ Cloud deployment</li>
                                    <li>🚀 Performance optimization</li>
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
