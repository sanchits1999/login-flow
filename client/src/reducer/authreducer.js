const initialState = {
    username: null,
    error: null,
    data : null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "login": return { username: action.payload.username , data: action.payload.data , error: null }
            break
        case "logout": return { username: null, error: null , data: null}
            break
        case "seterror": return { ...state, error: action.payload }
            break
        default: return state
            break
    }
}

export default authReducer