import React from 'react';
import {connect} from "react-redux";
import {clearstate, fetchcategorybyidsuccess, fetchcategorysuccess, handlecategoryname} from "../CategoryAction";
import {fetchDataCategory, fetchDataCategoryById, saveDataCategory} from "../service/CategoryService";

class CategoryForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                              <td><button  onClick={() =>{this.handleDataEdit(element.id)}}>Edit</button>
                                  <button value={element.id} onClick={this.handleDataDelete}>Delete</button></td>
                            </tbody>
                        })}

                    </table>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.props.categoryById.categoryName}
                           onChange={(event) => {
                               this.props.dispatch(
                                   {...handlecategoryname, categoryName: event.target.value})}} required/>
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await saveDataCategory(this.props.categoryForm).then(this.dataCategory)
        this.props.dispatch({...clearstate})
    }
    dataCategory=async ()=>{
        const data = await fetchDataCategory();
        if (!(data === undefined)){
            let action ={...fetchcategorysuccess, payload:data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
    handleDataEdit = async (id) => {
        const data = await fetchDataCategoryById(id)
        this.props.dispatch({...fetchcategorybyidsuccess, payload: data})
    }
    handleDataDelete = async (id) => {
        await fetchDataCategoryById(id).then(this.dataCategory)
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
