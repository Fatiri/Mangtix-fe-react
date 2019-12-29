const initialState = {
    userInfo:{
      fullName:"",
      userName:"",
      password:"",
      bornPlace:"",
      birthDate:"",
      roleIdTransient:"798ce0b0-24a9-4963-81cc-84d61f54aab6",
      locationIdTransient:"db1aa51c-3b56-49d0-9b2b-c80b6b511ee0"
    },

    companyInfo:{
        companyName:"",
        companyUsers:[]
    },

    location:{
        city:"",
        address:"",
        latitude:"",
        longitude:""
    },
    idLocation:""
}

export default function registrationReducer(state = initialState, action) {
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
        case 'SUCCESS_INPUT_NAME_COMPANY':
            return {...state, companyInfo :{...state.companyInfo, companyName: action.companyName}}
        case 'SUCCESS_INPUT_USER_ID':
            return {...state, companyInfo :{...state.companyInfo, companyUsers: state.companyInfo.companyUsers.concat([{userIdTransient:action.userIdTransient}])}}
        case 'SUCCESS_INPUT_CITY':
            return {...state, location: {...state.location, city: action.city}}
        case 'SUCCESS_INPUT_ADDRESS':
            return {...state, location: {...state.location, address: action.address}}
        case 'SUCCESS_INPUT_LATITUDE':
            return {...state, location: {...state.location, latitude: action.latitude}}
        case 'SUCCESS_INPUT_LONGITUDE':
            return {...state, location: {...state.location, longitude: action.longitude}}

        default:return state
    }

}
