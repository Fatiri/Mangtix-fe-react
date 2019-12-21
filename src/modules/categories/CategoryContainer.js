import React, {Component} from 'react';
import CategoryList from "./components/CategoryList";

class CategoryContainer extends Component {
    render() {
        return (
            <div className="row">
                <CategoryList/>
            </div>
         );
    }
}

export default CategoryContainer;
