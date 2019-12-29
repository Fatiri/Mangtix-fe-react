import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handlecategorynameupdate} from "../CategoryAction";


class CategoryFormEdit extends Component {
    render() {
        return (
            <>
                <div className="modal fade" id="editData" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Category</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form className="modal-body" onSubmit={this.handleUpdate}>
                                <input className="form-control" type="text" value={this.props.categoryUpdate.categoryName}
                                       onChange={(event) => {
                                           this.props.dispatch(
                                               {...handlecategorynameupdate, categoryName: event.target.value})}} required/>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="submit">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps=(state)=> {
    return {...state};
}


export default connect(
    mapStateToProps,
)(CategoryFormEdit);