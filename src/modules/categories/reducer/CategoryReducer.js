const initialState = {
    category: [],
    categoryById:[],
    categoryForm: {
        categoryName: ""
    },
    categoryUpdate: {
        id:"",
        categoryName: ""
    }

}

export default function categoryReducer(state = initialState, action) {
    console.log("categoryReducer", state, action);
    switch (action.type) {
        case "FETCH_CATEGORY_SUCCESS":
            return {...state, category: action.payload};
        case "FETCH_CATEGORY_BY_ID_SUCCESS":
            return {...state, categoryUpdate: action.payload};
        case "HANDLE_CATEGORY_NAME":
            return {...state, categoryForm: {...state.categoryForm, categoryName: action.categoryName}};
        case "HANDLE_CATEGORY_NAME_UPDATE":
            return {...state, categoryUpdate: {...state.categoryUpdate, categoryName: action.categoryName}};
        case "CLEAR_STATE":
            return {...state, categoryForm: {...initialState.categoryForm}};
        case "CLEAR_STATE_UPDATE":
            return {...state, categoryUpdate: {...initialState.categoryUpdate}};
        default:
            return {...state}
    }

}
