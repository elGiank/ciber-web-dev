import * as types from './types';
import axios from 'axios';
import { Dispatch } from "redux";
import * as URLSearchParams from 'url-search-params'


export function loginUser(email: string, password: string) {
    return function (dispatch: any) {
        let params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', email);
        params.append('password', password);

        console.log(params);
        axios.post('http://cibertecwebapi.azurewebsites.net/token', params)
            .then(response => {
                dispatch({
                    type: types.GOT_TOKEN,
                    token: response.data.access_token
                });
            })
            .catch((error) => { console.log(error) });
    }
}

export function getCustomerList(token: string) {
    return function (dispatch: any) {
        let config = { headers: { Authorization: token }};
        axios.get('http://cibertecwebapi.azurewebsites.net/customer/list?page=1&rows=50', config)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: types.GOT_CUSTOMERS,
                    customers: response.data
                });
            })
            .catch((error) => { console.log(error) });
    }
}

