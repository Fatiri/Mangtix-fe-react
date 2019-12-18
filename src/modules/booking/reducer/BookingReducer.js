const initialState= {
    booking: [],
    bookingForm: {
        id: null,
        book: '',
        total_price: null,
        payment_status: '',
        mst_user: {
            user_id: null,
        }
    }
}
        export default function bookingReducer(state=initialState, action){
            console.log('booking-reducer', state, action)
            switch(action.type){
                case 'FETCH_DATA_BOOKING_SUCCESS':
                    return{...state, booking:action.payload}
                case 'HANDLE_ON_CHANGE_USER_ID':
                    return {...state, bookingForm: {...state.bookingForm,}}
            }
}