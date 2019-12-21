const initialState = {
    companyForm:{
        companyName:""
    },
    company:[]

}

export default function companyReducer(state = initialState, action) {
    console.log("companyReducer", state, action);
    switch (action.type) {
        case "FETCH_COMPANY_SUCCESS":
            return {...state, company: action.payload};
        case "HANDLE_COMPANY_NAME":
            return {...state, companyForm: {...state.companyForm, companyName: action.companyName}};
        case "CLEAR_STATE":
            return {...state, companyForm: {...initialState.companyForm}};
        default:
            return {...state}
    }

}
