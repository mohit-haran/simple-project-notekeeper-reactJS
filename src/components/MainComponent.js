import React from 'react';
import Home from './Home';
import Projects from './Projects'
import ProjectDetails from './ProjectDetails';
import Header from './Header';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addProject, removeProject } from '../redux/ActionCreators';



const mapStateToProps = state =>{

    return{
        projects:state.projects
    }      
};

const mapDispatchToProps = (dispatch) =>({
    addProject: (projectId,title, description,files) => dispatch(addProject(projectId,title, description,files)),
    removeProject: (projectId) => dispatch(removeProject(projectId))
});

const MainComponent = (props) => {
    

    const ProjectById = ({match}) =>{

        return(
            <ProjectDetails project={props.projects.filter((project)=>{
                return project.id===match.params.projectid;
            })[0]}/>
        );
    }
    

    return(
    <div style={{position:"relative"}}>
        <Header/>
            <Switch>
                <Route path="/home" component={()=> <Home PROJECTS={props.projects} addProject={props.addProject} removeProject={props.removeProject}/>}/>
                <Route exact path="/projects" component={() => <Projects PROJECTS={props.projects} removeProject={props.removeProject}/>}/>
                <Route path="/projects/:projectid" component={ProjectById}/>
                <Redirect to="/home" />
            </Switch> 
    </div>
    )
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));
