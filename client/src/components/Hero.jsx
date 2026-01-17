import React from "react";
// import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-section fade-up" id="hero">
            <div className="container text-center">

                {/* Title */}
                <h1 className="display-4 fw-bold text-white mb-3">
                    Hi, I'm <span className="accent">Ritik Chaurasiya!!</span> 👋
                </h1>

                {/* Subtitle */}
                <p className="lead text-secondary mb-4">
                    MERN Stack Developer — building fast, clean & modern web apps.
                </p>

                {/* Hero Buttons */}
                <div className="d-flex justify-content-center gap-3">
                    <a href="#projects" className="btn btn-accent px-4 py-2">
                        View Projects
                    </a>

                    <a href="#contact" className="btn btn-outline-accent px-4 py-2">
                        Contact Me
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
