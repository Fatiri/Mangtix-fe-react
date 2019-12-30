import React, {Component} from 'react';
import {database} from '../firebase';
import './chat.css'
import decodeJwtToken from "../../../authentication/AutheticationDecodeJwt";

export default class FormChat extends Component {
    constructor() {
        super();

        this.state = {
            messages: [],
            username: ''
        };

        this.onAddMessage = this.onAddMessage.bind(this);
    }

    componentWillMount() {
        const username = localStorage.getItem('chat_username');
        this.setState({username: username ? username : 'Unknown'})
        const messagesRef = database.ref('messages')
            .orderByKey()
            .limitToLast(100);

        messagesRef.on('value', snapshot => {
            let messagesObj = snapshot.val();
            let messages = [];
            Object.keys(messagesObj).forEach(key => messages.push(messagesObj[key]));
            messages = messages.map((message) => {
                return {message: message.message, user: message.user, id: message.key}
            })
            this.setState(prevState => ({
                messages: messages,
            }));
        });
    }

    onAddMessage(event) {
        event.preventDefault();
        database.ref('messages').push({message: this.input.value, user: this.state.username});
        this.input.value = '';
    }

    render() {
        return (

                <div className="container">
                    <div className="col-md-12 col-lg-6">
                        <div className="panel">

                            <div className="panel-heading">
                                <div className="panel-control">
                                    <div className="btn-group">
                                        <button className="btn btn-default" type="button" data-toggle="collapse"
                                                data-target="#demo-chat-body"><i className="fa fa-chevron-down"></i>
                                        </button>
                                        <button type="button" className="btn btn-default" data-toggle="dropdown"><i
                                            className="fa fa-gear"></i></button>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li><a href="#">Available</a></li>
                                            <li><a href="#">Busy</a></li>
                                            <li><a href="#">Away</a></li>
                                            <li className="divider"></li>
                                            <li><a id="demo-connect-chat" href="#" className="disabled-link"
                                                   data-target="#demo-chat-body">Connect</a></li>
                                            <li><a id="demo-disconnect-chat" href="#"
                                                   data-target="#demo-chat-body">Disconect</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 className="panel-title">Chat</h3>
                            </div>


                            <div id="demo-chat-body" className="collapse in">
                                <div className="nano has-scrollbar">
                                    <div className="nano-content pad-all" tabIndex="0" >
                                        <ul className="list-unstyled media-block">
                                            <li className="mar-btm">
                                                <div className="media-left">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                         className="img-circle img-sm" alt="Profile Picture"/>
                                                </div>
                                                <div className="media-body pad-hor">
                                                    <div className="speech">
                                                        <a href="#" className="media-heading">John Doe</a>
                                                        <p>Hello Lucy, how can I help you today ?</p>
                                                        <p className="speech-time">
                                                            <i className="fa fa-clock-o fa-fw"></i>09:23AM
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mar-btm">
                                                <div className="media-right">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                         className="img-circle img-sm" alt="Profile Picture"/>
                                                </div>
                                                <div className="media-body pad-hor speech-right">
                                                    <div className="speech">
                                                        <a href="#" className="media-heading">Lucy Doe</a>
                                                        <p>Hi, I want to buy a new shoes.</p>
                                                        <p className="speech-time">
                                                            <i className="fa fa-clock-o fa-fw"></i> 09:23AM
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mar-btm">
                                                <div className="media-left">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                         className="img-circle img-sm" alt="Profile Picture"/>
                                                </div>
                                                <div className="media-body pad-hor">
                                                    <div className="speech">
                                                        <a href="#" className="media-heading">John Doe</a>
                                                        <p>Shipment is free. You\'ll get your shoes tomorrow!</p>
                                                        <p className="speech-time">
                                                            <i className="fa fa-clock-o fa-fw"></i> 09:25
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mar-btm">
                                                <div className="media-right">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                         className="img-circle img-sm" alt="Profile Picture"/>
                                                </div>
                                                <div className="media-body pad-hor speech-right">
                                                    <div className="speech">
                                                        <a href="#" className="media-heading">Lucy Doe</a>
                                                        <p>Wow, that\'s great!</p>
                                                        <p className="speech-time">
                                                            <i className="fa fa-clock-o fa-fw"></i> 09:27
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mar-btm">
                                                <div className="media-right">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                         className="img-circle img-sm" alt="Profile Picture"/>
                                                </div>
                                                <div className="media-body pad-hor speech-right">
                                                    <div className="speech">
                                                        <a href="#" className="media-heading">Lucy Doe</a>
                                                        <p>Ok. Thanks for the answer. Appreciated.</p>
                                                        <p className="speech-time">
                                                            <i className="fa fa-clock-o fa-fw"></i> 09:28
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mar-btm">
                                                <div className="media-left">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                         className="img-circle img-sm" alt="Profile Picture"/>
                                                </div>
                                                <div className="media-body pad-hor">
                                                    <div className="speech">
                                                        <a href="#" className="media-heading">John Doe</a>
                                                        <p>You are welcome! <br/> Is there anything else I can do for you
                                                            today?</p>
                                                        <p className="speech-time">
                                                            <i className="fa fa-clock-o fa-fw"></i> 09:30
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mar-btm">
                                                <div className="media-right">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                         className="img-circle img-sm" alt="Profile Picture"/>
                                                </div>
                                                <div className="media-body pad-hor speech-right">
                                                    <div className="speech">
                                                        <a href="#" className="media-heading">Lucy Doe</a>
                                                        <p>Nope, That\'s it.</p>
                                                        <p className="speech-time">
                                                            <i className="fa fa-clock-o fa-fw"></i> 09:31
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mar-btm">
                                                <div className="media-left">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                         className="img-circle img-sm" alt="Profile Picture"/>
                                                </div>
                                                <div className="media-body pad-hor">
                                                    <div className="speech">
                                                        <a href="#" className="media-heading">John Doe</a>
                                                        <p>Thank you for contacting us today</p>
                                                        <p className="speech-time">
                                                            <i className="fa fa-clock-o fa-fw"></i> 09:32
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="nano-pane">
                                        <div className="nano-slider"
                                            ></div>
                                    </div>
                                </div>


                                <div className="panel-footer">
                                    <div className="row">
                                        <div className="col-xs-9">
                                            <input type="text" placeholder="Enter your text"
                                                   className="form-control chat-input"/>
                                        </div>
                                        <div className="col-xs-3">
                                            <button className="btn btn-primary btn-block" type="submit">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}