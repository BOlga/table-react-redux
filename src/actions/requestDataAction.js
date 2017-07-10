import { REQUEST_DATA, REQUEST_SUCCESS } from '../constants/actionNames';
import tableData from '../data.json';
import axios from 'axios';

export function requestData() {
    return {
           type: REQUEST_DATA,
           data: tableData
        };
}

export function requestDataSuccess(newData){
    return{
        type: REQUEST_SUCCESS,
        data: newData
        };
}


export function requestDataAction() {
    return dispatch => {
        dispatch(requestData());
        return  dispatch(requestDataSuccess(tableData));
    }
}