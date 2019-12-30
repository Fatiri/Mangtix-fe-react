import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchDataEvent, fetchDataEventId} from "../../modules/events/service/EventService";
import {handleChangeData} from "../../modules/events/EventAction";
import {fetchDataListTicketByEventDetail, fetchDataTicket} from "../../modules/tickets/service/TicketService";
import {fetcheventsuccess, fetchticketsuccess} from "../../reducerCustomer/ActionReducerCustomer";

class EventSchedule extends Component {
    render() {
        return (
            <div>

                <section class="hero-banner hero-banner-sm">
                </section>

                <section className="section-padding--small sponsor-bg">
                    <div className="container">
                        <div className="section-intro text-center pb-98px">
                            <p className="section-intro__title">Join the event</p>
                            <h2 className="primary-text">Schedule</h2>
                            <img src="img/home/section-style.png" alt=""></img>
                        </div>

                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="scheduleTab">
                                    <ul className="nav nav-tabs">
                                        {this.props.eventDetail.map((element, index) => {
                                            return <>
                                                <li className="nav-item text-center">
                                                    <a onClick={() => {
                                                        this.dataTickets(element.id)
                                                    }} data-toggle="tab" href="#day"></a>
                                                    <h4>{element.eventDay}</h4>
                                                    <p>{element.eventDate}</p>
                                                    <p>{this.props.ticket.id}</p>
                                                </li>

                                            </>

                                        })}

                                        <label>  {this.props.ticket.id}</label>
                                    </ul>


                                    {/*<div className="tab-content">*/}
                                    {/*    <div id="day" className="tab-pane">*/}

                                    {/*        <div className="schedule-card">*/}
                                    {/*            <div className="row no-gutters">*/}
                                    {/*                <div className="col-lg-3">*/}
                                    {/*                    <img src="img/clients-logo/VVIP.png" alt=""></img>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="col-md-9 align-self-center">*/}
                                    {/*                    <div className="schedule-content">*/}
                                    {/*                        <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                    {/*                        <a className="schedule-title" href="#"></a>*/}
                                    {/*                        <h3>Previous Year achivement</h3>*/}
                                    {/*                        <div class="row mt-5">*/}
                                    {/*                            <div class="col-12 text-center">*/}
                                    {/*                                <a class="button mb-2" href="#">Buy Ticket</a>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}

                                            {/*        <div className="schedule-card">*/}
                                            {/*            <div className="row no-gutters">*/}
                                            {/*                <div className="col-lg-3">*/}
                                            {/*                    <img src="img/clients-logo/VIP.png" alt=""></img>*/}
                                            {/*                </div>*/}
                                            {/*                <div className="col-md-9 align-self-center">*/}
                                            {/*                    <div className="schedule-content">*/}
                                            {/*                        <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                        <a className="schedule-title" href="#"></a>*/}
                                            {/*                        <h3>Previous Year achivement</h3>*/}
                                            {/*                        <div className="row mt-5">*/}
                                            {/*                            <div className="col-12 text-center">*/}
                                            {/*                                <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                            </div>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}

                                            {/*</div>*/}
                                            {/*<div id="day2" className="tab-pane active">*/}

                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VVIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}

                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}

                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VVIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}

                                            {/*<div id="day3" className="tab-pane">*/}
                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VVIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}

                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}

                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VVIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}

                                            {/*<div id="day4" className="tab-pane">*/}
                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VVIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}

                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VVIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}

                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}

                                            {/*    <div className="schedule-card">*/}
                                            {/*        <div className="row no-gutters">*/}
                                            {/*            <div className="col-lg-3">*/}
                                            {/*                <img src="img/clients-logo/VIP.png" alt=""></img>*/}
                                            {/*            </div>*/}
                                            {/*            <div className="col-md-9 align-self-center">*/}
                                            {/*                <div className="schedule-content">*/}
                                            {/*                    <p className="schedule-date">9.00 AM - 10.30 AM</p>*/}
                                            {/*                    <a className="schedule-title" href="#"></a>*/}
                                            {/*                    <h3>Previous Year achivement</h3>*/}
                                            {/*                    <div className="row mt-5">*/}
                                            {/*                        <div className="col-12 text-center">*/}
                                            {/*                            <a className="button mb-2" href="#">Buy Ticket</a>*/}
                                            {/*                        </div>*/}
                                            {/*                    </div>*/}
                                            {/*                </div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                </section>
            </div>
    );
    }

    dataTickets = async (eventDetailId)=>{
        const data = await fetchDataListTicketByEventDetail(eventDetailId);
        let action = {...fetchticketsuccess, payload: data}
        this.props.dispatch(action)
        console.log(this.props.ticket+"data ticket")

    }

    dataEvent=async (eventDetail)=> {
        let eventDetailId="";
        console.log(this.props.eventDetail,"fghjk")
        eventDetail.map((element,index)=>{
        if(index===0){
        console.log(index)
        eventDetailId=element.id
        console.log(eventDetailId+"ksdnhjksdhjksdhjk")
    }
    })
        this.dataTickets(eventDetailId)
    }
    componentDidMount() {
        this.dataEvent(this.props.eventDetail);
    }

    }
    const mapStateToProps = (state) => {
        console.log(state, "ini mapStateToProps");
        return {...state};
    }
    export default connect(mapStateToProps)(EventSchedule);
