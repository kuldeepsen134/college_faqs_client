import { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

import StatusToast from "../Components/StatusToast";
import { toast } from "react-toastify";

const Profile = () => {
  const { auth, setAuth } = useAuth();
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleLogout = () => {
    setAuth({});
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      var response;
      try {
        response = await axios.get("/user/profile", {
          headers: { authorization: "Bearer " + auth.token },
        });
        // console.log(response.data);
        if (!response?.data?.success) throw Error;
      } catch (err) {
        console.log(err);
        return;
      }
      setfName(response?.data?.user?.name?.split(" ")[0]);
      setlName(response?.data?.user?.name?.split(" ")[1]);
      setEmail(response?.data?.user?.email);
      setMobile(response?.data?.user?.mobile);
    };
    fetchProfile();
  }, []);

  const updateProfile = async () => {
    try {
      const name = fname + " " + lname
      const response = await axios.post("/user/update-profile", {
        name,
        mobile
      }, {
        headers: { authorization: "Bearer " + auth.token },
      }) 
        toast(response?.data?.message, {
          position: 'top-right', // Toast position
          autoClose: 3000,      // Time (in milliseconds) before auto-closing
          hideProgressBar: false, // Hide or show the progress bar
          closeOnClick: true,    // Close on click
          pauseOnHover: true,    // Pause on hover
          draggable: true,       // Make toast draggable
        }); 
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {/* Main content */}
      <main id="content" role="main" style={{ marginLeft: "150px" }}>
        <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
            <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">Profile</h1>
              <div className="mt-10">
                You can update your profile from here.
              </div>
            </div>
          </div>

          <div className="row y-gap-30">
            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="tabs -active-purple-2 js-tabs pt-0">
                  <div className="tabs__controls d-flex x-gap-30 items-center pt-20 px-30 border-bottom-light js-tabs-controls">
                    <button
                      className="tabs__button text-light-1 js-tabs-button is-active"
                      data-tab-target=".-tab-item-1"
                      type="button"
                    >
                      Edit Profile
                    </button>
                  </div>

                  <div className="tabs__content py-30 px-30 js-tabs-content">
                    <div className="tabs__pane -tab-item-1 is-active">
                      <div className="row y-gap-20 x-gap-20 items-center">
                        <div className="col-auto">
                          <img
                            className="size-100"
                            src="img/dashboard/edit/1.png"
                            alt="image"
                          />
                        </div>

                        <div className="col-auto">
                          <div className="text-16 fw-500 text-dark-1">
                            Your avatar
                          </div>
                          <div className="text-14 lh-1 mt-10">
                            PNG or JPG no bigger than 800px wide and tall.
                          </div>

                          <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
                            <div>
                              <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                                <div className="icon-cloud text-16"></div>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                                <div className="icon-bin text-16"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-top-light pt-30 mt-30">
                        <form action="#" className="contact-form row y-gap-30">
                          <div className="col-md-6">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                              First Name
                            </label>

                            <input
                              type="text"
                              placeholder="First Name"
                              id="first_name"
                              onChange={(e) => setfName(e.target.value)}
                              value={fname}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                              Last Name
                            </label>

                            <input
                              type="text"
                              placeholder="Last Name"
                              id="last_name"
                              value={lname}
                              onChange={e => setlName(e.target.value)}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                              Mobile
                            </label>

                            <input
                              type="text"
                              placeholder="Enter Your Mobile Number"
                              onChange={(e) => setMobile(e.target.value)}
                              value={mobile}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                              Email Address
                            </label>

                            <input
                              type="text"
                              placeholder="Enter Your Email Address"
                              id="email_address"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              readOnly
                            />
                          </div>
                          {/* 
                          <div className="col-md-6">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                              Address Line 1
                            </label>

                            <input type="text" placeholder="Address Line 1" />
                          </div>

                          <div className="col-md-6">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                              Address Line 2
                            </label>

                            <input type="text" placeholder="Address Line 2" />
                          </div>

                          <div className="col-md-6">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                              State
                            </label>

                            <input type="text" placeholder="State" />
                          </div>

                          <div className="col-md-6">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                              Country
                            </label>

                            <input type="text" placeholder="Country" />
                          </div>

                          <div className="col-12">
                            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                              Personal info
                            </label>

                            <textarea placeholder="Text..." rows="7"></textarea>
                          </div> */}
                          <div className="row">
                            <div className="col-6">
                              <button className="button -md -purple-1 text-white" onClick={(e) => {
                                e.preventDefault()
                                updateProfile()
                              }}>
                                Update Profile
                              </button>
                            </div>
                            <div className="col-6">
                              <button
                                className="button -md -purple-1 text-white"
                                onClick={handleLogout}
                              >
                                Logout
                              </button>
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
      </main>
      <StatusToast />
    </div>
  );
};

export default Profile;
