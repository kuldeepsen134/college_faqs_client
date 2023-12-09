import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [formData, setFormData] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        toast(formData.email);
    };



    return (
        <>
            <div class="form-gap"></div>
            <div class="email " style={{ height: "100vh" }}>
                <div class="row justify-content-center">
                    <div class="col-md-4 col-md-offset-4" style={{ marginTop: "200px" }}>
                        <div class="panel panel-default mt-4" >
                            <div class="panel-body mt-4">
                                <div class="text-center">
                                    <h3><i class="fa fa-lock fa-4x"></i></h3>
                                    <h2 class="text-center">Forgot Password?</h2>
                                    <p>You can reset your password here.</p>
                                    <div class="panel-body">

                                        <form id="register-form" onSubmit={handleSubmit} role="form" autocomplete="off" class="form" method="post">

                                            <div class="form-group">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                                    <input
                                                        required
                                                        class="form-control border rounded-4"
                                                        name="email"
                                                        placeholder="Email address"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input name="recover-submit" class="btn btn-lg btn-primary btn-block " value="Reset Password" type="submit" />
                                            </div>

                                            <input type="hidden" class="hide" name="token" id="token" value="" />
                                        </form>
                                        <ToastContainer />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ForgotPassword