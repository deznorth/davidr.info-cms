import { combineReducers } from 'redux';
import skillsReducer from './skillsReducer';
import blogReducer from './blogReducer';

export default combineReducers({
    skills: skillsReducer,
    blog: blogReducer
});