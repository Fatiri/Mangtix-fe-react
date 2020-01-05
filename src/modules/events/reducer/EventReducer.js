const initialState= {
    events:[],
    eventForm:{
        eventName:"",
        descriptionEvent:"",
        companyIdTransient:"",
        eventDetailList:[]
    },
    location:{
        city:"",
        address:"",
        latitude:"",
        longitude:""
    },
    idLocation:"",
    dataLocation:[],
    locationEvent2:[],
    multipartImage:[],
    multipartFile:[],
    eventById:[],
    eventDetail:[],
    company:{id:""},
    companies:[]
}
export default function eventReducer(state=initialState, action){
    console.log('event-reducer', state, action)
    switch (action.type) {
        case "FETCH_EVENT_SUCCESS":
            return {...state, events: action.payload}
        case "FETCH_LOCATION_SUCCESS":
            return {...state, dataLocation: action.payload}
        case "FETCH_COMPANY_SUCCESS":
            return {...state, companies: action.payload}
        case "FETCH_COMPANY_ID_SUCCESS":
            return {...state, company: {...state.company, id:action.company}}
        case "HANDLE_UPDATE":
            return {...state, eventForm: action.payload}
        case "ADD_EVENT_DETAIL":
            return {...state, eventForm: {...state.eventForm, eventDetailList:state.eventForm.eventDetailList.concat(
                [{venue:"", eventDay:"", eventDate:"", description:"", locationIdTransient:""}]
                    )}}
        case "HANDLE_EVENT_NAME":
            return {...state, eventForm: {...state.eventForm, eventName: action.eventName}}
        case "HANDLE_EVENT_IMAGE":
            return {...state, multipartImage: action.multipartImage}
        case "HANDLE_EVENT_LOCATION":
            return {...state, locationEvent2: action.locationEvent2}
        case "HANDLE_EVENT_PDF":
            return {...state, multipartFile: action.multipartFile}
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
            return {...state, eventById:action.eventById, eventDetail: action.eventDetail}
        case "CLEAR_STATE":
            return {...state, eventForm: {...initialState.eventForm}}


        case 'SUCCESS_INPUT_CITY':
            return {...state, location: {...state.location, city: action.city}}
        case 'SUCCESS_INPUT_ADDRESS':
            return {...state, location: {...state.location, address: action.address}}
        case 'SUCCESS_INPUT_LATITUDE':
            return {...state, location: {...state.location, latitude: action.latitude}}
        case 'SUCCESS_INPUT_LONGITUDE':
            return {...state, location: {...state.location, longitude: action.longitude}}
        default:
            return {...state}
    }
}
