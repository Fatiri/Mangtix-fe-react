const initialState= {
    booking: [],
    bookingDetail:[],
    bookingForm: {
        },
    user:[],
    userTransient:"",
    ticket:[],
    event:[],
    eventDetail:[]

}
        export default function bookingReducer(state=initialState, action){
            console.log('booking-reducer', state, action)
            switch(action.type){
                case "FETCH_DATA_BOOKING_SUCCESS":
                    return{...state, booking:action.booking,  bookingDetail: action.bookingDetail}
                case "FETCH_USER_SUCCESS":
                    return {...state, user: action.payload}
                    default:
                    return {...state}
            }
}
