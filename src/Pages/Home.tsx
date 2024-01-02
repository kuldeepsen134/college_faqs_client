import React, { useEffect, useState } from "react";
import { instance } from "../api/axios";
import { useNavigate } from "react-router";
import { STATIC_URL } from "../config/config";

import { Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


interface SearchResult {
  id: number;
  name: string;
  image: string;
  location: string
}

const Home = () => {

  const [searchField, setSearchField] = useState('')
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate()

  const [show, setShow] = useState(false)

  useEffect(() => {
    const fetchCollege = async () => {
      let responce = await instance.post("/college-list", { q: searchField });
      setSearchResults(responce && responce?.data?.data)
    }
    fetchCollege();
  }, [searchField])




  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const handleResultClick = (id: any) => {
    navigate(`/college-details?college=${id}`)
    setShow(!show)
  };



  return (
    <>
      <section
        className="masthead -type-1 js-mouse-move-container home-page"
      >
        <div className="masthead__bg">
          <img src="img/home-1/hero/bg.png" alt="image" />
        </div>

        <div className="container">

          <div
            className="row y-gap-30 justify-between items-end"
          >
            <div className="col-xl-12 col-lg-12 col-sm-12">
              <div className="masthead__content text-center">
                <h4 className="masthead__title text-green-1">
                  CollegeFAQs{" "}-{" "}
                  <span className="text-white">Your College Repository</span>
                </h4>
                <div>
                  <input
                    type="search"
                    name="collageName"
                    placeholder="Search Box"
                    onChange={(e) => setSearchField(e.target.value)}
                    style={{
                      width: "84%",
                      padding: "20px",
                      borderRadius: "8px",
                      backgroundColor: "white",
                      textAlign: "center",
                      margin: "10px 0"
                    }}
                  />
                  {searchResults &&
                    <ul className="header-search-result" style={{
                      width: "82%", marginTop: "0"
                    }}>
                      {searchResults?.map((result: SearchResult, i) => (
                        <>
                          <li className="d-flex align-items-center" key={i} style={{
                            textAlign: "start"
                          }}>
                            <img src={`${STATIC_URL}/images/${result.image}`} alt="img" className="mx-2 serachimag" />
                            {/* <p className="mb-0" onClick={() => handleResultClick(result?.id)}>{result.name}{'  '}{result.location}</p> */}
                            <aside onClick={() => handleResultClick(result?.id)}>
                              <h5 className="mb-0"> {result.name}</h5>
                              <span>{result.location}</span>
                            </aside>
                          </li>
                        </>
                      )
                      )}
                    </ul>
                  }
                </div>
                <p className="masthead__text">
                  Start your learning with best courses, degrees and certificates from world class universities and colleges.
                  <br />
                </p>

                <div className="masthead-info__title lh-1 text-28 text-white">
                  Apply now for your favourite college / course. Claim your Application Coupon now.
                </div>
                <div className="masthead__buttons text-center">

                  <a
                    data-barba
                    href="/sign-up"
                    className="button -md -purple-1 text-white"
                    style={{
                      width: "260px",
                      height: "50px",
                      margin: "auto"
                    }}
                  >
                    Coupon Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="svg-waves"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g className="svg-waves__parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0"></use>
            <use xlinkHref="#gentle-wave" x="48" y="3"></use>
            <use xlinkHref="#gentle-wave" x="48" y="5"></use>
            <use xlinkHref="#gentle-wave" x="48" y="7"></use>
          </g>
        </svg>
      </section>

      <section className="layout-pt-md layout-pb-md section2-amz">
        <div data-anim-wrap className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle ">
                <h2 className="sectionTitle__title ">Featured Colleges</h2>
              </div>
            </div>
          </div>

          <div className="position-relative">
            <Swiper
              loop={true}
              speed={2000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              <SwiperSlide>
                <div className="featureCard -type-1 -featureCard-hover">
                  <div className="featureCard__content">
                    <img src="img/Screenshot_1.jpg" alt="icon" style={{ minHeight: "514px", objectFit: "scale-down" }} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide> <div className="featureCard -type-1 -featureCard-hover">
                <div className="featureCard__content">
                  <img src="img/universal-university.png" alt="icon" style={{ minHeight: "514px", objectFit: "scale-down" }} />
                </div>
              </div></SwiperSlide>
              <SwiperSlide>
                <div className="featureCard -type-1 -featureCard-hover">
                  <div className="featureCard__content">
                    <img src="img/isbr.png" alt="icon" style={{ minHeight: "514px", objectFit: "scale-down" }} />
                  </div>
                </div></SwiperSlide>
              <SwiperSlide>
                <div className="featureCard -type-1 -featureCard-hover">
                  <div className="featureCard__content">
                    <img src="img/ndim.png" alt="icon" style={{ minHeight: "514px", objectFit: "scale-down" }} />
                  </div>
                </div></SwiperSlide>
              <SwiperSlide>
                <div className="featureCard -type-1 -featureCard-hover">
                  <div className="featureCard__content">
                    <img src="img/alliance-bangalore.png" alt="icon" style={{ minHeight: "514px", objectFit: "scale-down" }} />
                  </div>
                </div></SwiperSlide>
              <SwiperSlide>
                <div className="featureCard -type-1 -featureCard-hover">
                  <div className="featureCard__content">
                    <img src="img/itm-group.png" alt="icon" style={{ minHeight: "514px", objectFit: "scale-down" }} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="featureCard -type-1 -featureCard-hover">
                  <div className="featureCard__content">
                    <img src="img/bennett-university.png" alt="icon" style={{ minHeight: "514px", objectFit: "scale-down" }} />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>

        </div>
      </section >

      <section className="layout-pt-lg layout-pb-lg bg-purple-1">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle ">
                <h2 className="sectionTitle__title text-green-1">
                  Counselling & Support
                </h2>

                <p className="sectionTitle__text text-white ">
                  Assistance, guidance and support with solution to questions, personalized Counselling and connection with student community.
                </p>
              </div>
            </div>
          </div>

          <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"
          >
            <div
              className="col mx-0"
            >
              <div className="flip-card m-0 mw-100">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="img/testimonials/1.png"
                      alt="image"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <p style={{ color: "black" }}>Courtney Henry</p>
                    <p className="name4">Expert Counselling</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="heading">
                      <b>Great Work</b>
                    </p>
                    <hr />
                    <p className="heading1">
                      {" "}
                      “Personalized couselling from expert regading colleges, admissions, eligibility, education loan, etc.
                      Video Couselling also available. ”
                    </p>
                    <hr />
                    <h5 className="name1">Courtney Henry</h5>
                    <h6 className="name2">Expert Counselling</h6>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col mx-0"
            >
              <div className="flip-card m-0 mw-100">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="img/testimonials/2.png"
                      alt="image"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <p style={{ color: "black" }}>Ronald Richards</p>
                    <p className="name4">Virtual Seminar</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="heading">
                      <b>Great Work</b>
                    </p>
                    <hr />
                    <p className="heading1">
                      {" "}
                      “Attend seminar of your favourite college from your home. Register for Seminar updates.”
                    </p>
                    <hr />
                    <h5 className="name1">Ronald Richards</h5>
                    <h6 className="name2">Virtual Seminar</h6>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col mx-0"
            >
              <div className="flip-card m-0 mw-100">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="img/testimonials/4.png"
                      alt="image"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <p style={{ color: "black" }}>Annette Black</p>
                    <p className="name4">Q and A</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="heading">
                      <b>Great Work</b>
                    </p>
                    <hr />
                    <p className="heading1">
                      {" "}
                      “post your questions and get it answered by the experts and students themselves.”
                    </p>
                    <hr />
                    <h5 className="name1">Annette Black</h5>
                    <h6 className="name2">Q and A</h6>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="layout-pt-lg layout-pb-lg bg-dark-2">
        <div data-anim-wrap className="container ">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle section2-amz">
                <h2 className="sectionTitle__title text-white">
                  Popular Choices
                </h2>

                <p className="sectionTitle__text text-white">
                  Explore top MBA colleges and find out about admission, exams, courses, specialization, and much more.
                </p>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2  row-cols-md-2 row-cols-lg-3 g-4 pt-40">
            <div className="col ms-0">
              <div className="stepCard -type-1 -stepCard-hover h-100">
                <div className="stepCard__content  h-100">
                  <div className="stepCard__icon">
                    <i className="icon-online-learning-4 text-64 text-green-1"></i>
                  </div>
                  <h4 className="stepCard__title">01. Colleges</h4>
                  <p className="stepCard__text">
                    {" "}
                    Find your dream college based on your location, fees, specialization and more choices.
                  </p>
                </div>
              </div>
            </div>

            <div className="col ms-0">
              <div className="stepCard -type-1 -stepCard-hover h-100">
                <div className="stepCard__content  h-100">
                  <div className="stepCard__icon">
                    <i className="icon-graduation-1 text-64 text-green-1"></i>
                  </div>
                  <h4 className="stepCard__title">02. MBA Specializations</h4>
                  <p className="stepCard__text">
                    {" "}
                    Learn and choose from 30 plus specialization options.

                  </p>
                </div>
              </div>
            </div>

            <div className="col ms-0">
              <div className="stepCard -type-1 -stepCard-hover h-100">
                <div className="stepCard__content  h-100">
                  <div className="stepCard__icon">
                    <i className="icon-working-at-home-2 text-64 text-green-1"></i>
                  </div>
                  <h4 className="stepCard__title">03. Compare Colleges</h4>
                  <p className="stepCard__text">
                    {" "}
                    Choose the best college. Compare them with best alternatives.

                  </p>
                </div>
              </div>
            </div>

            <div className="col ms-0">
              <div className="stepCard -type-1 -stepCard-hover h-100">
                <div className="stepCard__content  h-100">
                  <div className="stepCard__icon">
                    <i className="icon-online-learning-4 text-64 text-green-1"></i>
                  </div>
                  <h4 className="stepCard__title">04. Top NIRF Colleges</h4>
                  <p className="stepCard__text">
                    {" "}
                    Check the top MBA Colleges of India.

                  </p>
                </div>
              </div>
            </div>

            <div className="col ms-0">
              <div className="stepCard -type-1 -stepCard-hover h-100">
                <div className="stepCard__content  h-100">
                  <div className="stepCard__icon">
                    <i className="icon-graduation-1 text-64 text-green-1"></i>
                  </div>
                  <h4 className="stepCard__title">05. TOP Delhi / NCR Colleges</h4>
                  <p className="stepCard__text">
                    {" "}
                    Check the top MBA Colleges of Delhi / NCR.
                  </p>
                </div>
              </div>
            </div>

            <div className="col ms-0">
              <div className="stepCard -type-1 -stepCard-hover h-100">
                <div className="stepCard__content  h-100">
                  <div className="stepCard__icon">
                    <i className="icon-working-at-home-2 text-64 text-green-1"></i>
                  </div>
                  <h4 className="stepCard__title">06. Top Pune Colleges</h4>
                  <p className="stepCard__text">
                    {" "}
                    Check the top MBA Colleges of Pune.

                  </p>
                </div>
              </div>
            </div>

            <div className="col ms-0">
              <div className="stepCard -type-1 -stepCard-hover h-100">
                <div className="stepCard__content  h-100">
                  <div className="stepCard__icon">
                    <i className="icon-online-learning-4 text-64 text-green-1"></i>
                  </div>
                  <h4 className="stepCard__title">07. Top Mumbai Colleges</h4>
                  <p className="stepCard__text">
                    {" "}
                    Check the top MBA Colleges of Mumbai.

                  </p>
                </div>
              </div>
            </div>

            <div className="col ms-0">
              <div className="stepCard -type-1 -stepCard-hover h-100">
                <div className="stepCard__content  h-100">
                  <div className="stepCard__icon">
                    <i className="icon-graduation-1 text-64 text-green-1"></i>
                  </div>
                  <h4 className="stepCard__title">08. Top Bangalore Colleges </h4>
                  <p className="stepCard__text">
                    {" "}
                    Check the top MBA Colleges of Bangalore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col ms-0">
              <div className="stepCard -type-1 -stepCard-hover h-100">
                <div className="stepCard__content  h-100">
                  <div className="stepCard__icon">
                    <i className="icon-working-at-home-2 text-64 text-green-1"></i>
                  </div>
                  <h4 className="stepCard__title">09. Top Kolkata Colleges</h4>
                  <p className="stepCard__text">
                    {" "}
                    Check the top MBA Colleges of Kolkata.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="layout-pt-md layout-pb-md bg-purple-1">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-lg-5 col-xl-4">
              <h2 className="text-30 lh-15 text-white">
                Just Touch On{" "}
                <span className="text-green-1">Connect With</span>{" "}
                Us
              </h2>
            </div>

            <div className="col-auto">
              <a href="#" className="button -md -green-1 text-dark-1">
                Start Learning
              </a>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};
export default Home;
