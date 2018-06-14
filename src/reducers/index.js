import { combineReducers } from 'redux'
import cryptoReducer from './CryptoReducer'

export default combineReducers({
    crypto: cryptoReducer
})