import React from 'react';


export const UserProfile = () => {

	let publicUrl = process.env.PUBLIC_URL + '/'

	return (
		<div className="user-profile-area pd-top-120">
			<div className="container">
				<div className="row">
					<div className="col-xl-10 col-lg-12">
						<div className="row">
							<div className="col-lg-4">
								<ul className="nav nav-tabs tp-tabs style-two">
									<li className="nav-item">
										<a className="nav-link active" data-toggle="tab" href="#tabs_1"><i className="fa fa-user" />Profile</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tabs_3"><i className="fa fa-cog" />Settings</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tabs_4"><i className="fa fa-recycle" />Recently Bought</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tabs_6"><i className="fa fa-star-o" />Reviews</a>
									</li>
									<li className="text-center">
										<a className="btn btn-yellow" href="#"><i className="fa fa-sign-in" aria-hidden="true" /> <span>Log Out</span></a>
									</li>
								</ul>
							</div>
							<div className="col-xl-7 col-lg-8 offset-xl-1">
								<div className="tab-content user-tab-content">
									<div className="tab-pane fade show active" id="tabs_1">
										<div className="user-details">
											<h3 className="user-details-title">Profile</h3>
											<div className="tp-img-upload">
											</div>
											<form className="tp-form-wrap">
												<div className="row">
													<div className="col-md-6">
														<label className="single-input-wrap style-two">
															<span className="single-input-title">Your First Name</span>
															<input type="text" name="first-name" />
														</label>
													</div>
													<div className="col-md-6">
														<label className="single-input-wrap style-two">
															<span className="single-input-title">Your Last Name</span>
															<input type="text" name="last-name" />
														</label>
													</div>
													<div className="col-lg-12">
														<label className="single-input-wrap style-two">
															<span className="single-input-title">Your Tell us about yourself.</span>
															<textarea defaultValue={""} name="message" />
														</label>
													</div>
													<div className="col-md-7">
														<label className="single-input-wrap style-two">
															<span className="single-input-title">Your Country</span>
															<input type="text" name="country" />
														</label>
													</div>
													<div className="col-md-6">
														<label className="single-input-wrap style-two">
															<span className="single-input-title">Your Email Address</span>
															<input type="text" name="email" />
														</label>
													</div>
													<div className="col-md-6">
														<label className="single-input-wrap style-two">
															<span className="single-input-title">Your Phone</span>
															<input type="text" name="phone" />
														</label>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div className="tab-pane fade" id="tabs_3">
										<div className="user-settings">
											<h3 className="user-details-title">Settings</h3>
											<div className="row">
												<div className="tp-img-upload">
												</div>
												<form className="tp-form-wrap">
													<div className="row">
														<div className="col-md-6">
															<label className="single-input-wrap style-two">
																<span className="single-input-title">Change First Name</span>
																<input type="text" name="first-name" />
															</label>
														</div>
														<div className="col-md-6">
															<label className="single-input-wrap style-two">
																<span className="single-input-title">Change Last Name</span>
																<input type="text" name="last-name" />
															</label>
														</div>
														<div className="col-lg-12">
															<label className="single-input-wrap style-two">
																<span className="single-input-title">Change Tell us about yourself.</span>
																<textarea defaultValue={""} name="message" />
															</label>
														</div>
														<div className="col-md-7">
															<label className="single-input-wrap style-two">
																<span className="single-input-title">Change Country</span>
																<input type="text" name="country" />
															</label>
														</div>
														<div className="col-md-6">
															<label className="single-input-wrap style-two">
																<span className="single-input-title">Change Email Address</span>
																<input type="text" name="email" />
															</label>
														</div>
														<div className="col-md-6">
															<label className="single-input-wrap style-two">
																<span className="single-input-title">Change Phone</span>
																<input type="text" name="phone" />
															</label>
														</div>
														<div className="col-12">
															<button className="btn btn-yellow mt-3 text-center" type="submit">Editar</button>
														</div>
													</div>
												</form>
												<br></br>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tabs_4">
										<div className="user-recent-view">
											<h3 className="user-details-title">Recently Bought</h3>
											<div className="row">
												<div className="col-sm-6">
													<div className="single-destinations-list style-two">
														<div className="thumb">
															<img src={publicUrl + "assets/img/destination-list/4.png"} alt="list" />
														</div>
														<div className="details">
															<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Maldives</p>
															<h4 className="title"><a href="#">Hurawalhi Island</a></h4>
															<p className="content">7Days Tour on 2 person</p>
															<div className="tp-price-meta">
																<h2>620 <small>$</small></h2>
															</div>
														</div>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="single-destinations-list style-two">
														<div className="thumb">
															<img src={publicUrl + "assets/img/destination-list/5.png"} alt="list" />
														</div>
														<div className="details">
															<p className="location"><img src={publicUrl + "assets/img/icons/1.png"} alt="map" />Indonesia</p>
															<h4 className="title"><a href="#">Bali Province</a></h4>
															<p className="content">4days 2 person</p>
															<div className="tp-price-meta">
																<h2>780 <small>$</small></h2>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tabs_6">
										<div className="user-tour-details">
											<h3 className="user-details-title">Reviews</h3>
											<span className="user-tour-details-title">Reviews About You</span>
											<span>| Reviews By You</span>
											<div className="comments-area tour-details-review-area">
												<ul className="comment-list mb-0">
													<li>
														<div className="single-comment-wrap">
															<div className="content">
																<h4 className="title">Tyler Bailey</h4>
																<span className="date">13 August 2019</span>
																<div className="tp-review-meta">
																	<i className="ic-yellow fa fa-star" />
																	<i className="ic-yellow fa fa-star" />
																	<i className="ic-yellow fa fa-star" />
																	<i className="ic-yellow fa fa-star" />
																	<i className="ic-yellow fa fa-star" />
																</div>
																<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
