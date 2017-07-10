import { REQUEST_DATA, REQUEST_SUCCESS } from '../constants/actionNames'


export default function requestDataReducer(state = {}, action) {
    switch (action.type) {
        case REQUEST_DATA:          
            return Object.assign({}, state, {data: action.data});
        case REQUEST_SUCCESS: 
            return Object.assign({}, state, {data: action.data});
        default:
            return state;
    }

}