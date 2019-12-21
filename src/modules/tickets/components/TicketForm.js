import React from 'react';
import {connect} from "react-redux";
import {handlecategoryid} from "../TicketAction";

class TicketForm extends React.Component{
    render() {
        return(
            <div>
                <form>
                    <select value={this.props.ticketForm.categoryIdTransient} onChange={(event)=>{this.props.dispatch(
                        {...handlecategoryid, categoryIdTransient:event.target.value})}}>
                        <option>Choose Category</option>
                        {this.props.category.map((element, index)=>{
                            return<option value={element.id}>
                                {element.categoryName}
                            </option>
                        })}
                    </select>

                </form>
            </div>
        )
    }
    componentDidMount() {
    }

}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(TicketForm)
