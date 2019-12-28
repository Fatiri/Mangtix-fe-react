const initialState= {
    location:{
      city:"",
      address:"",
      latitude:"",
      longitude:""
    },
    idLocation:""
}
export default function locationReducer(state=initialState, action){
    console.log(state.location)
    switch (action.type) {
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
