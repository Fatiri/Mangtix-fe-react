import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Events extends Component {
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

                        <div class="row">
                            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div class="card-speaker">
                                    <img class="card-img rounded-0" src="img/home/speaker-2.png" alt=""></img>
                                    <div class="speaker-footer">
                                        <h4>Festival Imagination</h4>
                                        <p></p>
                                    </div>
                                    <div class="speaker-overlay">
                                        <ul class="speaker-social">
                                            <li><Link class="button button-header" to="/event-schedule">View Detail</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div class="card-speaker">
                                    <img class="card-img rounded-0" src="img/home/speaker-3.png" alt=""></img>
                                    <div class="speaker-footer">
                                        <h4>Jogjanan</h4>
                                        <p></p>
                                    </div>
                                    <div class="speaker-overlay">
                                        <ul class="speaker-social">
                                            <li><Link class="button button-header" to="/event-schedule">View Detail</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div class="card-speaker">
                                    <img class="card-img rounded-0" src="img/home/speaker-1.png" alt=""></img>
                                    <div class="speaker-footer">
                                        <h4>Techno Fest</h4>
                                        <p></p>
                                    </div>
                                    <div class="speaker-overlay">
                                        <ul class="speaker-social">
                                            <li><Link class="button button-header" to="/event-schedule">View Detail</Link></li>
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
}

export default Events;
