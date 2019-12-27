const initialState = {
    categories: [],
    category:[],
    event:[],
    ticket:[],
    ticketCode:[],
    ticketForm:{
        categoryIdTransient:"",
        eventIdTransient:"7a2d557e-6e88-40f6-ab50-585ad4260522",
        price:"",
        quantity:"",
    },
    ticketUpdate:{
        id:"",
        categoryIdTransient:"",
        eventIdTransient:"7a2d557e-6e88-40f6-ab50-585ad4260522",
        price:"",
        quantity:"",
        onSaleTransient:0,
        freeTransient:0,
        ticketCodes:[]
    }

}

export default function ticketReducer(state = initialState, action) {
    console.log("ticketReducer", state, action);
    switch (action.type) {
        case "FETCH_CATEGORY_SUCCESS":
            return {...state, categories: action.payload};
        case "FETCH_EVENT_SUCCESS":
            return {...state, event: action.payload};
        case "FETCH_TICKET_SUCCESS":
            return {...state, ticket: action.payload};
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
