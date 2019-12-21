const initialState= {
    events:[],
    eventForm:{
        eventName:"",
        descriptionEvent:"",
        companyIdTransient:"",
        eventDetailList:[{
            venue:"",
            eventDay:"",
            eventDate:"",
            description:"",
            locationIdTransient:""
        }]
    },
    eventDetail:[],

}
export default function eventReducer(state=initialState, action){
    console.log('event-reducer', state, action)
    switch (action.type) {
        case "FETCH_EVENT_SUCCESS":
            return {...state, events: action.payload}
        case "HANDLE_EVENT_NAME":
            return {...state, eventForm: {...state.eventForm, eventName: action.eventName}}
        case "HANDLE_DESCRIPTION_EVENT":
            return {...state, eventForm: {...state.eventForm, descriptionEvent: action.descriptionEvent}}
        case "HANDLE_COMPANY_ID":
            return {...state, eventForm: {...state.eventForm, companyIdTransient: action.companyIdTransient}}
        case "HANDLE_VENUE":
            return {...state, eventForm: {...state.eventForm, eventDetailList: {...state.eventForm.eventDetailList, venue:action.venue}}}
        case "HANDLE_EVENT_DAY":
            return {...state, eventForm: {...state.eventForm, eventDetailList: {...state.eventForm.eventDetailList, eventDay:action.eventDay}}}
        case "HANDLE_EVENT_DATE":
            return {...state, eventForm: {...state.eventForm, eventDetailList: {...state.eventForm.eventDetailList, eventDate:action.eventDate}}}
        case "HANDLE_DESCRIPTION":
            return {...state, eventForm: {...state.eventForm, eventDetailList: {...state.eventForm.eventDetailList, description:action.description}}}
        case "HANDLE_LOCATION_ID":
            return {...state, eventForm: {...state.eventForm, eventDetailList: {...state.eventForm.eventDetailList, locationIdTransient:action.locationIdTransient}}}
        case "FETCH_EVENT_DETAIL_SUCCESS":
            return {...state, eventDetail: action.payload}
        case "CLEAR_STATE":
            return {...state, eventForm: {...initialState.eventForm}}
        default:
            return {...state}
    }
}
