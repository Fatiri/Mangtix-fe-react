import React from 'react';
import {connect} from "react-redux";
import {
    clearstate, clearstatefree, clearstateonstate,
    fetchcategorysucces, fetchticketsavesuccess,
    handlecategoryid, handlefreeupdate, handleonsaleupdate,
    handleprice,
    handlequantity
} from "../../TicketAction";
import {
    saveDataTicket,
    updateDataTicket
} from "../../service/TicketService";
import {fetchDataCategory} from "../../../categories/service/CategoryService";

class TicketForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Category</label>
                    <select value={this.props.ticketForm.categoryIdTransient} onChange={(event) => {
                        this.props.dispatch(
                            {...handlecategoryid, categoryIdTransient: event.target.value})
                    }}>
                        <option>Choose Category</option>
                        {this.props.categories.map((element, index) => {
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

                <form onSubmit={this.handleUpdate}>
                    <label>Quantity Status OnSale</label>
                    <input value={this.props.ticket.onSaleTransient} onChange={(event)=>{this.props.dispatch(
                        {...handleonsaleupdate, onSaleTransient:event.target.value})}}/>
                    <label>Quantity Status Free</label>
                    <input value={this.props.ticket.freeTransient} onChange={(event)=>{this.props.dispatch(
                        {...handlefreeupdate, freeTransient:event.target.value})}}/>
                    <button type="submit">Update</button>
                    <table>
                        <tbody>
                        <td>{this.props.ticket.id}</td>
                        <td>{this.props.category.categoryName}</td>
                        <td>{this.props.event.id}</td>
                        </tbody>
                        {this.props.ticketCode.map((element, index)=>{
                            return <tbody>
                            <td>{element.ticketCode}</td>
                            <td>{element.statusTicketOut}</td>
                            <td>{element.available}</td>
                            <td>{element.arrived}</td>
                            </tbody>
                        })}
                    </table>
                </form>

            </div>
        )
    }

    handleUpdate=async (event)=>{
        event.preventDefault()
        this.props.ticket.categoryIdTransient=this.props.category.id;
        this.props.ticket.eventIdTransient=this.props.event.id;
        const ticket=await updateDataTicket(this.props.ticket);
        console.log(ticket);
        let action = {...fetchticketsavesuccess, ticket:ticket, category:ticket.category, event:ticket.event, ticketCode: ticket.ticketCodes}
        this.props.dispatch(action)
        this.props.dispatch({...clearstateonstate})
        this.props.dispatch({...clearstatefree})

    }
    handleSubmit=async (event)=>{
        event.preventDefault()
        const ticket = await saveDataTicket(this.props.ticketForm)
        console.log(ticket);
        let action = {...fetchticketsavesuccess, ticket:ticket, category:ticket.category, event:ticket.event, ticketCode: ticket.ticketCodes}
        this.props.dispatch(action)
        this.props.dispatch({...clearstate})
    }
    componentDidMount() {
        this.dataCategory()
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
