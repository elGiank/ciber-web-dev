import * as types from '../actions/types';
import { hashHistory } from 'react-router';
const INITIAL_STATE = {};

export function customerReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case types.GOT_TOKEN: 
            return {...state, token: action.token}
        case types.GOT_CUSTOMERS:
            return { ...state, customers: action.customers };
        case types.GOT_CUSTOMER:
            return { ...state, customer: action.customer };
        case types.USER_CREATED:
            hashHistory.push('/customers');
        break;
        case types.USER_UPDATED:
            hashHistory.push(`/customerview/${action.id}`);
        break;
        case types.USER_DELETED: 
            hashHistory.push('/customers');
        break;
    }

    return state;
}