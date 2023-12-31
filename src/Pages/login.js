import { useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import "../assets/css/signup.css";
import { toast } from "react-toastify";
import StatusToast from "../Components/StatusToast";
import { useEffect } from "react";
import {
  GoogleAuthProvider, signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { authentication } from "../hooks/firebase";
import { useFormik } from "formik";






const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //function for calling login api.
  const { auth, setAuth } = useAuth();

  const LOGIN_URI = "/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [googleToken, setGoogleToken] = useState({})

  const [number, setNumber] = useState("");


  const onSubmit = async (e) => {
    if (isSubmit) return;
    setIsSubmit(true);
    e.preventDefault();
    if (!email || !password) {
      setIsSubmit(false);
      return;
    }
    try {
      const toastId = toast.loading("Signing In..", {
        closeButton: true,
      });
      const response = await axios.post(LOGIN_URI, {
        email: email,
        password: password,
      });

      if (!response.data.success) {
        toast.update(toastId, {
          autoClose: true,
          render: response.data.message,
          type: "error",
          isLoading: false,
          closeButton: true,
        });
        console.log(response.data);

        setIsSubmit(false);
        return;
      }
      toast.update(toastId, {
        render: "Logged In Successfully!",
        type: "success",
        autoClose: true,
      });
      setAuth({ token: response.data.token });
      localStorage.setItem("token", response.data.token);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmit(false);
    }
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    let response;
    try {
      response = await signInWithPopup(authentication, provider);
      setGoogleToken(response)
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
      toast.error(err.response?.data?.message);
    }
  };

  const formik = useFormik({
    initialValues: {},
    enableReinitialize: true,

    onSubmit: async (values) => {
      let fullname = googleToken?.user?.displayName
      values['name'] = fullname

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

      if (values.mobile_number) {
        generateRecaptcha()
        let appVerifier = window.recaptchaVerifier;
        console.log(',appVerifierappVerifier', appVerifier);


        // signInWithPhoneNumber(authentication, "+91" + values?.mobile_number, appVerifier)
        //   .then((result) => {
        //     window.result = result;

        //     console.log('res', result);
        //     // setisOTPSent(true);
        //     // setOtpSentMsg(true);
        //   })
        //   .catch((error) => {
        //     console.log("signin error", error);
        //   });
      }
    }



  })

  return (
    <>
      {auth?.token ? (
        <Navigate to="/profile" state={{ from: location }} replace />
      ) : (
        ""
      )}
      <section
        className="masthead form-page js-mouse-move-container"
      >
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
          </div>
        </div>

        <div className="form-page__content lg:py-50 log-in">
          <div className="container">
            <div className="row justify-center items-center">
              <div className="col-xl-6 col-lg-8">
                {Object.keys(googleToken).length !== 0 ?

                  <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
                    <h3 className="text-30 lh-13">Login</h3>
                    <p className="mt-10">
                      Don't have an account yet?{" "}
                      <Link to="/sign-up" className="text-purple-1">
                        Sign up for free
                      </Link>
                    </p>

                    <form
                      className="contact-form respondForm__form row y-gap-20"
                      action="#"
                      onSubmit={formik.handleSubmit}
                    >
                      {/* <div className="col-12">
                          <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div> */}
                      <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          name="mobile_number"
                          value={formik.values.mobile_number}
                          onChange={formik.handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="button -sm -green-1 text-dark-1 fw-500 w-1/1"
                        // onClick={(e) => onSubmit(e)}
                        >
                          Login
                        </button>
                      </div>
                    </form>

                    <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                      Or sign in using
                    </div>

                    <div className="d-flex x-gap-20 items-center justify-between pt-20">
                      {/* <div>
                  <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                    Log In via Facebook
                  </button>
                </div> */}
                      <div
                        style={{
                          margin: "0 auto",
                        }}
                      >
                        <button
                          className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14"
                          onClick={googleSignIn}
                        >
                          Log In via Google+
                        </button>
                      </div>
                    </div>
                  </div>
                  :

                  <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
                    <h3 className="text-30 lh-13">Login</h3>
                    <p className="mt-10">
                      Don't have an account yet?{" "}
                      <Link to="/sign-up" className="text-purple-1">
                        Sign up for free
                      </Link>
                    </p>

                    <form
                      className="contact-form respondForm__form row y-gap-20"
                      action="#"
                    >
                      <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="button"
                          name="submit"
                          id="submit"
                          className="button -sm -green-1 text-dark-1 fw-500 w-1/1"
                          onClick={(e) => onSubmit(e)}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    <Link to="/forgot-password" className="text-purple-1">
                      Forgot password
                    </Link>
                    <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                      Or sign in using
                    </div>

                    <div className="d-flex x-gap-20 items-center justify-between pt-20">
                      {/* <div>
                      <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                        Log In via Facebook
                      </button>
                    </div> */}
                      <div
                        style={{
                          margin: "0 auto",
                        }}
                      >
                        <button
                          className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14"
                          onClick={googleSignIn}
                        >
                          Log In via Google+
                        </button>
                      </div>
                    </div>
                  </div>

                }

              </div>
            </div>
          </div>
        </div>
      </section>
      <StatusToast />
      {/* </div> */}
      {/* </main> */}
    </>
  );
};

export default Login;
