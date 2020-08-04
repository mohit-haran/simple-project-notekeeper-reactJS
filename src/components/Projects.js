import React from 'react';
import ProjectCard from './ProjectCard';


const Projects = (props) =>{
    const list = props.PROJECTS.map((project) =>{
        return(
            <div className="col-12 col-md-5 offset-md-1" key={project.id}>
                <ProjectCard project={project} removeProject={props.removeProject}/>
            </div>
        )
    })
    return(
        <div className="container">
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default Projects;