import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//const API_KEY = 'cvbnmcvbnmcvbnmcvbnm';
const API_KEY = 'PAPERCLIP1234a' 


export function  fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function  fetchPost(id,callbackError) {
    const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`)

        .catch((reason) => callbackError(reason));

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function  deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}?key=${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: request
    };
}

export function  createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, values )
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}