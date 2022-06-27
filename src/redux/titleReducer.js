import {types} from "../types";

const initialState ={
    title: "Hello"
}

export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state, title: "i am new title"}
        case types.CLEAR_TITLE:
            return {...state, title: ""}
        default:
            return state
    }
}