import React from 'react';
import {connect} from "react-redux";
import {
    clearstate, clearstateupdate,
    fetchcategorybyidsuccess,
    fetchcategorysuccess,
    handlecategoryname,
    handlecategorynameupdate
} from "../CategoryAction";
import {fetchDataCategory, fetchDataCategoryById, saveDataCategory} from "../service/CategoryService";
import CategoryForm from "./CategoryForm";

class CategoryList extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">TABLES CATEGORY</h6>
                        <button className="btn btn-primary" type="button" data-toggle="modal"
                                data-target="#exampleModal">
                            Add
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                            <td>No</td>
                            <td>Category Name</td>
                            <td>Action</td>
                        </thead>
                        {this.props.category.map((element, index)=>{
                          return  <tbody>
                              <td>{index+1}</td>
                                <td>{element.categoryName}</td>
                              <td><button data-target="#editData" onClick={() =>{this.handleDataEdit(element.id)}}  className="btn btn-sm btn-warning"><i className="fa fa-pencil-alt"/></button>
                                  <button value={element.id} onClick={this.handleDataDelete} className="btn btn-sm btn-danger"><i className="fa fa-trash"/></button></td>
                            </tbody>
                        })}

                    </table>
                    </div>
                    <CategoryForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                    <CategoryForm handleSubmit={this.handleUpdate} handleChange={this.handleChangeUpdate} />
                </div>
            </div>


        )
    }
    handleChange = (event) => {
        this.props.dispatch(
            {...handlecategoryname, categoryName: event.target.value}
        );
    }
    handleChangeUpdate = (event) => {
        this.props.dispatch(
            {...handlecategorynameupdate, categoryName: event.target.value}
        );
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await saveDataCategory(this.props.categoryForm).then(this.dataCategory)
        this.props.dispatch({...clearstate})
    }
    handleUpdate = async (event) => {
        event.preventDefault();
        await saveDataCategory(this.props.categoryUpdate).then(this.dataCategory)
        this.props.dispatch({...clearstateupdate})
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
export default connect(mapStateToProps)(CategoryList)
