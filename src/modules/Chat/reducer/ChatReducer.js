const initialState ={
    message:[]
}

export default function chatReducer(state = initialState , action) {
    switch (action.type) {
        case 'SUCCESS_HANDLE_USER_NAME':
            return {...state, message: action.message}
        case 'SUCCESS_HANDLE_MESSAGE_CHAT':
            return  {}
        default:return state

    }

}
