import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from "../actions"

const initialState = {
    characters: [],
    error: "",
    isFetching: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                error: "",
                isFetching: true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                isFetching: false
            }
        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }

}


const store = createStore(reducer, applyMiddleware(thunk, logger));

export { reducer, store }



