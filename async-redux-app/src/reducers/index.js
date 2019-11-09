import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { REMOVE_FEATURE, BUY_ITEM } from "../actions"

const initialState = {
    characters: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "BUY_ITEM":
            if (state.car.features.filter(obj => obj.id === action.payload.id).length === 0) {
                return {
                    ...state,
                    additionalPrice: state.additionalPrice + action.payload.price,
                    car: {
                        ...state.car,
                        features: [...state.car.features, action.payload]
                    }
                }
            } else {
                return state;
            }

        case "REMOVE_FEATURE":
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(obj => (obj.id !== action.payload.id))
                }
            };
        default:
            return state;
    }

}


const store = createStore(reducer);

export { reducer, store }



