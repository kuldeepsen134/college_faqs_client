import { useEffect } from "react";
const ContactUs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	return (
		<>
			{/* <section className="contact-us">
				<div className="container">
					<div className="row">
						<div className="col">
							<h2>Contact Us</h2>
							<div class="card mb-4">
								<div class="card-body text-center">
									<h4>Get our experts to answer your questions within 24 Hrs.</h4>
									<ul className="list-inline my-3">
										<li className="list-inline-item">Answers within 24 Hrs.</li>
										<li className="list-inline-item">Reliable Answers</li>
										<li className="list-inline-item">1000+ Experts</li>
									</ul>
									<div class="form-group">
										<textarea class="form-control" id="contactUs" rows="3"></textarea>
									</div>
									<button className="btn btn-danger" type="submit">Ask Question</button>
								</div>
							</div>


							<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Ahmedabad
											</h5>
											<p>
												106, 1st Floor, Iskon Elegance, Prahaladnagar, S.G.Highway, Ahmedabad – 380015
											</p>
											<a href="tel:+91-7802953247">+91-7802953247</a>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Bengaluru
											</h5>
											<p>
												Infoedge India Ltd., N- 901 & 902, North Block, Manipal Center, Dickenson Road, Bengaluru, 560042
											</p>
											<a href="tel:080 - 49695300">080 - 49695300</a>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Chandigarh
											</h5>
											<p>
												Info Edge India Ltd., 1st floor, SCO 224-225, Sec 40 - D, Chandigarh - 160036
											</p>
											<a href="tel:0172-5039084">0172-5039084</a>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Chennai
											</h5>
											<p>
												Samson Towers, 1st floor, 403 L, pantheon Road, Egmore, Chennai - 600008
											</p>
											<a href="tel:044-42977777">044-42977777</a>&nbsp;/&nbsp;
											<a href="Fax: 044-42068533">Fax: 044-42068533</a>
										</div>
									</div>
								</div>


								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Delhi NCR(Head Office)
											</h5>
											<p>
												C-10, Sector 1, Noida, 201301
											</p>
											<a href="tel:0120 - 6382000">0120 - 6382000</a>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Hyderabad

											</h5>
											<p>
												1211, 11th Floor, Yella Reddy Guda Rd, Ameerpet, Yella Reddy Guda, Hyderabad, Telangana, 500073
											</p>
											<a href="tel:+91-9820810807">+91-9820810807</a>
										</div>
									</div>
								</div>


								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Kolkata
											</h5>
											<p>
												Info Edge (India) Ltd., 224 A J C Bose Road, KRISHNA BUILDING- 8th Floor, Module # 801 & 802 (Near Beckbagan Crossing), Kolkata - 700017
											</p>
											<a href="tel:033-40021775 / 74 / 77 / 50">033-40021775 / 74 / 77 / 50</a>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Jaipur
											</h5>
											<p>
												605, Crystal palm, 22 Godown Circle, C-Scheme, Jaipur (Rajasthan) Pincode-302001
											</p>
											<a href="tel:+91-141-4048908">+91-141-4048908</a>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Mumbai
											</h5>
											<p>
												Info Edge India Ltd., Chintamani Plaza, B wing, 2nd Floor, Near WEH Metro Station, Andheri Kurla Road, Andheri East, Mumbai- 400099
											</p>
											<a href="tel:022 - 42447835">022 - 42447835</a>
										</div>
									</div>
								</div>

								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Pune
											</h5>
											<p>
												Info Edge (India) Ltd., Anand Square, 2nd floor Off No - 201 & 202, New Airport Road, Opp. Symbiosis Intl. School, Viman Nagar, Pune - 411014</p>
											<a href="tel:020 - 67495700">020 - 67495700</a>
										</div>
									</div>
								</div>


								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Bhopal
											</h5>
											<p>
												GF 2, Harrison House, 6, Malviya Nagar, Bhopal - 462003
											</p>
											<a href="tel:+91-755-4202346">+91-755-4202346</a>
										</div>
									</div>
								</div>


								<div className="col">
									<div class="card h-100">
										<div class="card-body">
											<h5>
												Outside India
											</h5>
											<a href="tel:1800 717 1094 (Toll Free)">1800 717 1094 (Toll Free)</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section > */}

			<div class="container bg-light">
				<h2>Get In Touch</h2>
				<form>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="First Name"/>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Last Name"/>
					</div>
					<div class="form-group">
						<input type="email" class="form-control" placeholder="Email"/>
					</div>
					<div class="form-group">
						<input type="tel" class="form-control" placeholder="Phone"/>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Address"/>
					</div>
					<div class="form-group">
						<textarea class="form-control" rows="3" placeholder="Type your message here"></textarea>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
				<p class="text-muted">Thanks for submitting!</p>
			</div>

		</>
	);
};
export default ContactUs;