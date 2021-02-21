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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
