import { useState } from "react";
import axios from "../api/axios";
import { authentication } from "../hooks/firebase";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import "../assets/css/signup.css";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import StatusToast from "../Components/StatusToast";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setotp] = useState("");
  const [otpSentMsg, setOtpSentMsg] = useState(false);
  const [final, setfinal] = useState("");
  const [isOTPSent, setisOTPSent] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [otpError, setotpError] = useState(false);
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const register = async () => {
    if (isSubmit) return;
    setSubmit(true);
    if (!email || !name || !password || !confirmPassword) {
      setSubmit(false);
      return;
    }
    if (password !== confirmPassword) {
      setSubmit(false);
      return;
    }
    try {
      const toastId = toast.loading("Registering...");
      const response = await axios.post("/register", {
        name: name,
        email: email,
        mobile_number: number,
        password: password,
      });
      console.log(response.data);
      if (!response.data.success) {
        toast.update(toastId, {
          autoClose: true,
          render: response.data.message,
          type: "error",
          isLoading: false,
          closeButton: true,
        });
        console.log(response.data);
        setSubmit(false);
        return;
      }
      toast.update(toastId, {
        autoClose: true,
        render: response.data.message,
        type: "success",
        isLoading: false,
        closeButton: true,
      });
      setAuth({ token: response.data.token });
      localStorage.setItem("token", response.data.token);
      navigate(from, { replace: true, to: "/profile" });
    } catch (err) {
      console.log(err);
    } finally {
      setSubmit(false);
    }
  };
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
          console.log("captcha:", response);
        },
      },
      authentication
    );
  };

  const signin = () => {
    if (number === "" || number.length !== 10) return;
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, "+91" + number, appVerifier)
      .then((result) => {
        window.result = result;
        setisOTPSent(true);
        setOtpSentMsg(true);
      })
      .catch((error) => {
        console.log("signin error", error);
      });
  };

  const ValidateOtp = (e) => {
    setotpError(false);
    setOtpSentMsg(false);
    e.preventDefault();
    if (otp === null || final === null) return;
    let confirmationResult = window.result;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        register();
        // ...
      })
      .catch((error) => {
        console.log(error);
        setotpError(true);
      });
  };
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    let response;
    try {
      response = await signInWithPopup(authentication, provider);
      console.log(response);
    } catch (err) {
      toast.error("Something Went Wrong, please try again!");
      console.log(err);
      return;
    }
    try {
      response = await axios.post("/login/google", { uid: response.user.uid });
      setAuth({ token: response.data.token });
      localStorage.setItem("token", response.data.token);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {auth?.token ? (
        <Navigate to="/profile" state={{ from: location }} replace />
      ) : (
        ""
      )}
      <section className="form-page" style={{ marginTop: "90px" }}>
        <div className="form-page__img bg-dark-1">
          <div className="form-page-composition">
            <div className="-bg">
              <img
                data-move="30"
                className="js-mouse-move"
                src="img/login/bg.png"
                alt="bg"
              />
            </div>
            <div className="-el-1">
              <img
                data-move="20"
                className="js-mouse-move"
                src="img/home-9/hero/bg.png"
                alt="image"
              />
            </div>
            <div className="-el-2 img1">
              <img
                data-move="40"
                className="js-mouse-move"
                src="img/home-9/hero/1.png"
                alt="icon"
              />
            </div>
            <div className="-el-3">
              <img
                data-move="40"
                className="js-mouse-move"
                src="img/home-9/hero/2.png"
                alt="icon"
              />
            </div>
            <div className="-el-4">
              <img
                data-move="40"
                className="js-mouse-move"
                src="img/home-9/hero/3.png"
                alt="icon"
              />
            </div>
          </div>
        </div>

        <div className="form-page__content lg:py-50">
          <div className="container">
            <div className="row justify-center items-center">
              <div className="col-xl-8 col-lg-9">
                <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16 sign-up">
                  <h3 className="text-30 lh-13" style={{ marginTop: "60px" }}>
                    Sign Up
                  </h3>
                  <p className="mt-10">
                    Already have an account?{" "}
                    <Link to="/login" className="text-purple-1">
                      Log in
                    </Link>
                  </p>

                  <form
                    className="contact-form respondForm__form row y-gap-20 pt-30 form1"
                    action="#"
                  >
                    <div className="col-lg-6" style={{ marginTop: "-10px" }}>
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-6" style={{ marginTop: "-10px" }}>
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-12" style={{ marginTop: "-10px" }}>
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Mobile Number *
                      </label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Mobile Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-12" style={{ marginTop: "-10px" }}>
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Password *
                      </label>
                      <input
                        type="text"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-lg-12" style={{ marginTop: "-10px" }}>
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Confirm Password *
                      </label>
                      <input
                        type="text"
                        name="cpassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div id="recaptcha-container"></div>
                    {!isOTPSent ? (
                      <button
                        className="button -md -green-1 text-dark-1 fw-500 w-1/1 "
                        style={{ marginTop: "-10px" }}
                        onClick={(e) => {
                          e.preventDefault();
                          signin();
                        }}
                      >
                        Send OTP
                      </button>
                    ) : null}

                    {isOTPSent ? (
                      <div className="col-lg-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          OTP *
                        </label>
                        <input
                          type="text"
                          name="otp"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setotp(e.target.value)}
                          required
                        />
                      </div>
                    ) : null}
                    {otpError ? (
                      <div style={{ color: "#D8000C" }}>
                        <span>OTP Invalid or Expired!</span>
                      </div>
                    ) : null}
                    {otpSentMsg ? (
                      <div style={{ color: "green" }}>
                        <span>OTP Sent Successfully!</span>
                      </div>
                    ) : null}
                    <div
                      className="col-lg-12"
                      style={{ display: isOTPSent ? "block" : "none" }}
                    >
                      <button
                        className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                        onClick={(e) => ValidateOtp(e)}
                      >
                        Verify
                      </button>
                    </div>
                  </form>

                  <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                    Or sign in using
                  </div>

                  <div className="d-flex x-gap-20 items-center justify-between pt-20">
                    <div
                      style={{
                        margin: "0 auto",
                      }}
                    >
                      <button
                        className="button -md px-24 py-20 -outline-red-3 text-red-3 text-14"
                        onClick={googleSignIn}
                      >
                        Log In via Google+
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StatusToast />
    </>
  );
};

export default Signup;
