import { TOGGLE_SIDEMENU,
    FETCH_PROFBIO,
    FETCH_EXTBIO,
    FETCH_SOCIALLINKS,
    UPDATE_PROFBIO,
    UPDATE_EXTBIO
} from './types';

const token = localStorage.getItem('auth_token');

export const toggleSideMenu = () => dispatch => {
    dispatch({
        type: TOGGLE_SIDEMENU
    });
}

//Create
export const createSocialLink = newSocialLink => dispatch => {
    const { label, url, iconClass, color } = newSocialLink;

    if(label !== '' && url !== '' && iconClass !== '' && color !== ''){
        fetch(`/api/sitemeta/socialLink?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSocialLink)
        })
        .then(res => res.json()
        .then(socialLink => {
            if(!socialLink.success){
                console.log(socialLink);
            } else {
                dispatch(fetchSocialLinks());
            }
        }));
    }  else {
        console.log('SocialLink inputs can\'t be empty');
    }
    
}

//Read
export const fetchExtBio = () => dispatch => {
    fetch(`/api/sitemeta/bio/extra`)
    .then(res => res.json()
    .then(bio => {
        dispatch({
            type: FETCH_EXTBIO,
            payload: bio
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
            payload: socialLinks.socialLinks
        });
    }));
}

//Update
export const updateProfBio = newProfBio => dispatch => {
    fetch(`/api/sitemeta/bio/professional?token=${token}`, {
        method: 'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newProfBio)
    })
    .then(res => res.json()
    .then(updatedBio => {
        if(updatedBio.success){
            dispatch({
                type: UPDATE_PROFBIO,
                payload: updatedBio.updated.profBio
            });
        } else {

        }
    }));
}

export const updateExtBio = newExtBio => dispatch => {
    fetch(`/api/sitemeta/bio/extra?token=${token}`, {
        method: 'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newExtBio)
    })
    .then(res => res.json()
    .then(updatedBio => {
        if(updatedBio.success){
            dispatch({
                type: UPDATE_EXTBIO,
                payload: updatedBio.updated.extBio
            });
        } else {

        }
    }));
}