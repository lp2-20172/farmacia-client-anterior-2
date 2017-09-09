import {combineReducers} from 'redux'
import user from './userReducer'
import ecomm from './ecommReducer'


var reducers = combineReducers({
    user: user,
    ecomm: ecomm,

});

export default reducers;