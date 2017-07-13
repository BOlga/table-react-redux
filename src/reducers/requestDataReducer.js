import { REQUEST_DATA, REQUEST_SUCCESS, REQUEST_ERROR } from '../constants/actionNames'

export default function requestDataReducer(state = {}, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return Object.assign({}, state, { startRequest: true, data: null });
        case REQUEST_SUCCESS:
            return Object.assign({}, state, { data: action.data });
        case REQUEST_ERROR:
            return Object.assign({}, state, { isError: true, data: null });
        default:
            return state;
    }

}