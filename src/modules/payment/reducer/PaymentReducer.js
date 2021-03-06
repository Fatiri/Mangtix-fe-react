const initialState = {
    booking: [],
    bookingDetail: [],
    bookingForm: {},
    user: [],
    userTransient: {},
    ticket: [],
    event: [],
    eventDetail: [],
    payment:[]
}
export default function paymentReducer(state = initialState, action) {
    console.log('booking-reducer', state, action)
    switch (action.type) {
        case "FETCH_DATA_BOOKING":
            return {...state, booking: action.booking, bookingDetail: action.bookingDetail, user: action.user}
        case "FETCH_DATA_PAYMENT":
            return {...state, payment: action.payload}
        case "FETCH_USER_SUCCESS":
            return {...state, user: action.payload}
        case "FETCH_USER_BY_ID":
            return {...state, userTransient: action.payload}
        default:
            return {...state}
    }
}
