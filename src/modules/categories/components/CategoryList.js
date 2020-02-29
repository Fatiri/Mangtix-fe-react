import React from 'react';
import {connect} from "react-redux";
import {
    clearstate, clearstateupdate,
    fetchcategorybyidsuccess,
    fetchcategorysuccess,
    handlecategoryname,
    handlecategorynameupdate
} from "../CategoryAction";
import {
    deleteDataCategoryById,
    fetchDataCategory,
    fetchDataCategoryById,
    saveDataCategory
} from "../service/CategoryService";
import CategoryForm from "./CategoryForm";
import CategoryFormEdit from "./CategoryFormEdit";

class CategoryList extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">TABLES CATEGORY</h6>
                        <button onClick={()=>{this.props.dispatch({...clearstate})}} className="btn btn-primary" type="button" data-toggle="modal"
                                data-target="#exampleModal">
                            Add
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table align-items-center table-flush" id="dataTable">
                        <thead className="thead-light">
                            <th>No</th>
                            <th>Category Name</th>
                            <th>Action</th>
                        </thead>
                        {this.props.category.map((element, index)=>{
                          return  <tbody>
                              <th>{index+1}</th>
                                <td>{element.categoryName}</td>
                              <td>
                                  <button  className="btn btn-sm btn-warning" type="button" data-toggle="modal"
                                          data-target="#editData" onClick={() =>{this.handleDataEdit(element.id)}} >
                                      <i className="fas fa-pencil-alt"/>
                                  </button>

                                  <button onClick={() =>{this.handleDataDelete(element.id)}} className="btn btn-sm btn-danger" style={{marginLeft:5}}><i className="fa fa-trash"/></button></td>
                            </tbody>
                        })}

                    </table>
                    </div>
                    <CategoryForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                    <CategoryFormEdit handleUpdate={this.handleUpdate} handleChangeUpdate={this.handleChangeUpdate} />
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
        await deleteDataCategoryById(id).then(this.dataCategory)
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
