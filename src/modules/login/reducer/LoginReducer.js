const initialState = {
    userAccess :{
        userName : "",
        password : ""
    },
    tokenDecode: {
        role : "",
        userId : "",
        companyId: ""
    }

}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTHENTICATION_LOGIN_USERNAME':
            return {...state, userAccess :{...state.userAccess, userName: action.userName}}
        case 'AUTHENTICATION_LOGIN_PASSWORD':
            return {...state, userAccess :{...state.userAccess, password: action.password}}
        case 'AUTHENTICATION_ROLE':
            return  {...state, tokenDecode :{...state.tokenDecode, role: action.role}}
        case 'AUTHENTICATION_USER_ID':
            return  {...state, tokenDecode :{...state.tokenDecode, userId: action.userId}}
        case 'AUTHENTICATION_COMPANY_ID':
            return  {...state, tokenDecode :{...state.tokenDecode, companyId: action.companyId}}
        default: return state
    }
}
