import * as ActionTypes from './ActionTypes';
export const addProject = (projectId,title, description,files) => ({
    type:ActionTypes.ADD_PROJECT,
    payload:{
        id:projectId,
        title:title,
        description:description,
        files:files
    }
});

export const removeProject = (projectId)=>({
    type:ActionTypes.REMOVE_PROJECT,
    payload:{
        id:projectId
    }
});