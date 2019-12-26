import React from 'react';
import {connect} from "react-redux";
import {clearstate, fetchcategorysuccess, handlecategoryname} from "../CategoryAction";
import {fetchDataCategory, saveDataCategory} from "../service/CategoryService";

class CategoryForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}{...clearstate}>
                    <input type="text" value={this.props.categoryForm.categoryName}
                           onChange={(event) => {
                               this.props.dispatch(
                                   {...handlecategoryname, categoryName: event.target.value})}} required/>
                    <button type="submit">Save</button>
                </form>

                <div>
                    <table>
                        <thead>
                            <td>No</td>
                            <td>Category Name</td>
                            <td>Action</td>
                        </thead>
                        {this.props.category.map((element, index)=>{
                          return  <tbody>
                              <td>{index+1}</td>
                                <td>{element.categoryName}</td>
                              <td><button>Edit</button><button>Delete</button></td>
                            </tbody>
                        })}

                    </table>
                </div>
            </div>
        )
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await saveDataCategory(this.props.categoryForm).then(this.dataCategory)
    }
    dataCategory=async ()=>{
        const data = await fetchDataCategory();
        if (!(data === undefined)){
            let action ={...fetchcategorysuccess, payload:data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
    componentDidMount() {
        this.dataCategory()
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(CategoryForm)
