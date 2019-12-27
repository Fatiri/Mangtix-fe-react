const initialState = {
    categories: [],
    category:[],
    event:[],
    eventDetail:[],
    ticket:[],
    ticketCode:[],
    ticketForm:{
        categoryIdTransient:"",
        eventDetailIdTransient:"d1fc835a-913e-4c33-bf24-d9fd03718402",
        price:"",
        quantity:"",
    },


}

export default function ticketReducer(state = initialState, action) {
    console.log("ticketReducer", state, action);
    switch (action.type) {
        case "FETCH_CATEGORY_SUCCESS":
            return {...state, categories: action.payload};
        case "FETCH_EVENT_SUCCESS":
            return {...state, event: action.payload};
        case "FETCH_EVENT_DETAIL_SUCCESS":
            return {...state, eventDetail: action.payload};
        case "FETCH_TICKET_SUCCESS":
            return {...state, ticket: action.payload};
        case "FETCH_TICKET_CODE_SUCCESS":
            return {...state, ticketCode: action.payload};
        case "FETCH_TICKET_SAVE_SUCCESS":
            return {...state, ticket: action.ticket, category: action.category, event: action.event, ticketCode: action.ticketCode}
        case "HANDLE_CATEGORY_ID":
            return {...state, ticketForm: {...state.ticketForm, categoryIdTransient:action.categoryIdTransient}};
        case "HANDLE_EVENT_ID":
            return {...state, ticketForm: {...state.ticketForm, eventIdTransient: action.eventIdTransient}};
        case "HANDLE_PRICE":
            return {...state, ticketForm: {...state.ticketForm, price: action.price}};
        case "HANDLE_QUANTITY":
            return {...state, ticketForm: {...state.ticketForm, quantity: action.quantity}};
        case "HANDLE_ON_SALE_UPDATE":
            return {...state, ticket: {...state.ticket, onSaleTransient: action.onSaleTransient}}
        case "HANDLE_FREE_UPDATE":
            return {...state, ticket: {...state.ticket, freeTransient: action.freeTransient}}
        case "CLEAR_STATE":
            return {...state, ticketForm: {...initialState.ticketForm}};
        case "CLEAR_STATE_ON_SALE":
            return {...state, ticket: {...initialState.ticket.onSaleTransient}};
        case "CLEAR_STATE_FREE":
            return {...state, ticket: {...initialState.ticket.freeTransient}};
        default:
            return {...state}
    }

}
