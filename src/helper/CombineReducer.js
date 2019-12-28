import locationReducer from "../modules/location/reducer/LocationReducer";
import registrationReducer from "../modules/register/reducer/RegistrationReducer";
import {combineReducers} from "redux";

export default combineReducers({
    locationReducer,
    registrationReducer,
})