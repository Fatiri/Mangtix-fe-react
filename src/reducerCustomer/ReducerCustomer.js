const initialState= {
    events:[],
    eventById:[],
    eventDetail:[],
    ticket:[],
}
export default function reducerCustomer(state=initialState, action){
    console.log('event-reducer', state, action)
    switch (action.type) {
        case "FETCH_EVENT_SUCCESS":
            return {...state, events: action.payload}
        case "FETCH_TICKET_SUCCESS":
            return {...state, ticket: action.payload}
        case "FETCH_EVENT_DETAIL_SUCCESS":
            return {...state, eventDetail: action.payload}
        case "HANDLE_CHANGE_DATA":
            return {...state, eventById:action.eventById, eventDetail: action.eventDetail}

        default:
            return {...state}
    }
}
