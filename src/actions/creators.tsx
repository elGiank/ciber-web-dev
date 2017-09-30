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
        let customerList = [
            {
                "id": 10,
                "firstName": "Elizabeth",
                "lastName": "Lincoln",
                "city": "Tsawassen",
                "country": "Canada",
                "phone": "(604) 555-4729"
            },
            {
                "id": 20,
                "firstName": "Gian Carlo",
                "lastName": "Vegas R.",
                "city": "Tsawassen",
                "country": "Canada",
                "phone": "(604) 555-4729"
            },
            {
                "id": 30,
                "firstName": "Cesar",
                "lastName": "Velarde",
                "city": "Kansas",
                "country": "USA",
                "phone": "(554) 555-4729"
            },  
        ];
        
            dispatch({
                type: types.GOT_CUSTOMERS,
                customers: customerList
            });
        // axios.get('http://cibertecwebapi.azurewebsites.net/customer/list?page=1&rows=25', config)
        //     .then(response => {
        //         console.log(response.data);
        //         dispatch({
        //             type: types.GOT_CUSTOMERS,
        //             customers: response.data
        //         });
        //     })
        //     .catch((error) => { console.log(error) });
    }
}

export function getCustomer(token: string, customerId: string) {
    return function (dispatch: any) {
        let config = { headers: { Authorization: token }};
        let fackeCustomer = 
            {
                "id": 10,
                "firstName": "Elizabeth",
                "lastName": "Lincoln",
                "city": "Tsawassen",
                "country": "Canada",
                "phone": "(604) 555-4729"
            };
        
            dispatch({
                type: types.GOT_CUSTOMER,
                customer: fackeCustomer
            });
        // axios.get(`http://cibertecwebapi.azurewebsites.net/customer/${customerId}`, config)
        //     .then(response => {
        //         console.log(response.data);
        //         dispatch({
        //             type: types.GOT_CUSTOMERS,
        //             customers: response.data
        //         });
        //     })
        //     .catch((error) => { console.log(error) });
    }
}
