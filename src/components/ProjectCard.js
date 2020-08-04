import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardHeader, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({project,removeProject}) => {

    const handleClick = () =>{
        removeProject(project.id);
    }

    return(

        <Card className="mt-4 card">
            <CardHeader><Button color="danger" className="float-right rounded-circle" onClick={handleClick}><i className="fa fa-close"></i></Button></CardHeader>
            <Link to={`projects/${project.id}`} className="react-links">
                <CardBody>
                    <CardTitle>{project.title}</CardTitle>
                    <CardText style={{fontSize:"15px"}}>
                        {project.description.length<=200?project.description:project.description.slice(0,200)+"..."}
                    </CardText>
                </CardBody>
            </Link>
        </Card>

    );
}

export default ProjectCard;