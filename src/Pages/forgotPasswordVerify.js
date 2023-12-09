import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPasswordVerify = () => {
    const [formData, setFormData] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        toast(formData.newPassword);
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
                                    <h2 class="text-center">Set New Password.</h2>
                                    <p>You can reset your password here.</p>
                                    <div class="panel-body">

                                        <form id="register-form" onSubmit={handleSubmit} role="form" autocomplete="off" class="form" method="post">

                                            <div class="form-group">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                                    <div className='password w-100'>
                                                        <input
                                                            required
                                                            class="form-control border rounded-4"
                                                            name="newPassword"
                                                            placeholder="New password"
                                                            type="newPassword"
                                                            value={formData.newPassword}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className='password w-100 mt-3'>
                                                        <input
                                                            required
                                                            class="form-control border rounded-4"
                                                            name="confirmPassword"
                                                            placeholder="Confirm password"
                                                            type="confirmPassword"
                                                            value={formData.confirmPassword}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input name="recover-submit" class="btn btn-lg btn-success btn-block " value="Update Password" type="submit" />
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

export default ForgotPasswordVerify