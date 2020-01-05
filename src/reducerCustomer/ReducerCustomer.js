const initialState= {
    events:[],
    eventById:[],
    eventDetail:[],
    eventDetailById:[],
    ticket:[],
    cart:[],
    cartById:[],
    cartForm:{ticketIdTransient:"",userIdTransient:"",quantity:""},
    cartFormUpdate:{},
    bookingForm:{userIdTransient:"",bookingDetailList:[]},
    bookingDetail:[],
    booking:[],
    paymentForm:{bookingIdTransient:""}
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
        case "FETCH_CART_ID":
            return {...state, cartById: action.cartById}
        case "FETCH_CART_BY_ID":
            return {...state, cartFormUpdate: action.cartFormUpdate}
        case "HANDLE_TICKET_TRANSIENT":
            return {...state, cartForm: {...state.cartForm, ticketIdTransient: action.ticketIdTransient}}
        case "HANDLE_USER_TRANSIENT":
            return {...state, cartForm: {...state.cartForm, userIdTransient: action.userIdTransient}}
        case "HANDLE_QUANTITY":
            return {...state, cartForm: {...state.cartForm, quantity: action.quantity}}
        case "HANDLE_QUANTITY_UPDATE":
            return {...state, cart: state.cart.map((element, index)=>{
                    if (index===action.index){
                        return {...element, quantity:action.quantity};
                    }else {
                        return {...element};
                    }
                })}
        case "BOOKING_DETAIL":
            return {...state, bookingDetail: action.bookingDetail}
        case "ADD_BOOKING_DETAIL":
            return {...state, bookingForm: {...state.bookingForm, bookingDetailList:state.bookingForm.bookingDetailList.concat(
                [{ticketIdTransient:"",quantity:""}]
                    )}}
        case "HANDLE_BOOKING":
            return {...state, bookingForm: {...state.bookingForm, userIdTransient:action.userIdTransient}}
        case "HANDLE_TICKET_TRANSIENT_BOOKING":
            return {...state, bookingForm: {...state.bookingForm, bookingDetailList: state.bookingForm.bookingDetailList.map(
                        (element,index)=>{
                            if (index===action.index){
                                return {...element, ticketIdTransient:action.ticketIdTransient}
                            }else {
                                return {...element}
                            }
                        }
                    )}}
        case "HANDLE_QUANTITY_BOOKING":
            return {...state, bookingForm: {...state.bookingForm, bookingDetailList:state.bookingForm.bookingDetailList.map(
                        (element,index)=>{
                            if (index===action.index){
                                return {...element, quantity:action.quantity}
                            }else {
                                return {...element}
                            }
                        }
                    )
            }}
        case "CLEAR_STATE_BOOKING_FORM":
            return {...state, bookingForm: initialState.bookingForm}
        case "FETCH_BOOKING_SUCCESS":
            return {...state, booking: action.booking}
        case "HANDLE_PAYMENT":
            return {...state, paymentForm: {...state.paymentForm, bookingIdTransient: action.bookingIdTransient}}
        default:
            return {...state}
    }
}
