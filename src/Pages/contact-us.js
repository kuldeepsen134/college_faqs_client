import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import axios from "../api/axios";
import { STATIC_URL } from "../config/config";



const ContactUs = () => {
	const [success, setSuccess] = useState(false)
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			mobile: '',
			address: '',
			message: '',
		},
		onSubmit: async (values, { resetForm }) => {
			const response = await axios.post(`${STATIC_URL}/api/contact-us`, values)
			if (response.status === 200) {
				setSuccess(!success)
			}
			resetForm();
		},
	});

	return (
		<>
			<section className="contact-us">
				<div class="container bg-light">
					<div className="row">
						<div className="card">
							<div className="card-body">

								<h2 className="mb-4">Contact Us</h2>
								<form className="contact-form row" onSubmit={formik.handleSubmit}>
									<div class="form-group col-12 col-sm-12 col-md-6">
										<input
											type="text"
											class="form-control"
											placeholder="First Name"
											name='firstName'
											onChange={formik.handleChange}
											value={formik.values.firstName}
										/>
									</div>
									<div class="form-group col-12 col-sm-12 col-md-6">
										<input
											type="text"
											class="form-control"
											name='lastName'
											placeholder="Last Name"
											onChange={formik.handleChange}
											value={formik.values.lastName}
										/>
									</div>
									<div class="form-group col-12 col-sm-12 col-md-6">
										<input
											type="email"
											class="form-control"
											name='email'
											placeholder="Email"
											onChange={formik.handleChange}
											value={formik.values.email}
										/>
									</div>
									<div class="form-group col-12 col-sm-12 col-md-6">
										<input
											type="tel"
											class="form-control"
											name='mobile'
											placeholder="Mobile"
											onChange={formik.handleChange}
											value={formik.values.mobile}
										/>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control"
											name='address'
											placeholder="Address"
											onChange={formik.handleChange}
											value={formik.values.address}
										/>
									</div>
									<div class="form-group">
										<textarea
											class="form-control"
											rows="3"
											name='message'
											placeholder="Type your message here"
											onChange={formik.handleChange}
											value={formik.values.message}
										/>
									</div>
									<div>
										<button type="submit" class="btn btn-primary">Submit</button>
									</div>
								</form>
								{success && <p class="text-muted mt-3">Thanks for submitting!</p>}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default ContactUs;