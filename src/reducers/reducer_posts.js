import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {

        case DELETE_POST:
            const s = {...state};
            delete s[action.payload];
            return s;


        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_POST:

            const post = action.payload.data;

            return {...state, [post.id]:post }

    default: 
        return state
    }
}