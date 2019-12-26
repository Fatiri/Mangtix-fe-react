const initialState = {
    categories: [],
    category:[],
    event:[],
    ticket:[],
    ticketCode:[],
    ticketForm:{
        categoryIdTransient:"",
        eventIdTransient:"2f879c22-f780-404f-a5a2-90c5cef9a4d1",
        price:"",
        quantity:"",
    },
    ticketUpdate:{
        id:"",
        categoryIdTransient:"",
        eventIdTransient:"2f879c22-f780-404f-a5a2-90c5cef9a4d1",
        price:"",
        quantity:"",
        onSaleTransient:"",
        freeTransient:"",
        ticketCodes:[]
    }

}

export default function ticketReducer(state = initialState, action) {
    console.log("ticketReducer", state.ticketUpdate);
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
        case "HANDLE_ID_UPDATE":
            return {...state, ticketUpdate: {...state.ticketUpdate, id: action.id}};
        case "HANDLE_CATEGORY_ID_UPDATE":
            return {...state, ticketUpdate: {...state.ticketUpdate, categoryIdTransient:action.categoryIdTransient}};
        case "HANDLE_EVENT_ID_UPDATE":
            return {...state, ticketUpdate: {...state.ticketUpdate, eventIdTransient: action.eventIdTransient}};
        case "HANDLE_PRICE_UPDATE":
            return {...state, ticketUpdate: {...state.ticketUpdate, price: action.price}};
        case "HANDLE_QUANTITY_UPDATE":
            return {...state, ticketUpdate: {...state.ticketUpdate, quantity: action.quantity}};
        case "HANDLE_ON_SALE_UPDATE":
            return {...state, ticket: {...state.ticket, onSaleTransient: action.onSaleTransient}};
        case "HANDLE_FREE_UPDATE":
            return {...state, ticket: {...state.ticket, freeTransient: action.freeTransient}};
        case "CLEAR_STATE":
            return {...state, ticketForm: {...initialState.ticketForm}};
        default:
            return {...state}
    }

}
