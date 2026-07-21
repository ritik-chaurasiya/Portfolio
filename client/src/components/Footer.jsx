// import React from "react";
// // import "./Footer.css";

// const Footer = () => {
//     return (
//         <footer className="footer-dark py-4">
//             <div className="container text-center">

//                 {/* Name */}
//                 <p className="mb-2 text-light">
//                     © {new Date().getFullYear()} <span className="accent">Ritik Chaurasiya</span> • MERN Developer
//                 </p>

//                 {/* Social Links */}
//                 <div className="d-flex justify-content-center gap-3">
//                     <a href="https://github.com/ritik-chaurasiya" target="_blank" rel="noreferrer" className="footer-link">
//                         <i className="bi bi-github"></i>
//                     </a>

//                     <a href="https://www.linkedin.com/in/ritik-chaurasiya-b7342a2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="footer-link">
//                         <i className="bi bi-linkedin"></i>
//                     </a>

//                     <a href="mailto:ritikchaurasiya2005@gmail.com" className="footer-link">
//                         <i className="bi bi-envelope-fill"></i>
//                     </a>
//                 </div>

//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from "react";

const Footer = () => {
    return (
        <footer className="footer-dark py-5">
            <div className="container text-center">

                {/* Logo / Name */}
                <h4 className="fw-bold text-white mb-2">
                    Ritik <span className="accent">Chaurasiya</span>
                </h4>

                {/* Tagline */}
                <p className="text-secondary mb-4">
                    Full Stack MERN Developer • Building Modern & Scalable Web Applications
                </p>

                {/* Social Links */}
                <div className="d-flex justify-content-center gap-3 mb-4">

                    <a
                        href="https://github.com/ritik-chaurasiya"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                    >
                        <i className="bi bi-github fs-4"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ritik-chaurasiya-b7342a2a3"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                    >
                        <i className="bi bi-linkedin fs-4"></i>
                    </a>

                    <a
                        href="mailto:ritikchaurasiya2005@gmail.com"
                        className="footer-link"
                    >
                        <i className="bi bi-envelope-fill fs-4"></i>
                    </a>

                </div>

                {/* Copyright */}
                <p className="text-secondary small mb-0">
                    © {new Date().getFullYear()} Ritik Chaurasiya. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;