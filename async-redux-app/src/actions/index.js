import axios from "axios";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const getCharacters = () => {
    dispatch({ type: FETCH_CHARACTERS_START });
    axios
        .get()
    return {
        type: REMOVE_FEATURE,
        payload: item
    }
};

export const buyItem = item => {
    console.log(item, "from buyItem")
    return {
        type: BUY_ITEM,
        payload: item
    }
}


