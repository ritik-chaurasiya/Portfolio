// import React from "react";

// const Hero = () => {
//     return (
//         <section className="hero-section fade-up" id="hero">
//             <div className="container text-center">

//                 {/* Small Badge */}
//                 <span className="badge bg-primary px-3 py-2 rounded-pill mb-4">
//                     Full Stack MERN Developer
//                 </span>

//                 {/* Title */}
//                 <h1 className="display-3 fw-bold text-white mb-3">
//                     Hi, I'm <span className="accent">Ritik Chaurasiya</span>
//                 </h1>

//                 {/* Subtitle */}
//                 <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: "700px" }}>
//                     I design and develop responsive, scalable, and user-friendly web
//                     applications using React, Node.js, Express.js, and MongoDB,
//                     delivering clean code and modern digital experiences.
//                 </p>

//                 {/* Buttons */}
//                 <div className="d-flex justify-content-center gap-3 flex-wrap">
//                     <a href="#projects" className="btn btn-accent px-4 py-2">
//                         Explore Projects
//                     </a>

//                     <a href="#contact" className="btn btn-outline-accent px-4 py-2">
//                         Let's Connect
//                     </a>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Hero;

import React from "react";

const Hero = () => {
    return (
        <section className="hero-section fade-up" id="hero">
            <div className="container text-center">

                {/* Badge */}
                <span className="badge bg-primary px-3 py-2 rounded-pill mb-4">
                    Available for Opportunities
                </span>

                {/* Heading */}
                <h1 className="display-3 fw-bold text-white mb-3">
                    Hi, I'm <span className="accent">Ritik Chaurasiya</span>
                </h1>

                {/* Role */}
                <h3 className="fw-semibold text-light mb-3">
                    Full Stack MERN Developer
                </h3>

                {/* Description */}
                <p
                    className="lead text-secondary mx-auto mb-5"
                    style={{ maxWidth: "720px" }}
                >
                    I build secure, scalable, and high-performance web applications
                    using React, Node.js, Express.js, and MongoDB. Passionate about
                    creating clean user interfaces, efficient backend systems, and
                    delivering seamless digital experiences.
                </p>

                {/* Buttons */}
                <div className="d-flex justify-content-center gap-3 flex-wrap">

                    <a
                        href="#projects"
                        className="btn btn-accent px-4 py-2"
                    >
                        View My Work
                    </a>

                    <a
                        href="/Ritik_Chaurasiya_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-accent px-4 py-2"
                    >
                        Download Resume
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Hero;