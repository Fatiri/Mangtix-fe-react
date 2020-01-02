import React, {Component} from 'react';
import Cart from "../../cart/component/Cart";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            show: true,
            max: 5,
            min: 0
        };
    }

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.quantity < 9) {
                return {
                    quantity: prevState.quantity + 1
                }
            } else {
                return null;
            }
        });
    }
    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.quantity > 0) {
                return {
                    quantity: prevState.quantity - 1
                }
            } else {
                return null;
            }
        });
    }
    ToggleClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    handleChange = (event) => {
        this.setState({quantity: event.target.value});
    }

    render() {

        return (
            <div>

            </div>
         );
    }
}

export default BookingForm;
