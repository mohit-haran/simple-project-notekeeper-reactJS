import {PROJECTS} from '../shared/PROJECTS';
import * as ActionTypes from './ActionTypes';

export const ProjectsReducer = (state = PROJECTS ,action) => {

    switch(action.type){
        case ActionTypes.ADD_PROJECT:
            var project = action.payload;
            console.log(project);
            return state.concat(project);
        case ActionTypes.REMOVE_PROJECT:
            var id=action.payload.id;
            const nextState= state.filter((project)=>{
                return project.id!==id
            });
            return nextState;
        default:
            return state;
    }

};