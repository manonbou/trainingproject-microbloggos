import { ADD_POST, LOADING_POSTS, GET_POSTS } from '../constants'

const initialeState = {
    list: null,
    loading: false
}

export default function (state = initialeState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                list: [action.payload, ...state.list]
            }
        case LOADING_POSTS:
            return {
                ...state, 
                loading: true
            }
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        default:
            return state
    }
}