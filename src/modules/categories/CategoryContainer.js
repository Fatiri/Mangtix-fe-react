import React, {Component} from 'react';
import {createStore} from "redux";
import categoryReducer from "./reducer/CategoryReducer";
import {Provider} from "react-redux";
import CategoryForm from "./components/CategoryForm";

class CategoryContainer extends Component {
    render() {
        return (
            <div>
                <Provider store={createStore(categoryReducer)}><CategoryForm/></Provider>
            </div>
         );
    }
}

export default CategoryContainer;
