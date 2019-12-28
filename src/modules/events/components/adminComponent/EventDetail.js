import React from 'react'
import {connect} from "react-redux";


class EventDetail extends React.Component{
    render() {
        function goBack() {
            window.history.back()
        }
        return(
            <div>
                <div className="card-header card-header-primary">
                    <h5 className="card-title">
                        <button className="btn btn-primary" onClick={goBack}><i
                            className="fa fa-arrow-alt-circle-left"></i></button>
                    </h5>
                    <br/>
                    <h3 className="card-category">Detail Event</h3>
                </div>
                <form>
                    <img src={`C:\\nginx-1.16.1\\html\\data-events\\${this.props.eventById.id}`}/>
                    <h3>{this.props.eventById.eventName}</h3>
                    <h4>{this.props.eventById.descriptionEvent}</h4>
                    <br/>
                    <br/>
                    {this.props.eventDetail.map((element,index)=>{
                       return <div className="row">
                               <div className="col-sm-6">
                                   <div className="card">
                                       <div className="card-body">
                                           <h5 className="card-title">{element.eventDay} || {element.eventDate}</h5>
                                           <p className="card-text">Venue  : {element.venue}</p>
                                           <p className="card-text">{element.description}</p>
                                       </div>
                                   </div>
                               </div>
                           </div>

                    })}
                </form>


            </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToPropsEventDetail");
    return {...state};
}
export default connect(mapStateToProps)(EventDetail)
