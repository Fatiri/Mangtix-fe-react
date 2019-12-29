const initialState = {
    listEvent :[]

}
export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_LIST_EVENT':
            return {...state, listEvent: action.listEvent}
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
