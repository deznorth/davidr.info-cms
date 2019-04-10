import { FETCH_SKILLS } from '../actions/types';

const initialState = {
    skills: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_SKILLS:
            return {
                ...state,
                skills: action.payload
            };
        default:
            return state;
    }
}