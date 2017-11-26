import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_POST:

            // Check for payload
            if  (action.payload) {
                
                const post = action.payload.data;
                return {...state, [post.id]:post }
            }
            
            // No payload data.
            // Return the same state.
            return {...state}

        case DELETE_POST:

        return {...state}


    default: 
        return state
    }
}