const initialState = {
    category: [],
    categoryById:[],
    categoryForm: {
        categoryName: ""
    }

}

export default function categoryReducer(state = initialState, action) {
    console.log("categoryReducer", state, action);
    switch (action.type) {
        case "FETCH_CATEGORY_SUCCESS":
            return {...state, category: action.payload};
        case "FETCH_CATEGORY_BY_ID_SUCCESS":
            return {...state, categoryById: action.payload};
        case "HANDLE_CATEGORY_NAME":
            return {...state, categoryForm: {...state.categoryForm, categoryName: action.categoryName}};
        case "CLEAR_STATE":
            return {...state, categoryForm: {...initialState.categoryForm}};
        default:
            return {...state}
    }

}
