const initialState = {
    categories: [],
    category:[],
    event:[],
    eventDetail:[],
    ticket:[],
    ticketById:[],
    ticketCode:[],
    ticketForm:{
        categoryIdTransient:"",
        // eventDetailIdTransient:"d1fc835a-913e-4c33-bf24-d9fd03718402",
        eventDetailIdTransient:"",
        price:0,
        quantity:0,
    },
    company:{id:"293b4491-50aa-4a96-91d2-db691eeb3f78"},
    eventTransient:""

}

export default function ticketReducer(state = initialState, action) {
    console.log("ticketReducer", state,action);
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
            return {...state, ticket: action.ticket, category: action.category, eventDetail: action.eventDetail, ticketCode: action.ticketCode}
        case "HANDLE_CATEGORY_ID":
            return {...state, ticketForm: {...state.ticketForm, categoryIdTransient:action.categoryIdTransient}};
        case "HANDLE_EVENT_ID":
            return {...state, eventTransient:action.eventTransient};
        case "HANDLE_EVENT_DETAIL_ID":
            return {...state, ticketForm: {...state.ticketForm, eventDetailIdTransient: action.eventDetailIdTransient}};
        case "HANDLE_PRICE":
            return {...state, ticketForm: {...state.ticketForm, price: action.price}};
        case "HANDLE_QUANTITY":
            return {...state, ticketForm: {...state.ticketForm, quantity: action.quantity}};
        case "HANDLE_ON_SALE_UPDATE":
            return {...state, ticketById: {...state.ticketById, onSaleTransient: action.onSaleTransient}}
        case "HANDLE_FREE_UPDATE":
            return {...state, ticketById: {...state.ticketById, freeTransient: action.freeTransient}}
        case "CLEAR_STATE":
            return {...state, ticketForm: {...initialState.ticketForm}};
        case "CLEAR_STATE_ON_SALE":
            return {...state, ticketById: {...initialState.ticketById.onSaleTransient}};
        case "CLEAR_STATE_FREE":
            return {...state, ticketById: {...initialState.ticketById.freeTransient}};
        case "HANDLE_CHANGE_DATA_TICKET":
            return {...state, ticketById:action.ticketById, category: action.category, eventDetail: action.eventDetail, ticketCode: action.ticketCode}
        default:
            return {...state}
    }

}
