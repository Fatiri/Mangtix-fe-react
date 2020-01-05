import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {fetchDataEvent, fetchDataEventId} from "../../modules/events/service/EventService";
import {fetcheventsuccess, handleChangeData} from "../../reducerCustomer/ActionReducerCustomer";
import Authentication from "../../authentication/Authentication";
import decodeJwtToken from "../../authentication/AutheticationDecodeJwt";

class Events extends Component {
    render() {
        const Auth = new Authentication();
        if (Auth.isLogin()) {
            const dataToken = decodeJwtToken();
            if (!(dataToken===null)){

            }else {
                alert("wrong credential")
                localStorage.clear();
                return <Redirect to="/login"/>
            }
            if (!(dataToken.sub === "CUSTOMER")) {
                return <Redirect to="/dashboard"/>
            }
        }
        return (
            <div>
                <section className="section-padding--small sponsor-bg">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Events</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div class="row">
                            {this.props.events.map((element, index) => {
                                return <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                    <div className="card-speaker">
                                        <img className="image-event"
                                             src={`http://localhost/data-events/${element.id}`} alt=""></img>
                                        <div className="speaker-footer">
                                            <h4>{element.eventName}</h4>
                                            <p></p>
                                        </div>
                                        <div className="speaker-overlay">
                                            <ul className="speaker-social">
                                                <li><Link class="button button-header" to="/event-schedule"
                                                          onClick={() => this.handleDetail(element.id)}>View
                                                    Detail</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    handleDetail = async (id) => {
        console.log(id + "ini id")
        const data = await fetchDataEventId(id)
        console.log(data.eventName + "ini data event form")
        this.props.dispatch({...handleChangeData, eventById: data, eventDetail: data.eventDetailList, eventDetailById:data.eventDetailList[0]})
        console.log(this.props.eventById)
    }


    dataEventAll = async () => {
        const data = await fetchDataEvent();
        let action = {...fetcheventsuccess, payload: data}
        console.log(action)
        this.props.dispatch(action)
    }

    componentDidMount() {
        this.dataEventAll();
    }
}

const mapStateToProps = (state) => {
    console.log(state, "ini mapStateToProps");
    return {...state};
}
export default connect(mapStateToProps)(Events);
