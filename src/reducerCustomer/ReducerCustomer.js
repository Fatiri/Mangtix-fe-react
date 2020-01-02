const initialState= {
    events:[],
    eventById:[],
    eventDetail:[],
    eventDetailById:[],
    ticket:[],
    cart:[],
    cartForm:{ticketIdTransient:"",userIdTransient:"",quantity:""},
    bookingForm:{userIdTransient:"",bookingDetailList:[]}
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
            return {...state, eventById:action.eventById, eventDetail: action.eventDetail, eventDetailById: action.eventDetailById}
        case "HANDLE_EVENT_DETAIL_BY_ID":
            return {...state, eventDetailById: action.payload}
        case "FETCH_CART":
            return {...state, cart: action.cart}
        case "HANDLE_TICKET_TRANSIENT":
            return {...state, cartForm: {...state.cartForm, ticketIdTransient: action.ticketIdTransient}}
        case "HANDLE_USER_TRANSIENT":
            return {...state, cartForm: {...state.cartForm, userIdTransient: action.userIdTransient}}
        case "HANDLE_QUANTITY":
            return {...state, cartForm: {...state.cartForm, quantity: action.quantity}}
        default:
            return {...state}
    }
}
