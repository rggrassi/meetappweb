import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions/types'

const INITIAL_STATE = { token: null, signed: false, loading: false }

export function auth(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SIGNIN_REQUEST: {
            return { ...state, loading: true }
        }
        case SIGNIN_SUCCESS: {
            return { ...state, token: action.payload.token }
        }
        case SIGNIN_FAILURE: {
            return { ...state, loading: false }
        }
        default: 
            return state;
    }
}