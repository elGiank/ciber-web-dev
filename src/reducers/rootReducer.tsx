import { combineReducers } from 'redux';
import { customerReducer } from './customers';


const rootReducer = combineReducers({
    customerReducer
});

export default rootReducer;