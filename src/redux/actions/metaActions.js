import { TOGGLE_SIDEMENU, FETCH_BIO, FETCH_SOCIALLINKS } from './types';

const token = localStorage.getItem('auth_token');

export const toggleSideMenu = () => dispatch => {
    dispatch({
        type: TOGGLE_SIDEMENU
    });
}

export const fetchBio = () => dispatch => {
    fetch(`/api/sitemeta/bio?token=${token}`)
    .then(res => res.json()
    .then(bio => {
        dispatch({
            type: FETCH_BIO,
            payload: {
                prof: bio.professional,
                extra: bio.extra
            }
        });
    }));
}

export const fetchSocialLinks = () => dispatch => {
    fetch(`/api/sitemeta/socialLinks?token=${token}`)
    .then(res => res.json()
    .then(socialLinks => {
        dispatch({
            type: FETCH_SOCIALLINKS,
            payload: socialLinks
        });
    }));
}