import React, {Component} from 'react';
import Adminnavbar from "./adminnavbar";
import Adminfooter from "./adminfooter";

class AdminContent extends Component {
    render() {
        return (
            <>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Adminnavbar/>

                        <div className="container-fluid" id="container-wrapper">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Blank Page</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="./">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Blank Page</li>
                                </ol>
                            </div>

                            <div className="text-center">

                                <h4 className="pt-3">save your <b>imagination</b> here!</h4>
                            </div>
                        </div>
                    </div>
                    <Adminfooter/>
                </div>
            </>
        );
    }
}

export default AdminContent;
