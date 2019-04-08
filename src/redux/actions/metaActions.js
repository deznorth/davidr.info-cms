import { TOGGLE_SIDEMENU, FETCH_PROFBIO, FETCH_EXTBIO, FETCH_SOCIALLINKS } from './types';

const token = localStorage.getItem('auth_token');

export const toggleSideMenu = () => dispatch => {
    dispatch({
        type: TOGGLE_SIDEMENU
    });
}

export const fetchExtraBio = () => dispatch => {
    fetch(`/api/sitemeta/bio`)
    .then(res => res.json()
    .then(bio => {
        dispatch({
            type: FETCH_EXTBIO,
            payload: bio.Bio.extra
        });
    }));
}

export const fetchProfBio = () => dispatch => {
    fetch(`/api/sitemeta/bio/professional`)
    .then(res => res.json()
    .then(bio => {
        dispatch({
            type: FETCH_PROFBIO,
            payload: bio
        });
    }));
}

export const fetchSocialLinks = () => dispatch => {
    fetch(`/api/sitemeta/socialLinks`)
    .then(res => res.json()
    .then(socialLinks => {
        dispatch({
            type: FETCH_SOCIALLINKS,
            payload: socialLinks
        });
    }));
}