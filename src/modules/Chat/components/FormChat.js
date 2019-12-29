import React, { Component } from 'react';
import { database } from '../firebase';
import './chat.css'

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
            Object.keys(messagesObj).forEach(key =>  messages.push(messagesObj[key]));
            messages = messages.map((message) => { return {message: message.message, user: message.incoming, id: message.key}})
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

            <div className="chat-message">
                <div className="padding-70 messages-div">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="container-fluid h-100">
                        <div className="row justify-content-center h-100">

                            <div className="col-md-8 col-xl-6 chat">
                                <div className="carde">
                                    <div className="card-header msg_head">
                                        <div className="d-flex bd-highlight">
                                            {/*<div className="img_cont">*/}
                                            {/*        <span className="online_icon"></span>*/}
                                            {/*</div>*/}
                                            <div className="user_info">
                                                <span>Forum Chat</span>
                                                <p></p>
                                            </div>
                                            <div className="video_cam">
                                                {/*<span><i className="fas fa-video"></i></span>*/}
                                                {/*<span><i className="fas fa-phone"></i></span>*/}
                                            </div>
                                        </div>
                                        <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                                        <div className="action_menu">
                                            <ul>
                                                <li><i className="fas fa-user-circle"></i> View profile</li>
                                                <li><i className="fas fa-users"></i> Add to close friends</li>
                                                <li><i className="fas fa-plus"></i> Add to group</li>
                                                <li><i className="fas fa-ban"></i> Block</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body msg_card_body">
                                        {this.state.messages.map((message) => {
                                            const _class = message.user === this.state.username ? 'message-left container' : 'message-right container';
                                            return (
                                                <div className="d-flex justify-content-end mb-4">
                                                    <div className="msg_cotainer_send">
                                                        {message.message}
                                                        <span className="msg_time_send">8:55 AM, Today</span>
                                                    </div>
                                                    <div className="img_cont_msg">
                                                        {message.incoming}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="card-footer">
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <span className="input-group-text attach_btn"><i
                                                    className="fas fa-paperclip"></i></span>
                                            </div>
                                            <input name="" className="form-control" placeholder="Type your message..." ref={node => this.input = node}></input>
                                            <div className="input-group-append" onClick={this.onAddMessage}>
                                                <span className="input-group-text send_btn"><i
                                                    className="fas fa-location-arrow"></i></span>
                                            </div>
                                        </div>
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