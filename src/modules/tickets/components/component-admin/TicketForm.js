import React from 'react';
import {connect} from "react-redux";
import {
    fetchcategorysucces,
    fetchticketsuccess,
    handlecategoryid,
    handleprice,
    handlequantity
} from "../../TicketAction";
import {fetchDataTicketById, saveDataTicket} from "../../service/TicketService";
import {fetchDataCategory} from "../../../categories/service/CategoryService";

class TicketForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Kategory</label>
                    <select value={this.props.ticketForm.categoryIdTransient} onChange={(event) => {
                        this.props.dispatch(
                            {...handlecategoryid, categoryIdTransient: event.target.value})
                    }}>
                        <option>Choose Category</option>
                        {this.props.category.map((element, index) => {
                            return <option value={element.id}>
                                {element.categoryName}
                            </option>
                        })}
                    </select>
                    <label>Price</label>
                    <input value={this.props.ticketForm.price} onChange={(event) => {
                        this.props.dispatch(
                            {...handleprice, price: event.target.value})
                    }}/>
                    <label>Quantity</label>
                    <input value={this.props.ticketForm.quantity} onChange={(event)=>{
                        this.props.dispatch(
                            {...handlequantity, quantity:event.target.value})
                    }}/>
                    <button type="submit">Save</button>
                </form>

                <table>
                    <thead>
                    <td>No</td>
                    <td>Code Ticket</td>
                    </thead>
                    {this.props.ticket.map((element,index)=>{
                        {element.ticketCodes.map((element, index)=>{
                            return <tbody>
                            <td>{index + 1}</td>
                            <td>{element.ticketCode}</td>
                            </tbody>
                        })}

                    })}
                </table>

            </div>
        )
    }

    handleSubmit=async (event)=>{
        event.preventDefault()
        saveDataTicket(this.props.ticketForm)

    }
    componentDidMount() {
        this.dataCategory()
        this.dataTicket(this.props.ticketForm.id)

    }

    dataTicket=async (id)=>{
        const data = await fetchDataTicketById(id);
        if (!(data===undefined)){
            let action = {...fetchticketsuccess, payload:data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
    dataCategory=async ()=>{
        const data = await fetchDataCategory();
        if (!(data===undefined)){
            let action = {...fetchcategorysucces, payload:data}
            console.log(action)
            this.props.dispatch(action)
        }
    }

}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(TicketForm)
