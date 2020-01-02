import React, {Component} from 'react';
import {listEVent} from "./MainAction";
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import {fetchListDataEvent} from "./MainService";

class Main extends Component {
    render() {

        return (
            <>

			<div class="site-wrap" id="home-section">

				<div class="site-mobile-menu site-navbar-target">
					<div class="site-mobile-menu-header">
						<div class="site-mobile-menu-close mt-3">
							<span class="icon-close2 js-menu-toggle"></span>
						</div>
					</div>
					<div class="site-mobile-menu-body"></div>
				</div>

				<div class="ftco-blocks-cover-1">
					<div class="ftco-cover-1 overlay">
						<div class="container">
							<div class="row align-items-center">
								<div class="col-lg-6">
									<h1>Find Our Event</h1>
									<p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est magni perferendis fugit modi similique, suscipit, deserunt a iure.</p>
									<form action="#">
										<div class="form-group d-flex">
											<input type="text" class="form-control" placeholder="Enter Location"/>
												<input type="submit" class="btn btn-primary text-white px-4" value="Track Now"/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div className="site-section bg-light block-13" id="testimonials-section" data-aos="fade">
					<div className="container">

						<div className="text-center mb-5">
							<div className="block-heading-1">
								<h2>List Event </h2>
							</div>
						</div>

						<div className="owl-carousel nonloop-block-13">


							{this.props.listEvent.map(data =>{
								return <div>
									<div className="block-testimony-1 text-center">

										<blockquote className="mb-4">
											{data.descriptionEvent}
										</blockquote>

										<figure>
											<div className="icon mb-0">
												<span className="flaticon-lorry"></span>
											</div>
										</figure>
										<h3 className="font-size-16 text-black">{data.eventName}</h3>
									</div>
								</div>
							})}

						</div>
					</div>
				</div>

				<div class="site-section bg-light" id="services-section">
					<div class="container">
						<div class="row mb-5 justify-content-center">
							<div class="col-md-7 text-center">
								<div class="block-heading-1">
									<h2>What We Offer</h2>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</div>
						<div class="owl-carousel owl-all">
							<div class="block__35630">
								<div class="icon mb-0">
									<span class="flaticon-ferry"></span>
								</div>
								<h3 class="mb-3">Sea Freight</h3>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
							</div>

							<div class="block__35630">
								<div class="icon mb-0">
									<span class="flaticon-airplane"></span>
								</div>
								<h3 class="mb-3">Air Freight</h3>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
							</div>

							<div class="block__35630">
								<div class="icon mb-0">
									<span class="flaticon-box"></span>
								</div>
								<h3 class="mb-3">Package Forwarding</h3>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
							</div>

							<div class="block__35630">
								<div class="icon mb-0">
									<span class="flaticon-lorry"></span>
								</div>
								<h3 class="mb-3">Trucking</h3>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
							</div>

							<div class="block__35630">
								<div class="icon mb-0">
									<span class="flaticon-warehouse"></span>
								</div>
								<h3 class="mb-3">Warehouse</h3>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
							</div>

							<div class="block__35630">
								<div class="icon mb-0">
									<span class="flaticon-add"></span>
								</div>
								<h3 class="mb-3">Delivery</h3>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
							</div>

						</div>
					</div>
				</div>

				<div class="site-section" id="about-section">

					<div class="container">
						<div class="row mb-5 justify-content-center">
							<div class="col-md-7 text-center">
								<div class="block-heading-1" data-aos="fade-up" data-aos-delay="">
									<h2>About Us</h2>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div class="site-section bg-light" id="about-section">
					<div class="container">
						<div class="row justify-content-center mb-4 block-img-video-1-wrap">
							<div class="col-md-12 mb-5">
								<figure class="block-img-video-1" data-aos="fade">
									<a href="https://vimeo.com/45830194" data-fancybox data-ratio="2">
										<span class="icon"><span class="icon-play"></span></span>
										<img src="images/cargo_delivery_big.jpg" alt="Image" class="img-fluid"/>
									</a>
								</figure>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<div class="row">
									<div class="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="">
										<div class="block-counter-1">
											<span class="number"><span data-number="50">0</span>+</span>
											<span class="caption">Years of Experience</span>
										</div>
									</div>
									<div class="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="100">
										<div class="block-counter-1">
											<span class="number"><span data-number="300">0</span>+</span>
											<span class="caption">Companies</span>
										</div>
									</div>
									<div class="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="200">
										<div class="block-counter-1">
											<span class="number"><span data-number="108">0</span>+</span>
											<span class="caption">Covered Countries</span>
										</div>
									</div>
									<div class="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="300">
										<div class="block-counter-1">
											<span class="number"><span data-number="1500">0</span>+</span>
											<span class="caption">Couriers</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="site-section" id="team-section">
					<div className="container">
						<div className="row mb-5 justify-content-center">
							<div className="col-md-7 text-center">
								<div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
									<h2>Our Staff</h2>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</div>

						<div className="owl-carousel owl-all">
							<div className="block-team-member-1 text-center rounded h-100">
								<figure>
									<img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle"/>
								</figure>
								<h3 className="font-size-20 text-black">Max Carlson</h3>
								<span
									className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Co-Founder</span>
								<p className="mb-4">Far far away, behind the word mountains, far from the countries
									Vokalia and Consonantia, there live the blind texts.</p>
								<div className="block-social-1">
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-facebook"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-twitter"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-instagram"></span></a>
								</div>
							</div>

							<div className="block-team-member-1 text-center rounded h-100">
								<figure>
									<img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle"/>
								</figure>
								<h3 className="font-size-20 text-black">Charlotte Pilat</h3>
								<span
									className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Co-Founder</span>
								<p className="mb-4">Far far away, behind the word mountains, far from the countries
									Vokalia and Consonantia, there live the blind texts.</p>
								<div className="block-social-1">
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-facebook"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-twitter"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-instagram"></span></a>
								</div>
							</div>

							<div className="block-team-member-1 text-center rounded h-100">
								<figure>
									<img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle"/>
								</figure>
								<h3 className="font-size-20 text-black">Nicole Lewis</h3>
								<span
									className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Co-Founder</span>
								<p className="mb-4">Far far away, behind the word mountains, far from the countries
									Vokalia and Consonantia, there live the blind texts.</p>
								<div className="block-social-1">
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-facebook"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-twitter"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-instagram"></span></a>
								</div>
							</div>

							<div className="block-team-member-1 text-center rounded h-100">
								<figure>
									<img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle"/>
								</figure>
								<h3 className="font-size-20 text-black">Jean Smith</h3>
								<span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Financial Manager</span>
								<p className="mb-4">Far far away, behind the word mountains, far from the countries
									Vokalia and Consonantia, there live the blind texts.</p>
								<div className="block-social-1">
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-facebook"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-twitter"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-instagram"></span></a>
								</div>
							</div>

							<div className="block-team-member-1 text-center rounded h-100">
								<figure>
									<img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle"/>
								</figure>
								<h3 className="font-size-20 text-black">Bob Carry</h3>
								<span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Loader Manager</span>
								<p className="mb-4">Far far away, behind the word mountains, far from the countries
									Vokalia and Consonantia, there live the blind texts.</p>
								<div className="block-social-1">
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-facebook"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-twitter"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-instagram"></span></a>
								</div>
							</div>

							<div className="block-team-member-1 text-center rounded h-100">
								<figure>
									<img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle"/>
								</figure>
								<h3 className="font-size-20 text-black">Anne Fisher</h3>
								<span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Package Manager</span>
								<p className="mb-4">Far far away, behind the word mountains, far from the countries
									Vokalia and Consonantia, there live the blind texts.</p>
								<div className="block-social-1">
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-facebook"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-twitter"></span></a>
									<a href="#" className="btn border-w-2 rounded primary-primary-outline--hover"><span
										className="icon-instagram"></span></a>
								</div>
							</div>
						</div>


					</div>
				</div>


				<div className="site-section" id="faq-section">
					<div className="container">
						<div className="row mb-5">
							<div className="block-heading-1 col-12 text-center">
								<h2>Frequently Ask Questions</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">

								<div className="mb-5" data-aos="fade-up" data-aos-delay="100">
									<h3 className="text-black h4 mb-4"><span
										className="icon-question_answer text-primary mr-2"></span>Can I accept both
										Paypal and Stripe?</h3>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts. </p>
								</div>

								<div className="mb-5" data-aos="fade-up" data-aos-delay="100">
									<h3 className="text-black h4 mb-4"><span
										className="icon-question_answer text-primary mr-2"></span>What available is
										refund period?</h3>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts. </p>
								</div>

								<div className="mb-5" data-aos="fade-up" data-aos-delay="100">
									<h3 className="text-black h4 mb-4"><span
										className="icon-question_answer text-primary mr-2"></span>Can I accept both
										Paypal and Stripe?</h3>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts. </p>
								</div>

								<div className="mb-5" data-aos="fade-up" data-aos-delay="100">
									<h3 className="text-black h4 mb-4"><span
										className="icon-question_answer text-primary mr-2"></span>What available is
										refund period?</h3>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts. </p>
								</div>
							</div>
							<div className="col-lg-6">

								<div className="mb-5" data-aos="fade-up" data-aos-delay="100">
									<h3 className="text-black h4 mb-4"><span
										className="icon-question_answer text-primary mr-2"></span>Where are you from?
									</h3>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts. </p>
								</div>

								<div className="mb-5" data-aos="fade-up" data-aos-delay="100">
									<h3 className="text-black h4 mb-4"><span
										className="icon-question_answer text-primary mr-2"></span>What is your opening
										time?</h3>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts. </p>
								</div>

								<div className="mb-5" data-aos="fade-up" data-aos-delay="100">
									<h3 className="text-black h4 mb-4"><span
										className="icon-question_answer text-primary mr-2"></span>Can I accept both
										Paypal and Stripe?</h3>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts. </p>
								</div>

								<div className="mb-5" data-aos="fade-up" data-aos-delay="100">
									<h3 className="text-black h4 mb-4"><span
										className="icon-question_answer text-primary mr-2"></span>What available is
										refund period?</h3>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and
										Consonantia, there live the blind texts. </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            </>
        );
    }
    listDataEvent=async ()=>{
		const dataListEvent = await fetchListDataEvent();
		console.log(dataListEvent.descriptionEvent+"iniiiiiiiiiiiiiiiiiiiiiiiiiii")
		let action={...listEVent, listEvent:dataListEvent}
		this.props.dispatch(action)
	}
   componentDidMount() {
    	this.listDataEvent()
   }
}

const mapsStateToProps=(state)=>{
	console.log(state)
	return {...state}
}

export default connect (mapsStateToProps)(Main);
