import { FETCH_POSTS, FETCH_POSTS_RANGE, FETCH_POST } from './types';

//This is a placeholder, update with actual implementation
export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        payload: []
    });
}

//This is a placeholder, update with actual implementation
export const fetchPostsByRange = range => dispatch => {
    dispatch({
        type: FETCH_POSTS_RANGE,
        payload: []
    });
}

//This is a placeholder, update with actual implementation
export const fetchPost = () => dispatch => {
    dispatch({
        type: FETCH_POST,
        payload: {}
    });
}