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
                  Collegefaqs&nbsp;
                  <span className="text-white">Your College Repository</span>
                </h4>
                <div>
                  <input
                    type="search"
                    name="collageName"
                    placeholder="Search Colleges, Courses, Exams, QnA & Articles"
                    onChange={(e) => setSearchField(e.target.value)}
                    style={{
                      width: "60%",
                      padding: "20px",
                      borderRadius: "8px",
                      backgroundColor: "white",
                      textAlign: "center",
                      margin: "10px 0"
                    }}
                  />
                  {searchResults &&
                    <ul className="header-search-result" style={{
                      width: "58.9%", marginTop: "0"
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
                      width: "fit-content",
                      height: "50px",
                      margin: "auto",
                      textTransform: "uppercase"
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
                <h2 className="sectionTitle__title "
                  style={{
                    color: "#970833",
                    textTransform: "uppercase"
                  }}
                >Featured Colleges</h2>
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
                <a href="">
                  <div className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <img src="img/Screenshot_1.jpg" alt="icon" style={{ objectFit: "scale-down" }} />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href=""> <div className="featureCard -type-1 -featureCard-hover">
                  <div className="featureCard__content">
                    <img src="img/universal-university.png" alt="icon" style={{ objectFit: "scale-down" }} />
                  </div>
                </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="">
                  <div className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <img src="img/isbr.png" alt="icon" style={{ objectFit: "scale-down" }} />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="">
                  <div className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <img src="img/ndim.png" alt="icon" style={{ objectFit: "scale-down" }} />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="">
                  <div className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <img src="img/itm-group.png" alt="icon" style={{ objectFit: "scale-down" }} />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="">
                  <div className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <img src="img/bennett-university.png" alt="icon" style={{ objectFit: "scale-down" }} />
                    </div>
                  </div>
                </a>
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
                <h2 className="sectionTitle__title"
                  style={{
                    color: "#000",
                    textTransform: "uppercase"
                  }}
                >
                  Counselling & Support
                </h2>

                <p className="sectionTitle__text"
                  style={{
                    color: "#000",
                    fontSize: '17px'
                  }}>
                  Assistance,Guidance and Support with Personalized Counselling, Customised Solution and Connection with Student Community.
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

                    <p className="heading"
                      style={{ marginRight: "0", textAlign: "start", marginLeft: "20px", textTransform: "uppercase", color: "#000", marginTop: "30px" }}
                    >
                      <b>Expert Counselling</b>
                    </p>
                    <hr />
                    <img
                      src="img/testimonials/1.png"
                      alt="image"
                      style={{ width: "60px", height: "60px", marginTop: "0" }}
                    />
                    <p style={{ color: "black" }}>Courtney Henry</p>
                    {/* <p className="name4">Expert Counselling</p> */}
                  </div>
                  <div className="flip-card-back">
                    <p className="heading"
                      style={{ marginRight: "0", textAlign: "start", marginLeft: "20px", textTransform: "uppercase" }}
                    >
                      <b>Expert Counselling</b>
                    </p>
                    <hr />
                    <p className="heading1"
                      style={{ fontSize: "17px", marginRight: "20px" }}
                    >
                      {" "}
                      “Personalized counseling from experts concerning colleges, admissions, eligibility, education loan, etc. Video Counselling also available.”
                    </p>
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
                    <p className="heading"
                      style={{ marginRight: "0", textAlign: "start", marginLeft: "20px", textTransform: "uppercase", marginTop: "30px", color: "#000" }}
                    >
                      <b>Virtual Seminar</b>
                    </p>
                    <hr />
                    <img
                      src="img/testimonials/2.png"
                      alt="image"
                      style={{ width: "60px", height: "60px", marginTop: "0" }}
                    />
                    <p style={{ color: "black" }}>Ronald Richards</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="heading"
                      style={{ marginRight: "0", textAlign: "start", marginLeft: "20px", textTransform: "uppercase" }}
                    >
                      <b>VIRTUAL SEMINAR</b>
                    </p>
                    <hr />
                    <p className="heading1"
                      style={{ fontSize: "17px", marginRight: "20px" }}
                    >
                      {" "}
                      “Attend seminars of your favourite college from anywhere. Register for Seminar / Webinar updates.”
                    </p>
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
                    <p className="heading"
                      style={{ marginRight: "0", textAlign: "start", marginLeft: "20px", textTransform: "uppercase", marginTop: "30px", color: "#000" }}
                    >
                      <b>Q and A</b>
                    </p>
                    <hr />
                    <img
                      src="img/testimonials/4.png"
                      alt="image"
                      style={{ width: "60px", height: "60px", marginTop: "0" }}
                    />
                    <p style={{ color: "black" }}>Annette Black</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="heading"
                      style={{ marginRight: "0", textAlign: "start", marginLeft: "20px", textTransform: "uppercase" }}
                    >
                      <b>Q and A</b>
                    </p>
                    <hr />
                    <p className="heading1"
                      style={{ fontSize: "17px", marginRight: "20px" }}
                    >
                      {" "}
                      “Post your question and get it answered by the experts and students themselves.”
                    </p>
                    <hr />
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
                <h2 className="sectionTitle__title text-white text-uppercase">
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
              <a href="">
                <div className="stepCard -type-1 -stepCard-hover h-100">
                  <div className="stepCard__content  h-100">
                    <div className="stepCard__icon">
                      <i className="icon-online-learning-4 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">Colleges</h4>
                    <p className="stepCard__text">
                      {" "}
                      Find your dream college based on your location, fees, specialization and more choices.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col ms-0">
              <a href="/mba-more-specialisations">
                <div className="stepCard -type-1 -stepCard-hover h-100">
                  <div className="stepCard__content  h-100">
                    <div className="stepCard__icon">
                      <i className="icon-graduation-1 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">MBA Specializations</h4>
                    <p className="stepCard__text">
                      {" "}
                      Learn and choose from 30 plus specialization options.

                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col ms-0">
              <a href="/compare-college">
                <div className="stepCard -type-1 -stepCard-hover h-100">
                  <div className="stepCard__content  h-100">
                    <div className="stepCard__icon">
                      <i className="icon-working-at-home-2 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">Compare Colleges</h4>
                    <p className="stepCard__text">
                      {" "}
                      Choose the best college. Compare them with best alternatives.

                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col ms-0">
              <a href="/college-list?m=NIRF%20MBA%20College%20Ranking">
                <div className="stepCard -type-1 -stepCard-hover h-100">
                  <div className="stepCard__content  h-100">
                    <div className="stepCard__icon">
                      <i className="icon-online-learning-4 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">Top NIRF Colleges</h4>
                    <p className="stepCard__text">
                      {" "}
                      Check the top MBA Colleges of India.

                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col ms-0">
              <a href="/college-list?city=New%20Delhi">
                <div className="stepCard -type-1 -stepCard-hover h-100">
                  <div className="stepCard__content  h-100">
                    <div className="stepCard__icon">
                      <i className="icon-graduation-1 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">TOP Delhi / NCR Colleges</h4>
                    <p className="stepCard__text">
                      {" "}
                      Check the top MBA Colleges of Delhi / NCR.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col ms-0">
              <a href="/college-list?city=Pune">
                <div className="stepCard -type-1 -stepCard-hover h-100">
                  <div className="stepCard__content  h-100">
                    <div className="stepCard__icon">
                      <i className="icon-working-at-home-2 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">Top Pune Colleges</h4>
                    <p className="stepCard__text">
                      {" "}
                      Check the top MBA Colleges of Pune.

                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col ms-0">
              <a href="/college-list?city=Mumbai">
                <div className="stepCard -type-1 -stepCard-hover h-100">
                  <div className="stepCard__content  h-100">
                    <div className="stepCard__icon">
                      <i className="icon-online-learning-4 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">Top Mumbai Colleges</h4>
                    <p className="stepCard__text">
                      {" "}
                      Check the top MBA Colleges of Mumbai.

                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col ms-0">
              <a href="/college-list?city=Bangalore">
                <div className="stepCard -type-1 -stepCard-hover h-100">
                  <div className="stepCard__content  h-100">
                    <div className="stepCard__icon">
                      <i className="icon-graduation-1 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">Top Bangalore Colleges </h4>
                    <p className="stepCard__text">
                      {" "}
                      Check the top MBA Colleges of Bangalore.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col ms-0">
              <a href="/college-list?city=Kolkata">
                <div className="stepCard -type-1 -stepCard-hover h-100">
                  <div className="stepCard__content  h-100">
                    <div className="stepCard__icon">
                      <i className="icon-working-at-home-2 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">Top Kolkata Colleges</h4>
                    <p className="stepCard__text">
                      {" "}
                      Check the top MBA Colleges of Kolkata.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="layout-pt-md layout-pb-md bg-purple-1">
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
      </section> */}


    </>
  );
};
export default Home;
