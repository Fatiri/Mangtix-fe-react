import React, { Component } from 'react';
import  {database}  from '../firebase';
import {Link} from "react-router-dom";

export default class UserChat extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            username: ''
        };
    }

    componentWillMount() {
        const userRef = database.ref('users')
            .orderByKey()
            .limitToLast(100);

        userRef.once('value', snapshot => {
            const users = [snapshot.val()];
            this.setState({users: users});
        });
    }

    onNameChange(e) {
        this.setState({username: e.target.value})
    }

    onAddClick(e) {
        e.preventDefault();
        database.ref('users').push({username: this.state.username});
        localStorage.setItem('chat_username', this.state.username);

    }

    render() {
        return(
            <div className="form-group col-md-4">
                <label >Username: </label>
                <input className="form-control input-sm" type="text"  onChange={this.onNameChange.bind(this)}/>
                <Link to="chat-form" className="btn btn-info" onClick={()=>this.onAddClick.bind(this)}>Add</Link>
            </div>
        );
    }
}
