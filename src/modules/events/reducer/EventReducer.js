const initialState= {
    events:[],
    eventForm:{
        id:"",
        eventName:"",
        descriptionEvent:"",
        companyIdTransient:"",
        eventDetailList:[]
    },
    eventById:[],
    eventDetail:[],
    company:{id:"293b4491-50aa-4a96-91d2-db691eeb3f78"}
}
export default function eventReducer(state=initialState, action){
    console.log('event-reducer', state, action)
    switch (action.type) {
        case "FETCH_EVENT_SUCCESS":
            return {...state, events: action.payload}
        case "ADD_EVENT_DETAIL":
            return {...state, eventForm: {...state.eventForm, eventDetailList:state.eventForm.eventDetailList.concat(
                [{venue:"", eventDay:"", eventDate:"", description:"", locationIdTransient:""}]
                    )}}
        case "HANDLE_EVENT_NAME":
            return {...state, eventForm: {...state.eventForm, eventName: action.eventName}}
        case "HANDLE_DESCRIPTION_EVENT":
            return {...state, eventForm: {...state.eventForm, descriptionEvent: action.descriptionEvent}}
        case "HANDLE_COMPANY_ID":
            return {...state, eventForm: {...state.eventForm, companyIdTransient: action.companyIdTransient}}
        case "HANDLE_VENUE":
            return {...state, eventForm: {...state.eventForm, eventDetailList:state.eventForm.eventDetailList.map((element, index)=>{
                if (index===action.index){
                    return {...element, venue:action.venue}
                }else{
                    return {...element}
                }})
            }}
        case "HANDLE_EVENT_DAY":
            return {...state, eventForm: {...state.eventForm, eventDetailList:state.eventForm.eventDetailList.map((element, index)=>{
                            if (index===action.index){
                                return {...element, eventDay:action.eventDay}
                            }else{
                                return {...element}
                            }})
                    }}
        case "HANDLE_EVENT_DATE":
            return {...state, eventForm: {...state.eventForm, eventDetailList: state.eventForm.eventDetailList.map((element, index)=>{
                            if (index===action.index){
                                return {...element, eventDate:action.eventDate}
                            }else{
                                return {...element}
                            }})
                    }}
        case "HANDLE_DESCRIPTION":
            return {...state, eventForm: {...state.eventForm, eventDetailList: state.eventForm.eventDetailList.map((element, index)=>{
                            if (index===action.index){
                                return {...element, description:action.description}
                            }else{
                                return {...element}
                            }})
                    }}
        case "HANDLE_LOCATION_ID":
            return {...state, eventForm: {...state.eventForm, eventDetailList: state.eventForm.eventDetailList.map((element, index)=>{
                            if (index===action.index){
                                return {...element, locationIdTransient:action.locationIdTransient}
                            }else{
                                return {...element}
                            }})
                    }}
        case "FETCH_EVENT_DETAIL_SUCCESS":
            return {...state, eventDetail: action.payload}
        case "HANDLE_CHANGE_DATA":
            return {...state, eventById:action.eventById}
        case "CLEAR_STATE":
            return {...state, eventForm: {...initialState.eventForm}}
        default:
            return {...state}
    }
}
