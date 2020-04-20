import React from 'react';
import ProjectCard from './ProjectCard';
import NewProjectForm from './NewProjectForm';
const Home = (props) => {

    const list = props.PROJECTS.map((project) => {
        return(
            <div className="col-12 col-md-7" key={project.id}>
                <ProjectCard project={project}/>
           </div>
          
        );
    });

    return(
    <React.Fragment>
        <div className="container">
            <div className="row">
                {list}
            </div>
            <div className="row">
                <div className="col-12 col-md-5 mt-4">
                    <NewProjectForm />
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Home;