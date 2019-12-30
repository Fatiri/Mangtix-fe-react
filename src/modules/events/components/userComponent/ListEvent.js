import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchDataEventByCompany} from "../../service/EventService";
import {fetcheventsuccess} from "../../EventAction";

class ListEvent extends React.Component {
    render() {
        return (
            <div>
                <section className="section-padding--small sponsor-bg">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Events</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div className="card-speaker">
                                    {/*<img src={`C:\\nginx-1.16.1\\html\\data-events\\${this.props.eventById.id}`}/>*/}
                                    <img className="card-img rounded-0" src="img/home/speaker-2.png" alt=""></img>
                                    <div className="speaker-footer">
                                        <table className="table table-hover">

                                            {this.props.events.map((element, index) => {
                                                return <tbody>
                                                <td>{element.eventName}</td>
                                                {/*<td><Link to={"/event-detail"} onClick={() => {*/}
                                                {/*    this.handleDetail(element.id)*/}
                                                {/*}}>Detail</Link></td>*/}
                                                </tbody>
                                            })}

                                        </table>
                                    </div>
                                    <div className="speaker-overlay">
                                        <ul className="speaker-social">
                                            <li><Link class="button button-header" to="/event-schedule">View
                                                Detail</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    dataEvent = async (event) => {
        const data = await fetchDataEventByCompany(event);
        console.log(data)
        if (!(data === undefined)) {
            let action = {...fetcheventsuccess, payload: data}
            console.log(action)
            this.props.dispatch(action)
        }
    }
}
const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToPropsEvent");
    return {...state};
}
export default connect(mapStateToProps)(ListEvent)