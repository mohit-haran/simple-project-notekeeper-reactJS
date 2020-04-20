import React from 'react';

const ProjectDetails = ({project}) => {
    return(
        <div className="container mt-5 text-white">
            <div className="row row-header">
                <div className="col-12">
                   <h2> {project.title} </h2>
                </div>
            </div>
            <div className="row row-content align-items-center">
                <div className="col-12 col-md-4">
                   <h3> DESCRIPTION : </h3>
                </div>
                <div className="col-12 col-md" style={{fontSize:"20px"}}>
                    {project.description}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;