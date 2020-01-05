const initialState = {
    booking: [],
    bookingDetail: [],
    bookingForm: {},
    user: [],
    userTransient: {},
    ticket: [],
    event: [],
    eventDetail: [],
    company:"",
    companyUsers:[],
    eventManagement:[],
    eventDetailList:[],
    bookingManagement:[],
    bookingDetailManagement:[],
    eventDetailIdManagement:"",
    bookingDetailListManagement:[],
    ticketManagement:[],
    pureBookingListManagement: {
        booking:[]
    }

}
export default function bookingReducer(state = initialState, action) {
    console.log('booking-reducer', state, action)
    switch (action.type) {
        case "FETCH_DATA_BOOKING_SUCCESS":
            return {...state, booking: action.booking, bookingDetail: action.bookingDetail}
        case "FETCH_DATA_EVENT_MANAGEMENT_SUCCESS":
            return {...state, eventManagement: action.eventManagement, eventDetailManagement:action.eventDetailManagement}
        case "FETCH_DATA_BOOKING_MANAGEMENT_SUCCESS":
            return {...state, bookingManagement: action.bookingManagement, bookingDetailListManagement:action.bookingDetailListManagement}
        case "ADD_BOOKING__DETAIL_MANAGEMENT_SUCCESS":
            return {...state, bookingDetailListManagement:action.bookingDetailListManagement}
        case "ADD_PURE_BOOKING_MANAGEMENT_SUCCESS":
            return {...state, pureBookingListManagement: {...state, booking:state.pureBookingListManagement.booking.concat(
                        [{data:action.booking}]
                    )}}
        case "FETCH_USER_SUCCESS":
            return {...state, user: action.payload}
        case "FETCH_USER_BY_ID":
            return {...state, userTransient: action.payload, companyUser:action.companyUser}
        case "ADD_TICKET_MANAGEMENT":
            return {...state, ticketManagement: action.ticketManagement}
        case "ADD_EVENT_DETAIL_MANAGEMENT":
            return {...state, eventDetailIdManagement: action.eventDetailIdManagement}
        default:
            return {...state}
    }
}
