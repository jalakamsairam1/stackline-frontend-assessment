import { FETCH_DATA } from "../constants/action-types";

export interface Product {
    product: any
}

export const initialState = {
    product: {}
}

function rootReducer(state: Product = initialState, action: any ) {

    if (action.type === FETCH_DATA) {
        return {
            product : action.payload
        }
    }

    return state;
}

export default rootReducer;