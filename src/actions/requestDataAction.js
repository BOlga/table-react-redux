import { REQUEST_DATA, REQUEST_SUCCESS, REQUEST_ERROR } from '../constants/actionNames';
import { COLUMNS } from '../constants/responseColumns';
import { REQUEST_URL } from '../constants/requestConstants';
import axios from 'axios';

function convertResponseData(data) {
    const body = data.map(function (item, index) {
        let result = { id: item.id };
        COLUMNS.forEach(i => { result[i.col] = { value: item[i.col], type: i.type } });
        return result;
    });

    return { columns: COLUMNS, body: body };
}

function getRequestUrl(userName) {
    return REQUEST_URL.replace('{user}', userName);
}

export function requestData() {
    return {
        type: REQUEST_DATA,
        data: null
    };
}

export function requestDataSuccess(newData) {
    return {
        type: REQUEST_SUCCESS,
        data: convertResponseData(newData)
    };
}

export function requestDataError() {
    return {
        type: REQUEST_ERROR,
        data: null
    };
}

export function requestDataAction(userName) {
    return dispatch => {
        dispatch(requestData());

        return axios.get(getRequestUrl(userName))
            .then((response) => {
                const data = response.data;
                dispatch(requestDataSuccess(data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(requestDataError());
            });
    }
}