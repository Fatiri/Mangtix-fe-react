import React from 'react';
import {handledescriptionevent, handleeventname} from "../EventAction";

class EventForm extends React.Component{
    render() {
        return(
            <div>
                <form>
                    <input type="text" value={this.props.eventForm.eventName} onChange={(event)=>{
                        this.props.dispatch({...handleeventname, eventName:event.target.value})
                    }}/>
                    <textarea value={this.props.eventForm.descriptionEvent} onChange={(event)=>{
                        this.props.dispatch({...handledescriptionevent, descriptionEvent:event.target.value})
                    }}/>

                    <input type="text" value={this.props.eventForm.eventDetailList.venue}/>
                </form>
            </div>
        )
    }

}
