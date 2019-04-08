import { 
    TOGGLE_SIDEMENU,
    FETCH_PROFBIO,
    FETCH_EXTBIO,
    FETCH_SOCIALLINKS,
    UPDATE_PROFBIO,
    UPDATE_EXTBIO
} from '../actions/types';

const initialState = {
    showSideMenu: true,
    profBio: {},
    extBio: {},
    socialLinks: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_SIDEMENU:
            return {
                ...state,
                showSideMenu: !state.showSideMenu
            };
        case FETCH_PROFBIO:
            return {
                ...state,
                profBio: action.payload
            };
        case UPDATE_PROFBIO:
            return {
                ...state,
                profBio: action.payload
            };
        case FETCH_EXTBIO:
            return {
                ...state,
                extBio: action.payload,
            };
        case UPDATE_EXTBIO:
            return {
                ...state,
                extBio: action.payload
            };
        case FETCH_SOCIALLINKS:
            return {
                ...state,
                socialLinks: action.payload
            };
        default:
            return state;
    }
}