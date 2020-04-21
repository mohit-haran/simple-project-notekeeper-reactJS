import { createStore, combineReducers }from 'redux';
import { ProjectsReducer } from './ProjectsReducer';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
        projects:ProjectsReducer
    })
    );

    return store;
}