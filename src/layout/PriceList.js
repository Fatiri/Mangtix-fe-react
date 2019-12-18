import React, {Component} from 'react';

class PriceList extends Component {
    render() {
        return (
            < div >
            <section className="section-padding bg-gray">
            <div className="container">
            <div className="section-intro text-center pb-98px">
            <p className="section-intro__title">Join the event</p>
        <h2 className="primary-text">Choose Your Ticket</h2>
        <img src="img/home/section-style.png" alt=""></img>
            </div>

            <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="text-center card-priceTable">
            <div className="priceTable-header">
            <h3>Normal</h3>
            <p>Attend only first day</p>
        <h1 className="priceTable-price"><span>$</span> 45.00</h1>
        </div>
        <ul className="priceTable-list">
            <li>
            <span className="position"><i className="ti-check"></i></span> Unlimited Entrance
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Comfortable Seat
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Paid Certificate
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> Day One Workshop
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> One Certificate
        </li>
        </ul>
        <div className="priceTable-footer">
            <a className="button" href="#">Buy Now</a>
        </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="text-center card-priceTable">
            <div className="priceTable-header">
            <h3>Advance</h3>
            <p>Attend only first day</p>
        <h1 className="priceTable-price"><span>$</span> 50.00</h1>
        </div>
        <ul className="priceTable-list">
            <li>
            <span className="position"><i className="ti-check"></i></span> Unlimited Entrance
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Comfortable Seat
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Paid Certificate
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> Day One Workshop
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> One Certificate
        </li>
        </ul>
        <div className="priceTable-footer">
            <a className="button" href="#">Buy Now</a>
        </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="text-center card-priceTable">
            <div className="priceTable-header">
            <h3>Ultimate</h3>
            <p>Attend only first day</p>
        <h1 className="priceTable-price"><span>$</span> 60.00</h1>
        </div>
        <ul className="priceTable-list">
            <li>
            <span className="position"><i className="ti-check"></i></span> Unlimited Entrance
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Comfortable Seat
        </li>
        <li>
        <span className="position"><i className="ti-check"></i></span> Paid Certificate
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> Day One Workshop
        </li>
        <li>
        <span className="negative"><i className="ti-close"></i></span> One Certificate
        </li>
        </ul>
        <div className="priceTable-footer">
            <a className="button" href="#">Buy Now</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
            < /div>
    )
        ;
    }
}

export default PriceList;