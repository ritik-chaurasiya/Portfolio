import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="card project-card border-0 bg-transparent shadow-sm h-100">

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
