// import React from "react";
// import ProjectCard from "./ProjectCard";
// import projectsData from "../components/data/projectsData.js";
// console.log(projectsData);


// const Projects = () => {
//     return (
//         <section id="projects" className="py-5 section-dark fade-up">
//             <div className="container">

//                 {/* Title */}
//                 <div className="text-center mb-5">
//                     <h2 className="fw-bold text-white display-6">
//                         My <span className="accent">Projects</span>
//                     </h2>
//                     <p className="text-secondary mt-2">
//                         Things I’ve built using MERN stack & modern technologies
//                     </p>
//                 </div>

//                 {/* Project Cards */}
//                 <div className="row g-4">
//                     {projectsData.map((project) => (
//                         <div key={project._id} className="col-md-6 col-lg-4">
//                             <ProjectCard project={project} />
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Projects;

import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../components/data/projectsData.js";

const Projects = () => {
    return (
        <section id="projects" className="py-5 section-dark fade-up">
            <div className="container">

                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-white">
                        Featured <span className="accent">Projects</span>
                    </h2>

                    <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
                        A collection of web applications showcasing my experience
                        in Full Stack MERN development, responsive UI design,
                        RESTful API integration, authentication, database
                        management, and modern deployment practices.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="row g-4">
                    {projectsData.map((project) => (
                        <div key={project._id} className="col-md-6 col-lg-4">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
