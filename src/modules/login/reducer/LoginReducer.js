const initialState = {
    userAccess :{
        username : "",
        password : ""
    }

}
export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTHENTICATION_LOGIN_USERNAME':
            return {...state, userAccess :{...state.userAccess, username: action.username}}
        case 'AUTHENTICATION_LOGIN_PASSWORD':
            return {...state, userAccess :{...state.userAccess, password: action.password}}
        default: return state
    }
}
