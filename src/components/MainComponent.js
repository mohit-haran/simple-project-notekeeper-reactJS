import React from 'react';
import Home from './Home';
import Projects from './Projects'
import ProjectDetails from './ProjectDetails';
import Header from './Header';
import Footer from './Footer';
import PROJECTS from '../shared/PROJECTS';
import {Switch,Route,Redirect} from 'react-router-dom';

const ProjectById = (props) =>{

    return(
        <ProjectDetails project={PROJECTS.filter((project)=>{
            return project.id===parseInt(props.match.params.projectid,10);
        })[0]}/>
    );
}

const MainComponent = () => {

    const ProjectList = PROJECTS;

    return(
    <React.Fragment>
        <Header/>
            <Switch>
                <Route path="/home" component={()=> <Home PROJECTS={ProjectList}/>}/>
                <Route exact path="/projects" component={() => <Projects PROJECTS={ProjectList}/>}/>
                <Route path="/projects/:projectid" component={ProjectById}/>
                <Redirect to="/home" />
            </Switch> 
        <Footer/>
    </React.Fragment>
    )
}

export default MainComponent;
