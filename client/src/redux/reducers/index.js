import { combineReducers } from 'redux';

//Reducers
import metaReducer from './metaReducer';
import skillsReducer from './skillsReducer';

export default combineReducers({
    meta: metaReducer,
    skills: skillsReducer
});