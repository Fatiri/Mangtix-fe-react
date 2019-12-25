import React from 'react';
import {connect} from "react-redux";
import {fetchDataEventByCompany} from "../../service/EventService";
import {fetcheventsuccess} from "../../EventAction";

class EventByCompany extends React.Component{
    render() {
        return(
            <div>
                <table>
                    <thead>
                        <td>Event Name</td>
                        <td>Description</td>
                        <td>Action</td>
                    </thead>
                    {this.props.events.map((element, index)=>{
                        return <tbody>
                        <td>{element.eventName}</td>
                        <td>{element.descriptionEvent}</td>
                        <td><button>Detail</button></td>
                        </tbody>
                    })}

                </table>
            </div>
        )
    }
    componentDidMount() {
        let data=this.props.company.id;
        this.dataEvent(data)
    }

    dataEvent=async(event)=>{
        const data =await fetchDataEventByCompany(event);
        if (!(data===undefined)){
            let action = {...fetcheventsuccess, payload:data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
}
const mapStateToProps=(state)=>{
    console.log(state, "ini mapStateToProps")
    return {...state}
}
export default connect(mapStateToProps)(EventByCompany)
