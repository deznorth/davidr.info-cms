import { TOGGLE_SIDEMENU, FETCH_BIO, FETCH_SOCIALLINKS } from '../actions/types';

const initialState = {
    showSideMenu: true,
    Bio: {
        professional: {},
        extra: {}
    },
    socialLinks: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_SIDEMENU:
            return {
                ...state,
                showSideMenu: !state.showSideMenu
            };
        case FETCH_BIO:
            return {
                ...state,
                "Bio.professional": action.payload.prof,
                "Bio.extra": action.payload.extra
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