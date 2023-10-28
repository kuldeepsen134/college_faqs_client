import { useEffect, useState } from "react";
import { Form, useSearchParams } from "react-router-dom";
import axios from "../api/axios";
import "./CollegeDetails.css";
import useAuth from "../hooks/useAuth";
import BannersList from "../Components/BannersList";
import { STATIC_URL } from "../config/config";
import { Button, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBiking,
  faBook,
  faCoffee,
  faDumbbell,
  faFlask,
  faHospitalAlt,
  faHotel,
  faWifi,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import StatusToast from "../Components/StatusToast";
import { toast } from "react-toastify";

const CollegeDetails = () => {
  const [urlSearchParams] = useSearchParams();
  const college = urlSearchParams.get("college") || null;
  const [details, setDetails] = useState({});
  const [question, setQuestion] = useState("");
  const { auth } = useAuth();

  const sendQuestion = async () => {
    try {
      const response = await axios.post(
        "/send-mail",
        {
          question,
        },
        { headers: { authorization: "Bearer " + auth.token } }
      );
      setQuestion("");
    } catch (err) {
      console.log(err);
    }
    toast.success("Your Question has been submitted Successfully!");
  };

  return (
    <div>
      {/* Main content */}
      <article className="profile school college" style={{ marginTop: "10%" }}>
        <div className="container profile--main mt-3 mt-md-5 mt-lg-7 pb-lg-6">
          {/* start of our main content wrapper - closed in school.blade.php */}

          <div className="row no-gutters justify-content-end">
            <div className="col-lg-9 p-0 profile-content media-4">
              {/* start col-9 profile content wrapper */}{" "}
              <section id="Ask-You-Question" className="media-5">
                <div
                  className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                  style={{ overflow: "hidden" }}
                >
                  <h2 className="d-inline-block mb-3 py-3 py-md-4">
                    Ask A Question
                  </h2>
                  {/* Premium Profile Overview */}
                  <div className="mb-5 read-more">
                    <form>
                      <FormGroup>
                        <textarea
                          id="question"
                          className="form-control"
                          name="question"
                          placeholder="Enter your question"
                          rows={5}
                          value={question}
                          onChange={(e) => {
                            setQuestion(e.target.value);
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button
                          color="info"
                          type="button"
                          onClick={sendQuestion}
                        >
                          Submit
                        </Button>
                      </FormGroup>
                    </form>
                  </div>
                </div>
              </section>
              {/* Related Schools */}
            </div>
          </div>
        </div>
      </article>
      <StatusToast />
    </div>
  );
};

export default CollegeDetails;
