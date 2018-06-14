import axios from 'axios'
import {
    GETTING_PRICES,
    GETTING_PRICES_SUCCESS,
    GETTING_PRICES_FAILURE
 } from './types'

const baseURL = 'https://api.coinmarketcap.com/v2/ticker/'
const limit = 20

export const getPrices = () => async dispatch => {

    dispatch({ type: GETTING_PRICES })

    return await axios.get(`https://api.coinmarketcap.com/v2/ticker/?limit=10`)
        .then(res => {
            dispatch({ type: GETTING_PRICES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GETTING_PRICES_FAILURE, payload: err.data })
        })
}