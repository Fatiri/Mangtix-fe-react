import React from 'react';
import {connect} from "react-redux";
import {handlecompanyname} from "../CompanyAction";
import {saveDataCompany} from "../service/CompanyService";

class CompanyForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.props.companyForm.companyName} onChange={(event) => {
                        this.props.dispatch(
                            {...handlecompanyname, companyName: event.target.value})
                    }}/>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await saveDataCompany(this.props.companyForm)
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(CompanyForm)
