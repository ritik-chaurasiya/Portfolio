// import React from "react";
// // import "./Navbar.css"; // Add only small styles

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark nav-navy fixed-top shadow-sm">
//             <div className="container">
//                 <a className="navbar-brand fw-bold logo" href="#hero">
//                     Ritik
//                 </a>

//                 <button
//                     className="navbar-toggler border-0"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">

//                         <li className="nav-item">
//                             <a className="nav-link nav-anim" href="#about">About</a>
//                         </li>

//                         <li className="nav-item">
//                             <a className="nav-link nav-anim" href="#education">Education</a>
//                         </li>

//                         <li className="nav-item">
//                             <a className="nav-link nav-anim" href="#projects">Projects</a>
//                         </li>

//                         <li className="nav-item">
//                             <a className="nav-link nav-anim" href="#contact">Contact</a>
//                         </li>

//                         <li className="nav-item">
//                             <a className="btn btn-gradient ms-lg-2" href="#contact">
//                                 Hire Me
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-navy fixed-top shadow-sm">
            <div className="container">

                {/* Logo */}
                <a className="navbar-brand fw-bold fs-4" href="#hero">
                    Ritik <span className="accent">Chaurasiya</span>
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

                        <li className="nav-item">
                            <a className="nav-link nav-anim" href="#hero">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link nav-anim" href="#about">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link nav-anim" href="#education">
                                Education
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link nav-anim" href="#projects">
                                Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link nav-anim" href="#contact">
                                Contact
                            </a>
                        </li>

                        <li className="nav-item ms-lg-2">
                            <a
                                className="btn btn-gradient px-4"
                                href="/Ritik_Chaurasiya_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
