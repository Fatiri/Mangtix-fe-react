import React, {Component} from 'react';
import {database} from '../firebase';
import '../styles/chat.css';
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
            <div className="container col-md-12">
                <div className="App-forum">
                    <div className="page-image">
                        <div className="wrt">For a faster response, <br/>send your question or request through this forum.</div>
                    </div>
                    <div className="chat-page">
                        <div className="comments-main pt-4 rounded">
                            <ul className="p-0">
                                <h2 className="title">Chatting</h2>
                                <li>
                                    <h3 className="ex1">
                                        {this.state.messages.map((message) => {
                                            const _class = message.user === this.state.username
                                            return (
                                                <div className="row comments bd">
                                                    <div className="user-img">
                                                        <img src="http://brainstormcursos.com.br/wp-content/uploads/2016/01/default-avatar.jpg"
                                                             className="rounded-circle" alt="Profile Picture"/>
                                                    </div>
                                                    <div className="box chat">
                                                        <h5 className="m-0">{message.user}</h5>
                                                        <h6 className="msg">{message.message}</h6>
                                                    </div>
                                                </div>
                                            )})}
                                    </h3>
                                </li>

                                <div class="row comment-box-main p-3 rounded-bottom">
                                    <div class="col-md-9 col-sm-9 col-9 pr-0 comment-box">
                                        <input type="text" class="form-control" placeholder="comment ...."ref={node => this.input = node}/>
                                    </div>
                                    <div class="col-md-3 col-sm-2 col-2 pl-0 text-center send-btn">
                                        <button onClick={this.onAddMessage} class="btn btn-info">Send</button>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

