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
        let config = { headers: { Authorization: `Bearer ${token}` }};
        
        axios.get('http://cibertecwebapi.azurewebsites.net/customer/list?page=1&rows=100', config)
            .then(response => {
                dispatch({
                    type: types.GOT_CUSTOMERS,
                    customers: response.data
                });
            })
            .catch((error) => { console.log(error) });
    }
}

export function getCustomer(token: string, customerId: string) {
    return function (dispatch: any) {
        let config = { headers: { Authorization: `Bearer ${token}` }};
        
        axios.get(`http://cibertecwebapi.azurewebsites.net/customer/${customerId}`, config)
            .then(response => {
                dispatch({
                    type: types.GOT_CUSTOMER,
                    customer: response.data
                });
            })
            .catch((error) => { console.log(error) });
    }
}

export function deleteCustomer(token: string, customerId: string) {
    return function (dispatch: any) {
        let config = { headers: { Authorization: `Bearer ${token}` }};

        axios.delete(`http://cibertecwebapi.azurewebsites.net/customer/${customerId}`, config)
            .then(response => {
                dispatch({
                    type: types.USER_DELETED,
                });
            })
            .catch((error) => { console.log(error) });
    }
}

export function saveCustomer(token: string, customer: any) {
    return function (dispatch: any) {
        let config = { headers: { Authorization: `Bearer ${token}` }};

        axios.post('http://cibertecwebapi.azurewebsites.net/customer', customer, config)
            .then(response => {
                dispatch({
                    type: types.USER_UPDATED,
                    id: response.data.id
                })
            })
            .catch((error) => { console.log(error) });

    }
}

export function updateCustomer(token: string, customer: any) {
    return function (dispatch: any) {
        let config = { headers: { Authorization: `Bearer ${token}` }};

        axios.put('http://cibertecwebapi.azurewebsites.net/customer', customer, config)
            .then(response => {
                dispatch({
                    type: types.USER_UPDATED,
                    id: customer.id
                })
            })

    }
}