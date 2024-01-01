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
import { toast } from "react-toastify";
import StatusToast from "../Components/StatusToast";
import { SplitData, specializationData } from "../services/comman";

const CollegeDetails = () => {
  const [urlSearchParams] = useSearchParams();
  const college = urlSearchParams.get("college") || null;
  const [details, setDetails] = useState({});
  const [question, setQuestion] = useState("");
  const [gallerypathArray, setgallerypathArray] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const response = await axios.post(
          "/colleges/fetch",
          {
            college: college,
          },
          { headers: { authorization: "Bearer " + auth.token } }
        );
        setDetails(response.data.details);
        const fileNamesArray = JSON.parse(response?.data?.details?.gallery_links);
        setgallerypathArray(fileNamesArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCollege();
  }, [auth.token, college]);

  const sendQuestion = async () => {
    try {
      await axios.post("/send-mail", { question, },
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
      <main id="content" role="main">
        {/* <BannersList /> */}
        <article className="profile school college">
          <header className="position-relative">
            <div className="position-relative" style={{ overflow: "hidden" }}>
              <div className="overlay" />
              <div className="container">
                <div className="row media">
                  <a className="position-absolute p-1 py-md-2 px-md-3 btn btn-white btn-sm back-to-search">
                    <span className="d-none d-md-inline-block position-relative mr-1">
                      ←
                    </span>
                    Back to Results
                  </a>
                  <div className="position-absolute col-lg-6 col-xl-5 d-flex profile-title">
                    <div
                      className="profile-title--logo mr-4 bg-white rounded"
                      style={{ marginTop: "0.4375rem" }}
                    >
                      <img
                        src={STATIC_URL + "/images/" + details.college_image}
                        className="mw-100 mh-100 p-1 p-md-2"
                        alt="logo"
                      />
                    </div>{" "}
                    <div>
                      {/* <span className="badge ug-school mb-2">University</span>{" "} */}
                      <h1 className="mb-1 pr-3 pl-0 h3 text-white inner">
                        {details.college_name}
                      </h1>
                      <p className="mb-0 h5 text-white">{details.location} </p>
                      <p className="badge ug-school mb-2text-white">
                        {details.college_type} / {details.established_year}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="owl-carousel"> */}
              <img
                src={STATIC_URL + "/images/" + details.background_image}
                style={{ width: '100%', maxWidth: '100%', height: '500px' }}
                className="owl-carousel"
              />
              {/* </div> */}
            </div>
            <div className="position-relative">
              <div className="container position-relative header-facts my-4 my-lg-5 ">
                <div className="row align-items-end justify-content-between no-gutters">
                  <div className="col-lg-12">
                    <div className="row align-items-md-center media-2 change justify-content-between">
                      <a
                        href="#tuition"
                        className="smooth col-6 col-lg-auto d-flex align-items-center mb-3 mb-md-0 mx-lg-2 text-dark"
                      >
                        <div>
                          <div className="header-facts--value mb-0 h4">
                            <span className="strikethrough d-table"></span>
                            Total Fees
                            <sub className="text-muted"></sub>
                          </div>
                          <small className="header-facts--label">
                            <div className="USD" />
                            {details.total_fees ? details.total_fees : "N/A"}
                          </small>
                        </div>
                      </a>
                      <a
                        href="#Ranking-and-Accreditations"
                        className="smooth col-6 col-lg-auto mb-3 mb-md-0 mx-lg-2 text-left text-dark"
                      >
                        <div className="header-facts--value mb-0 h4">Ranking</div>
                        <small className="header-facts--label mt-md-2">
                          {details.ranking ? details.ranking : "N/A"}
                        </small>
                      </a>
                      <a
                        href="#Programs"
                        className="smooth col-6 col-lg-auto mb-3 mb-md-0 mx-lg-2 text-dark"
                      >
                        <div className="header-facts--value mb-0 h4">
                          Highlight Program
                        </div>
                        <small className="header-facts--label">
                          {details.program ? details.program.slice(0, 20) + "" : "N/A"}
                        </small>
                      </a>
                      <a
                        href="#Placements"
                        className="smooth d-flex align-items-center col-6 col-lg-auto mb-3 mb-md-0 mx-lg-2 text-dark"
                      >
                        <div style={{ lineHeight: 1 }}>
                          <div className="header-facts--value d-block mb-0 h4">
                            Highest Placements
                          </div>
                          <small className="header-facts--label">
                            {details.placement ? details.placement : "N/A"}
                          </small>
                          <br></br>
                        </div>
                      </a>
                      <a
                        href={
                          details?.brochure && auth?.token
                            ? STATIC_URL + "/files/" + details.brochure
                            : "/login"
                        }
                        target={"_blank"}
                        className="smooth col-6 col-lg-auto mb-3 mb-md-0 mx-lg-2 text-left text-dark" rel="noreferrer"
                      >
                        <div className="header-facts--value mb-0 h4">
                          Brochure
                        </div>
                        <small className="badge ug-school mb-2">
                          {auth?.token
                            ? "Click Here"
                            : "Download Brochure"}
                          <br />
                        </small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* second div */}

              <div className="card media-3 custom-card">
                <b>Interested?</b>
                <p style={{ marginTop: "10px" }}>
                  Intrested in {details.college_name}, {details.location}?
                  Admissions officers are waiting to hear from you!
                </p>
                <p className="price">
                  <a className="price1" href="">
                    Apply Now
                  </a>
                </p>
              </div>
            </div>
            {/* Mobile save and share */}
            <div
              className="mobile-save-share container d-lg-none mb-3 school-actions position-relative"
              style={{ zIndex: 9 }}
            >
              <div className="row no-gutters mt-3">
                <div className="col-12">
                  {/* Client external RMI button */}
                  <div className="school-actionsb position-relative">
                    <a
                      id="requestSchoolButtonMobileTop"
                      className="d-flex align-items-center justify-content-center btn btn-rmi w-100 rmi"
                    >
                      <i className="icon-check d-none" />
                      <span
                        v-html="savedUserInfo == true ? 'One-Click Submit' : 'Get More Info'"
                        className="btn-text"
                      />
                      <span className="spinner position-absolute" />
                    </a>
                    <div className="success position-absolute p-3 bg-white rounded text-center">
                      Your submission to Southern New Hampshire University has
                      been sent.
                    </div>
                  </div>
                </div>
                <div className="col-12 py-2 hide">
                  <a
                    id="saveSchoolButtonMobileTop"
                    className="position-relative save btn btn-light w-100 d-flex align-items-center justify-content-center "
                  >
                    <i className="icon-star" style={{ color: "#adb5bd" }} />
                    Save
                    {/* Loading */}
                    <div className="spinner position-absolute w-100 p-1 bg-white">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="24px"
                        height="30px"
                        viewBox="0 0 24 30"
                        style={{ enableBackground: "new 0 0 50 50" }}
                        xmlSpace="preserve"
                      >
                        <rect
                          x={0}
                          y={10}
                          width={4}
                          height={10}
                          fill="#333"
                          opacity="0.2"
                        >
                          <animate
                            attributeName="opacity"
                            attributeType="XML"
                            values="0.2; 1; .2"
                            begin="0s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="height"
                            attributeType="XML"
                            values="10; 20; 10"
                            begin="0s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="y"
                            attributeType="XML"
                            values="10; 5; 10"
                            begin="0s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <rect
                          x={8}
                          y={10}
                          width={4}
                          height={10}
                          fill="#333"
                          opacity="0.2"
                        >
                          <animate
                            attributeName="opacity"
                            attributeType="XML"
                            values="0.2; 1; .2"
                            begin="0.15s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="height"
                            attributeType="XML"
                            values="10; 20; 10"
                            begin="0.15s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="y"
                            attributeType="XML"
                            values="10; 5; 10"
                            begin="0.15s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <rect
                          x={16}
                          y={10}
                          width={4}
                          height={10}
                          fill="#333"
                          opacity="0.2"
                        >
                          <animate
                            attributeName="opacity"
                            attributeType="XML"
                            values="0.2; 1; .2"
                            begin="0.3s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="height"
                            attributeType="XML"
                            values="10; 20; 10"
                            begin="0.3s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="y"
                            attributeType="XML"
                            values="10; 5; 10"
                            begin="0.3s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div className="container profile--main mt-3 mt-md-5 pb-lg-6" id="top-colleges">
            {/* start of our main content wrapper - closed in school.blade.php */}

            <div className="row no-gutters justify-content-end">
              <div
                id="profileNavWrapper"
                className="sticky-top col-lg-3 px-0 pr-lg-5 align-self-start bg-white"
                style={{ position: "sticky", top: "0", }}
              >
                <nav
                  id="profileNav"
                  className="nav flex-nowrap flex-lg-wrap flex-lg-column"
                  style={{ position: "sticky", top: "0" }}
                >
                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#latest-updates"
                    >
                      Latest Updates
                    </a>
                  </div>
                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#overview"
                    >
                      Overview
                    </a>
                  </div>
                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#Key-Highlights"
                    >
                      Key Highlights
                    </a>
                  </div>

                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#Ranking-and-Accreditations"
                    >
                      Ranking and Accreditations
                    </a>
                  </div>
                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#Programs"
                    >
                      Programs
                    </a>
                  </div>
                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#Admissions"
                    >
                      Admissions
                    </a>
                  </div>
                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#Placements"
                    >
                      Placements
                    </a>
                  </div>
                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#Campus-Facilities"
                    >
                      Campus Facilities
                    </a>
                  </div>
                  <div className="col">
                    <a className="nav-link smooth d-block on-h" href="#gallery">
                      Gallery
                    </a>
                  </div>

                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#Social-Media"
                    >
                      Social Media
                    </a>
                  </div>

                  <div className="col">
                    <a
                      className="nav-link smooth d-block on-h"
                      href="#Ask-You-Question"
                    >
                      Ask Your Question
                    </a>
                  </div>
                </nav>

                {/* Client external RMI button */}
                <div className="d-none d-lg-block mt-3 school-actions media-04">
                  <a
                    id="requestSchoolButtonNav"
                    className="d-flex align-items-center justify-content-center btn btn-rmi w-100 rmi"
                  >
                    <i className="icon-check d-none" />
                    <span
                      v-html="savedUserInfo == true ? 'One-Click Submit' : 'Get More Info'"
                      className="btn-text"
                    />
                    <span className="spinner position-absolute" />
                  </a>
                  <div
                    v-if="savedUserInfo"
                    className="d-block mt-1 text-12 text-center"
                    style={{ cursor: "pointer" }}
                  >
                    <u>Update my info</u>
                  </div>
                  <div className="success position-absolute p-3 bg-white rounded text-center">
                    Your submission to Southern New Hampshire University has
                    been sent.
                  </div>
                </div>
              </div>

              <div className="col-lg-9 p-0 profile-content media-4">
                {/* start col-9 profile content wrapper */}{" "}
                <section id="latest-updates" className="media-5 mt-0">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Latest Updates
                    </h2>
                    {/* Premium Profile Overview */}
                    <div className="mb-5 read-more">
                      {details?.updates?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </div>
                  </div>
                </section>
                <section id="overview" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Overview
                    </h2>
                    {/* Premium Profile Overview */}
                    <div className="mb-5 read-more">
                      {/* <p>{details.overview} </p> */}
                      <ul>
                        {
                          details?.overviews?.map((item) => {
                            return (
                              <li>&#8226; {item?.overview}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </section>
                <section id="Key-Highlights" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Key Highlights
                    </h2>
                    <div className="mb-5 read-more">
                      <ul>
                        {
                          details && details?.key_heighlits?.map((item) => {
                            return (
                              <li>&#8226; {item?.key_highlight}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </section>
                <section id="Ranking-and-Accreditations" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Ranking and Accreditations
                    </h2>
                    <div className="mb-5 read-more">
                      <ul>
                        {
                          details && details?.ranking_accreditations?.map((item) => {
                            return (
                              <li>&#8226; {item?.ranking_accreditation}</li>
                            )
                          })
                        }
                      </ul>

                      {/* <p>
                        51st Amongst all Management Institutes in India (NIRF
                        2022). <br />
                        41st Amongst Private B-Schools in India (Business World,
                        2022). <br />
                        ‘A’ Grade Accreditation by ‘NAAC’, UGC. <br />
                        AIU Recognised PGDM courses Equivalent to MBA. <br />
                        AACSB Business Education Alliance Member. <br />
                        AACSB Business Education Alliance Member. <br />
                      </p> */}
                    </div>
                  </div>
                </section>
                <section id="Programs" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "scroll" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Programs
                    </h2>
                    {/* Premium Profile Overview */}
                    <table className="table w-1/1">
                      <thead>
                        <tr>
                          <th>Programs</th>
                          <th>Fees</th>
                          <th>No. of Seats</th>
                          <th>Internship</th>
                          <th>Scholarships</th>
                        </tr>
                      </thead>
                      <tbody>
                        {details?.programs?.map((item, i) => (
                          <tr key={i} id={item.id}>
                            <td>{item.program_name}</td>
                            <td>{item.fees}</td>
                            <td>{item.seats}</td>
                            <td>{item.internship}</td>
                            <td>{item.scholorships}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
                <section id="Admissions" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Admissions
                    </h2>
                    <br />
                    {/* Premium Profile Overview */}
                    <div className="mb-5 read-more">
                      <b>Eligibility</b>
                      <section id="latest-updates" className="media-5 ">
                        <div
                          className="position-relative mb-3 p-0 rounded"
                          style={{ overflow: "hidden" }}
                        >
                          {/* <h2 className="d-inline-block mb-3 py-3 py-md-4">
                    Eligibility
                    </h2> */}
                          {/* Premium Profile Overview */}
                          <div className="mb-5 read-more">
                            {/* <p>{details.adm_elg}</p> */}


                            <ul>
                              {
                                details && details?.adm_elgs?.map((item) => {
                                  return (
                                    <li>&#8226; {item?.adm_elg}</li>
                                  )
                                })
                              }
                            </ul>


                          </div>
                        </div>
                      </section>

                      {/* <table className="tb">
                        <tr>
                          <td>Score in CAT/CMAT/XAT/MAT/GMAT/ATMA</td>
                          <td>{details.sw_sc}%</td>
                        </tr>
                        <tr>
                          <td className="td1">Case Based Group Discussion</td>
                          <td className="td1">{details.sw_cb}%</td>
                        </tr>

                        <tr>
                          <td>Personal Interview</td>
                          <td>{details.sw_pi}%</td>
                        </tr>

                        <tr>
                          <td className="td1">
                            Academic Performance in X Std., XII Std.,
                            Degree/Post Graduate Degree 15%
                          </td>
                          <td className="td1">{details.sw_ap}%</td>
                        </tr>

                        <tr>
                          <td>
                            Work Experience, Sports & Extra Curricular
                            Activities
                          </td>
                          <td width="20%">{details.sw_we}%</td>
                        </tr>
                      </table> */}
                    </div>
                  </div>
                </section>
                <section id="latest-updates" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Placement Highlights
                    </h2>
                    {/* Premium Profile Overview */}
                    <div className="mb-5 read-more">
                      {/* <p>{details?.placement_heighlits}</p>
                       */}
                      <ul>
                        {
                          details && details?.placement_heighlits?.map((item) => {
                            return (
                              <li>&#8226; {item?.placement_heighlit}</li>
                            )
                          })
                        }
                      </ul>

                    </div>
                  </div>
                </section>
                <section id="Campus-Facilities" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Campus Facilities
                    </h2>
                    {/* Premium Profile Overview */}
                    <div className="mb-5 read-more content">
                      <div className="row">
                        {details?.cf_ac ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faWind} style={{
                                color: 'red'
                              }} /> AC Classrooms
                            </p>
                          </div>
                        ) : null}
                        {details?.cf_audi ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faHotel} style={{ color: '#000' }} /> Auditorium
                            </p>
                          </div>
                        ) : null}
                        {details?.cf_cafe ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faCoffee} /> Cafeteria
                            </p>
                          </div>
                        ) : null}
                        {details?.cf_gym ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faDumbbell} style={{ color: 'red' }} /> Gym
                            </p>
                          </div>
                        ) : null}
                        {details?.cf_hmf ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faHospitalAlt} /> Hospital
                              & Medical Facilities
                            </p>
                          </div>
                        ) : null}
                        {details?.cf_hostel ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faHotel} /> Hostel
                            </p>
                          </div>
                        ) : null}
                        {details?.cf_labs ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faFlask} /> Labs
                            </p>
                          </div>
                        ) : null}
                        {details?.cf_library ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faBook} /> Library
                            </p>
                          </div>
                        ) : null}
                        {details?.cf_sports ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faBiking} /> Sports Complex
                            </p>
                          </div>
                        ) : null}
                        {details?.cf_wifi ? (
                          <div className="col-4">
                            <p>
                              <FontAwesomeIcon icon={faWifi} /> Wi-Fi Campus
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </section>
                <section id="Campus-Facilities" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Specialization
                    </h2>
                    {/* Premium Profile Overview */}
                    <div className="mb-5 read-more content">
                      <div className="row">
                        {
                          details?.de && details?.de?.map((item) => {
                            if (item.value === 1) {
                              return (
                                <div className="col-4">
                                  <p>  &#8226; {item.name}</p>
                                </div>
                              )
                            }
                          })
                        }
                      </div>
                    </div>
                  </div>
                </section>

                <section id="Galary" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Gallery
                    </h2>
                    {/* Premium Profile Overview */}
                    <div className="mb-5 read-more">
                      <p>
                        <div className="row">
                          {gallerypathArray?.map((imagePath) => (
                            <div className="column" key={imagePath}>
                              <img
                                src={STATIC_URL + "/images/" + imagePath}
                                alt="Image"
                                onClick={() => window.open(STATIC_URL + "/images/" + imagePath, "_blank")}
                              />
                            </div>
                          ))}
                          {/* <div className="column">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIyiiNbz3VC9Afr-LqWpcw7loxjPnacfZSA&usqp=CAU "
                              alt="Forest"
                            />
                          </div>
                          <div className="column">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIyiiNbz3VC9Afr-LqWpcw7loxjPnacfZSA&usqp=CAU"
                              alt="Mountains"
                            />
                          </div> */}
                        </div>
                      </p>
                    </div>
                  </div>
                </section>
                <section id="Social-Media" className="media-5">
                  <div
                    className="position-relative mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                    style={{ overflow: "hidden" }}
                  >
                    <h2 className="d-inline-block mb-3 py-3 py-md-4">
                      Social Media
                    </h2>
                    {/* Premium Profile Overview */}
                    <div className="mb-5 read-more">
                      <div className="col-auto p-0">
                        <div className="footer-header-socials">
                          {/* <div className="footer-header-socials__title">
                            Follow us on social media
                          </div> */}
                          <div className="footer-header-socials__list">
                            {details?.sm_fb ? (
                              <a
                                href={details.sm_fb}
                                style={{ marginLeft: "20px" }}
                              >
                                <i className="icon-facebook"></i>
                              </a>
                            ) : (
                              ""
                            )}
                            {details?.sm_ttr ? (
                              <a
                                href={details.sm_ttr}
                                style={{ marginLeft: "20px" }}
                              >
                                <i className="icon-twitter"></i>
                              </a>
                            ) : (
                              ""
                            )}
                            {details?.sm_li ? (
                              <a
                                href={details.sm_li}
                                style={{ marginLeft: "20px" }}
                              >
                                <i className="icon-linkedin"></i>
                              </a>
                            ) : (
                              ""
                            )}
                            {details?.sm_ytb ? (
                              <a
                                href={details?.sm_ytb}
                                style={{ marginLeft: "20px" }}
                              >
                                <i className="fab fa-youtube"></i>
                              </a>
                            ) : (
                              ""
                            )}

                            {/* <a
                              href={details.sm_ytb}
                              style={{ marginLeft: "20px" }}
                            >
                              <i className="icon-youtube"></i>
                            </a> */}
                            {details?.sm_i ? (
                              <a
                                href={details.sm_i}
                                style={{ marginLeft: "20px" }}
                              >
                                <i className="icon-linkedin"></i>
                              </a>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
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
          {/* end col-9 profile content wrapper */}
          {/* Desktop sticky top */}
          <div className="fixed-top desktop-stick w-100 py-2 px-2 px-md-3 px-xl-5">
            <div className="d-flex align-items-center justify-content-between">
              <ol className="mb-0 list-unstyled">
                <li className="breadcrumb-item d-inline">
                  <a href="../index.html" className="text-white text-underline">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item d-inline">
                  <a
                    href="../college-search.html"
                    className="text-white text-underline"
                  >
                    Colleges
                  </a>
                </li>
                <li className="breadcrumb-item back-to-search">
                  <span className="text-white text-underline">
                    Search Results
                  </span>
                </li>
                <li
                  className="breadcrumb-item d-inline active"
                  aria-current="page"
                >
                  Southern New Hampshire University
                </li>
              </ol>
              <div className="d-flex align-items-center">
                <div className="userNaviagation school-actions d-flex align-items-center">
                  <a
                    id="saveSchoolButtonDesktopTop"
                    className="save btn text-white w-100 d-flex align-items-center justify-content-center bg-transparent border-0"
                  >
                    <i className="icon-star" style={{ color: "white" }} />
                    Save
                    {/* Loading */}
                    <div className="spinner position-absolute w-100 p-1 bg-white">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="24px"
                        height="30px"
                        viewBox="0 0 24 30"
                        style={{ enableBackground: "new 0 0 50 50" }}
                        xmlSpace="preserve"
                      >
                        <rect
                          x={0}
                          y={10}
                          width={4}
                          height={10}
                          fill="#333"
                          opacity="0.2"
                        >
                          <animate
                            attributeName="opacity"
                            attributeType="XML"
                            values="0.2; 1; .2"
                            begin="0s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="height"
                            attributeType="XML"
                            values="10; 20; 10"
                            begin="0s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="y"
                            attributeType="XML"
                            values="10; 5; 10"
                            begin="0s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <rect
                          x={8}
                          y={10}
                          width={4}
                          height={10}
                          fill="#333"
                          opacity="0.2"
                        >
                          <animate
                            attributeName="opacity"
                            attributeType="XML"
                            values="0.2; 1; .2"
                            begin="0.15s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="height"
                            attributeType="XML"
                            values="10; 20; 10"
                            begin="0.15s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="y"
                            attributeType="XML"
                            values="10; 5; 10"
                            begin="0.15s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <rect
                          x={16}
                          y={10}
                          width={4}
                          height={10}
                          fill="#333"
                          opacity="0.2"
                        >
                          <animate
                            attributeName="opacity"
                            attributeType="XML"
                            values="0.2; 1; .2"
                            begin="0.3s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="height"
                            attributeType="XML"
                            values="10; 20; 10"
                            begin="0.3s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="y"
                            attributeType="XML"
                            values="10; 5; 10"
                            begin="0.3s"
                            dur="0.6s"
                            repeatCount="indefinite"
                          />
                        </rect>
                      </svg>
                    </div>
                  </a>
                </div>
                {/* Client external RMI button */}
                <div className="school-actions position-relative">
                  <a
                    id="requestSchoolButtonDesktopTop"
                    className="d-flex align-items-center justify-content-center ml-3 btn btn-rmi btn-white rmi"
                  >
                    <i className="icon-check d-none" />
                    <span
                      v-html="savedUserInfo == true ? 'One-Click Submit' : 'Get More Info'"
                      className="btn-text"
                    />
                    <span className="spinner position-absolute" />
                  </a>
                  <div
                    v-if="savedUserInfo"
                    className="d-block mt-1 text-white text-12 text-center"
                    style={{ cursor: "pointer" }}
                  >
                    <u>Update my info</u>
                  </div>
                  <div className="success position-absolute p-3 bg-white rounded text-center">
                    Your submission to Southern New Hampshire University has
                    been sent.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile sticky top */}
          <div className="fixed-top mobile-stick d-lg-none mobile-info-top bg-white">
            Southern New Hampshire University
          </div>
          {/* Mobile sticky bottom */}
          <div className="mobile-info-bottom school-actions fixed-bottom mobile-stick d-lg-none mx-3 pb-3 bg-white">
            <div className="row no-gutters">
              <div className="col-12">
                {/* Client external RMI button */}
                <div className="school-actions position-relative h-100">
                  <a
                    id="requestSchoolButtonMobileBottom"
                    className="d-flex align-items-center justify-content-center btn btn-rmi w-100 rmi rounded"
                  >
                    <i className="icon-check d-none" />
                    <span
                      v-html="savedUserInfo == true ? 'One-Click Submit' : 'Get More Info'"
                      className="btn-text"
                    />
                    <span className="spinner position-absolute" />
                  </a>
                  <div
                    v-if="savedUserInfo"
                    className="d-block p-1 pb-2 bg-white text-12 text-center"
                    style={{ cursor: "pointer" }}
                  >
                    <u>Update my info</u>
                  </div>
                  <div className="success position-absolute p-3 bg-white rounded text-center">
                    Your submission to Southern New Hampshire University has
                    been sent.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article >
      </main >
      <StatusToast />
    </div >
  );
};

export default CollegeDetails;
