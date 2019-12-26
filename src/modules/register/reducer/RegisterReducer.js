const initialState = {
    userInfo:{
      fullName:"",
      userName:"",
      password:"",
      bornPlace:"",
      birthDate:""
    }
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case 'SUCCESS_INPUT_FULL_NAME':
            return {...state, userInfo :{...state.userInfo, fullName: action.fullName}}
        case 'SUCCESS_INPUT_USER_NAME':
            return {...state, userInfo :{...state.userInfo, userName: action.userName}}
        case 'SUCCESS_INPUT_PASSWORD':
            return {...state, userInfo :{...state.userInfo, password: action.password}}
        case 'SUCCESS_INPUT_BORN_PLACE':
            return {...state, userInfo :{...state.userInfo, bornPlace: action.bornPlace}}
        case 'SUCCESS_INPUT_BIRTH_DATE':
            return {...state, userInfo :{...state.userInfo, birthDate: action.birthDate}}
        default:return state
    }

}
