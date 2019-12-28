import React from "react";
import {handlecategoryname, handlecategorynameupdate} from "../CategoryAction";
import {connect} from "react-redux";

class CategoryForm extends React.Component {
    render() {
        return (
            <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Category</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form className="modal-body"
                              onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" value={this.props.categoryForm.categoryName}
                       onChange={(event) => {
                           this.props.dispatch(
                               {...handlecategoryname, categoryName: event.target.value})
                       }} required/>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                </button>

                                <button type="submit">Save</button>
                            </div>
            </form>
                    </div>
                </div>
            </div>

    </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(CategoryForm)
