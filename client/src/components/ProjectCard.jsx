import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div
            className="card project-card border-0 text-white shadow-lg h-100 rounded-4"
            style={{ backgroundColor: "#01113a" }}
        >
            
            {project.image && (
                <img
                    src={project.image}
                    className="card-img-top rounded-top"
                    alt={project.title}
                />
            )}

            <div className="card-body">
                <h5 className="text-white fw-bold">{project.title}</h5>
                <p className="text-secondary small">{project.description}</p>

                {project.techStack && project.techStack.length > 0 && (
                    <div className="mt-3 d-flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="badge bg-accent">{tech}</span>
                        ))}
                    </div>
                )}
            </div>

            <div className="card-footer bg-transparent border-0 d-flex gap-2">
                {project.github && (
                    <a href={project.github} target="_blank" className="btn btn-outline-accent w-50">
                        GitHub
                    </a>
                )}

                {project.demo && (
                    <a href={project.demo} target="_blank" className="btn btn-accent w-50">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;


// import React from "react";

// const ProjectCard = ({ project }) => {
//     return (
//         <div
//             className="card border-0 shadow-lg h-100 rounded-4"
//             style={{
//                 backgroundColor: "#16213E",
//                 color: "#fff",
//             }}
//         >
//             {/* Project Image */}
//             {project.image && (
//                 <img
//                     src={project.image}
//                     className="card-img-top rounded-top-4"
//                     alt={project.title}
//                     style={{
//                         height: "220px",
//                         objectFit: "cover",
//                     }}
//                 />
//             )}

//             <div className="card-body d-flex flex-column">

//                 <h4 className="fw-bold mb-3">
//                     {project.title}
//                 </h4>

//                 <p className="text-light opacity-75 flex-grow-1">
//                     {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="d-flex flex-wrap gap-2 mt-3">
//                     {project.techStack?.map((tech, index) => (
//                         <span
//                             key={index}
//                             className="badge bg-primary px-3 py-2 rounded-pill"
//                         >
//                             {tech}
//                         </span>
//                     ))}
//                 </div>

//             </div>

//             <div className="card-footer bg-transparent border-0 d-flex gap-2 pb-4">

//                 {project.github && (
//                     <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn btn-outline-light flex-fill rounded-pill"
//                     >
//                         Source Code
//                     </a>
//                 )}

//                 {project.demo && (
//                     <a
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn btn-primary flex-fill rounded-pill"
//                     >
//                         Live Demo
//                     </a>
//                 )}

//             </div>
//         </div>
//     );
// };

// export default ProjectCard;