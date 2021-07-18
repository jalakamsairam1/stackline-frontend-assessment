import { FETCH_DATA } from "../constants/action-types";

export const getProductInfo = () => (dispatch: any) => {
    return fetch("data.json")
        .then(res => res.json())
        .then(response => {
            dispatch({ type: FETCH_DATA, payload: response?.length ? response[0]: null})
        })
}