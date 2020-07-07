import api from "../api/api"


export const login = (username, password) => {

    return (dispatch) => {

        api.post("/login", {
            UserName: username,
            Password: password
        }).then((res) => {
            console.log(res.data)
            console.log(!res.data.error)
            if (!res.data.error) {
                dispatch({ type: "login", payload: {username : res.data.username , data : res.data.data} })
            } else {
                dispatch({ type: "seterror", payload: "Request Failed!.Please try again later or check you network connection" })
            }
        }).catch((error) => {
            dispatch({ type: "seterror", payload: "Request Failed!.Please try again later or check you network connection" })
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: "logout"})
    }
}
