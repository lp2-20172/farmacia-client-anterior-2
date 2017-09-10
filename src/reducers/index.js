import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import user from './userReducer'
import venta from './ventaReducer'


var reducers = combineReducers({
    counter: counterReducer,
    user: user,
    venta: venta,

});

export default reducers;