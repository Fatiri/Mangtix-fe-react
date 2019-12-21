const initialState = {
    category: [],
    categoryForm: {
        categoryName: ""
    }

}

export default function categoryReducer(state = initialState, action) {
    console.log("categoryReducer", state, action);
    switch (action.type) {
        case "FETCH_CATEGORY_SUCCESS":
            return {...state, category: action.payload};
        case "HANDLE_CATEGORY_NAME":
            return {...state, categoryForm: {...state.categoryForm, categoryName: action.categoryName}}
        default:
            return {...state}
    }

}
