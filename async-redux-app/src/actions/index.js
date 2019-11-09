import axios from "axios";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START });
    axios
        .get("https://swapi.co/api/people/")
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data.results })
        })
        .catch(error => {
            console.log("error from axios", error);
            dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: `${error.response.status} ${error.response.data}` })
        })

};




