import React, {Component} from 'react';

class PaymentForm extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="checkout" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <form>
                                <div className="col-lg-12">
                                    <div className="text-center">
                                        <h5 className="modal-title" id="exampleModalLabel">Payment
                                            <br/>
                                            <img src="img/home/section-style.png" alt=""></img></h5>
                                    </div>

                                    <div className="cart_total_container">
                                        <ul>
                                            <div className="cart_total">
                                                <div className="section_title">Cart total</div>
                                                <li className="d-flex flex-row align-items-center justify-content-start">
                                                    <div className="cart_total_title">Total</div>
                                                    <div className="cart_total_value ml-auto"
                                                         style={{fontWeight: "bold", fontSize: 20}}>Rp. 790.000
                                                    </div>
                                                </li>
                                            </div>
                                        </ul>

                                        <div className="section_title">Payment Method</div>
                                        <div className="section_subtitle">Select the one you want</div>
                                        <br/>
                                        <div className="card">
                                            <div className="card-body p-5">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" data-toggle="pill"
                                                           href="#nav-tab-bank-bni">
                                                            <img src="img/clients-logo/BNI.png" alt=""
                                                                 className="btn-dark"></img>
                                                        </a></li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="pill"
                                                           href="#nav-tab-bank-bri">
                                                            <img src="img/clients-logo/BRI.png" alt=""
                                                                 className="btn-dark"></img>
                                                        </a></li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" data-toggle="pill"
                                                           href="#nav-tab-bank-mandiri">
                                                            <img src="img/clients-logo/mandiri.png" alt=""
                                                                 className="btn-dark"></img>
                                                        </a></li>
                                                </ul>

                                                <div className="tab-content" style={{marginTop:50}}>
                                                    <div className="tab-pane fade show active" id="nav-tab-bank-bni">
                                                        <form role="form">
                                                            <div className="form-group">
                                                                <label htmlFor="username">Full name (on the
                                                                    card)</label>
                                                                <input type="text" className="form-control"
                                                                       name="username"
                                                                       placeholder="" required=""></input>
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="cardNumber">Card number</label>
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                           name="cardNumber" placeholder=""></input>
                                                                    <div className="input-group-append">
				                                    <span className="input-group-text text-muted">
				                                	<i className="fa fa-credit-card"></i>
			                                    	</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm-8">
                                                                    <div className="form-group">
                                                                        <label><span
                                                                            className="hidden-xs">Expiration</span>
                                                                        </label>
                                                                        <div className="input-group">
                                                                            <input type="number"
                                                                                   className="form-control"
                                                                                   placeholder="MM" name=""></input>
                                                                            <input type="number"
                                                                                   className="form-control"
                                                                                   placeholder="YY" name=""></input>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="form-group">
                                                                        <label data-toggle="tooltip" title=""
                                                                               data-original-title="3 digits code on back side of the card">CVV <i
                                                                            className="fa fa-question-circle"></i></label>
                                                                        <input type="number" className="form-control"
                                                                               required=""></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className="subscribe btn btn-primary btn-block"
                                                                    type="button"> Confirm
                                                            </button>
                                                        </form>
                                                    </div>

                                                    <div className="tab-pane fade" id="nav-tab-bank-bri">
                                                        <form role="form">
                                                            <div className="form-group">
                                                                <label htmlFor="username">Full name (on the
                                                                    card)</label>
                                                                <input type="text" className="form-control"
                                                                       name="username"
                                                                       placeholder="" required=""></input>
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="cardNumber">Card number</label>
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                           name="cardNumber" placeholder=""></input>
                                                                    <div className="input-group-append">
				                                    <span className="input-group-text text-muted">
				                                	<i className="fa fa-credit-card"></i>
			                                    	</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm-8">
                                                                    <div className="form-group">
                                                                        <label><span
                                                                            className="hidden-xs">Expiration</span>
                                                                        </label>
                                                                        <div className="input-group">
                                                                            <input type="number"
                                                                                   className="form-control"
                                                                                   placeholder="MM" name=""></input>
                                                                            <input type="number"
                                                                                   className="form-control"
                                                                                   placeholder="YY" name=""></input>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="form-group">
                                                                        <label data-toggle="tooltip" title=""
                                                                               data-original-title="3 digits code on back side of the card">CVV <i
                                                                            className="fa fa-question-circle"></i></label>
                                                                        <input type="number" className="form-control"
                                                                               required=""></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className="subscribe btn btn-primary btn-block"
                                                                    type="button"> Confirm
                                                            </button>
                                                        </form>
                                                    </div>

                                                    <div className="tab-pane fade" id="nav-tab-bank-mandiri">
                                                        <form role="form">
                                                            <div className="form-group">
                                                                <label htmlFor="username">Full name (on the
                                                                    card)</label>
                                                                <input type="text" className="form-control"
                                                                       name="username"
                                                                       placeholder="" required=""></input>
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="cardNumber">Card number</label>
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control"
                                                                           name="cardNumber" placeholder=""></input>
                                                                    <div className="input-group-append">
				                                    <span className="input-group-text text-muted">
				                                	<i className="fa fa-credit-card"></i>
			                                    	</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-sm-8">
                                                                    <div className="form-group">
                                                                        <label><span
                                                                            className="hidden-xs">Expiration</span>
                                                                        </label>
                                                                        <div className="input-group">
                                                                            <input type="number"
                                                                                   className="form-control"
                                                                                   placeholder="MM" name=""></input>
                                                                            <input type="number"
                                                                                   className="form-control"
                                                                                   placeholder="YY" name=""></input>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="form-group">
                                                                        <label data-toggle="tooltip" title=""
                                                                               data-original-title="3 digits code on back side of the card">CVV <i
                                                                            className="fa fa-question-circle"></i></label>
                                                                        <input type="number" className="form-control"
                                                                               required=""></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className="subscribe btn btn-primary btn-block"
                                                                    type="button"> Confirm
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="modal-footer">
                                            <div className="button checkout_button"><a href="#">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentForm;