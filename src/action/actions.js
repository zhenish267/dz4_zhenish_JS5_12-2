import {types} from "../types";

export const handleUsersAction = (users) => {
    return {
        type: types.HANDLE_USERS,
        payload: users
    }
}

export const getUsersAction = (data) => {
    return async function(dispatch) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application-json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
        const datas = await response.json();

        dispatch(handleUsersAction(datas))
    }
}