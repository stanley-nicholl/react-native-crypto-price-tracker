import { 
    GETTING_PRICES,
    GETTING_PRICES_SUCCESS,
    GETTING_PRICES_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    isFetching: true,
    data: [],
    hasError: false,
    errorMessage: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GETTING_PRICES:
            return { 
                ...state,
                isFetching: true,
                data: [],
                hasError: false,
                errorMessage: null
             }
        case GETTING_PRICES_SUCCESS:
            return { 
                ...state,
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            }
        case GETTING_PRICES_FAIL:
            return { 
                ...state,
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            }
        default:
            return state
    }
    
}