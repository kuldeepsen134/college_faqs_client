import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div
      style={{
        height: "1000px",
        width: "100%",
        color: "black",
      }}
    >
      <header
        data-anim="fade"
        data-add-bg=""
        className="header -base js-header"
      >
        <div className="header__container py-10">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="header-left">
                <div className="header__logo ">
                  <a data-barba href="index.html">
                    <img src="img/general/logo.svg" alt="logo" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="header-right d-flex items-center">
                <div className="header-menu js-mobile-menu-toggle ">
                  <div className="header-menu__content">
                    <div className="mobile-bg js-mobile-bg"></div>

                    <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                      <a href="/login" className="text-dark-1">
                        Log in
                      </a>
                      <Link to="/sign-up" className="text-dark-1 ml-30">
                        Sign Up
                      </Link>
                    </div>

                    <div className="menu js-navList">
                      <ul className="menu__nav text-dark-1 -is-active">
                        <li className="menu-item-has-children">
                          <a data-barba href="#">
                            Home{" "}
                            <i className="icon-chevron-right text-13 ml-10"></i>
                          </a>

                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                Home
                              </a>
                            </li>

                            <li>
                              <a href="index.html">Home 1</a>
                            </li>

                            <li>
                              <a href="home-2.html">Home 2</a>
                            </li>

                            <li>
                              <a href="home-3.html">Home 3</a>
                            </li>

                            <li>
                              <a href="home-4.html">Home 4</a>
                            </li>

                            <li>
                              <a href="home-5.html">Home 5</a>
                            </li>

                            <li>
                              <a href="home-6.html">Home 6</a>
                            </li>

                            <li>
                              <a href="home-7.html">Home 7</a>
                            </li>

                            <li>
                              <a href="home-8.html">Home 8</a>
                            </li>

                            <li>
                              <a href="home-9.html">Home 9</a>
                            </li>

                            <li>
                              <a href="home-10.html">Home 10</a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children -has-mega-menu">
                          <a data-barba href="#">
                            Courses{" "}
                            <i className="icon-chevron-right text-13 ml-10"></i>
                          </a>

                          <div className="mega xl:d-none">
                            <div className="mega__menu">
                              <div className="row x-gap-40">
                                <div className="col">
                                  <h4 className="text-17 fw-500 mb-20">
                                    Course List Layouts
                                  </h4>

                                  <ul className="mega__list">
                                    <li>
                                      <a data-barba href="courses-list-1.html">
                                        Course List v1
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="courses-list-2.html">
                                        Course List v2
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="courses-list-3.html">
                                        Course List v3
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="courses-list-4.html">
                                        Course List v4
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="courses-list-5.html">
                                        Course List v5
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="courses-list-6.html">
                                        Course List v6
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="courses-list-7.html">
                                        Course List v7
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="courses-list-8.html">
                                        Course List v8
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="courses-list-9.html">
                                        Course List v9
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h4 className="text-17 fw-500 mb-20">
                                    Course Single Layouts
                                  </h4>

                                  <ul className="mega__list">
                                    <li>
                                      <a
                                        data-barba
                                        href="courses-single-1.html"
                                      >
                                        Course Single v1
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="courses-single-2.html"
                                      >
                                        Course Single v2
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="courses-single-3.html"
                                      >
                                        Course Single v3
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="courses-single-4.html"
                                      >
                                        Course Single v4
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="courses-single-5.html"
                                      >
                                        Course Single v5
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="courses-single-6.html"
                                      >
                                        Course Single v6
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h4 className="text-17 fw-500 mb-20">
                                    About Courses
                                  </h4>

                                  <ul className="mega__list">
                                    <li>
                                      <a data-barba href="lesson-single-1.html">
                                        Lesson Page v1
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="lesson-single-2.html">
                                        Lesson Page v2
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="instructors-list-1.html"
                                      >
                                        Instructors List v1
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="instructors-list-2.html"
                                      >
                                        Instructors List v2
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="instructors-single.html"
                                      >
                                        Instructors Single
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="instructors-become.html"
                                      >
                                        Become an Instructor
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h4 className="text-17 fw-500 mb-20">
                                    Dashboard Pages
                                  </h4>

                                  <ul className="mega__list">
                                    <li>
                                      <a data-barba href="dashboard.html">
                                        Dashboard
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-courses.html">
                                        My Courses
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-bookmarks.html">
                                        Bookmarks
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-listing.html">
                                        Add Listing
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-reviews.html">
                                        Reviews
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-settings.html">
                                        Settings
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="dshb-administration.html"
                                      >
                                        Administration
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-assignment.html">
                                        Assignment
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-calendar.html">
                                        Calendar
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-dashboard.html">
                                        Single Dashboard
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-dictionary.html">
                                        Dictionary
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-forums.html">
                                        Forums
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-grades.html">
                                        Grades
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-messages.html">
                                        Messages
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        data-barba
                                        href="dshb-participants.html"
                                      >
                                        Participants
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-quiz.html">
                                        Quiz
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="dshb-survey.html">
                                        Survey
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col">
                                  <h4 className="text-17 fw-500 mb-20">
                                    Popular Courses
                                  </h4>

                                  <ul className="mega__list">
                                    <li>
                                      <a data-barba href="#">
                                        Web Developer
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="#">
                                        Mobile Developer
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="#">
                                        Digital Marketing
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="#">
                                        Development
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="#">
                                        Finance &amp; Accounting
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="#">
                                        Design
                                      </a>
                                    </li>

                                    <li>
                                      <a data-barba href="#">
                                        View All Courses
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="mega-banner bg-purple-1 ml-40">
                                <div className="text-24 lh-15 text-white fw-700">
                                  Join more than
                                  <br />
                                  <span className="text-green-1">
                                    8 million learners
                                  </span>
                                  worldwide
                                </div>
                                <a
                                  href="#"
                                  className="button -md -green-1 text-dark-1 fw-500 col-12"
                                >
                                  Start Learning For Free
                                </a>
                              </div>
                            </div>
                          </div>

                          <ul className="subnav d-none xl:d-block">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                Courses
                              </a>
                            </li>

                            <li className="menu-item-has-children">
                              <a href="#">
                                Course List Layouts
                                <div className="icon-chevron-right text-11"></div>
                              </a>

                              <ul className="subnav">
                                <li className="menu__backButton js-nav-list-back">
                                  <a href="#">
                                    <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                    Course List Layouts
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-list-1.html">
                                    Course List v1
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-list-2.html">
                                    Course List v2
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-list-3.html">
                                    Course List v3
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-list-4.html">
                                    Course List v4
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-list-5.html">
                                    Course List v5
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-list-6.html">
                                    Course List v6
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-list-7.html">
                                    Course List v7
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-list-8.html">
                                    Course List v8
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-list-all.html">
                                    Course List All
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a href="#">
                                Course Single Layouts
                                <div className="icon-chevron-right text-11"></div>
                              </a>

                              <ul className="subnav">
                                <li className="menu__backButton js-nav-list-back">
                                  <a href="#">
                                    <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                    Course Single Layouts
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-single-1.html">
                                    Course Single v1
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-single-2.html">
                                    Course Single v2
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-single-3.html">
                                    Course Single v3
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-single-4.html">
                                    Course Single v4
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-single-5.html">
                                    Course Single v5
                                  </a>
                                </li>

                                <li>
                                  <a href="courses-single-6.html">
                                    Course Single v6
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a href="#">
                                About Courses
                                <div className="icon-chevron-right text-11"></div>
                              </a>

                              <ul className="subnav">
                                <li className="menu__backButton js-nav-list-back">
                                  <a href="#">
                                    <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                    About Courses
                                  </a>
                                </li>

                                <li>
                                  <a href="lesson-single-1.html">
                                    Lesson Page v1
                                  </a>
                                </li>

                                <li>
                                  <a href="lesson-single-2.html">
                                    Lesson Page v2
                                  </a>
                                </li>

                                <li>
                                  <a href="instructors-list-1.html">
                                    Instructors List v1
                                  </a>
                                </li>

                                <li>
                                  <a href="instructors-list-2.html">
                                    Instructors List v2
                                  </a>
                                </li>

                                <li>
                                  <a href="instructors-single.html">
                                    Instructors Single
                                  </a>
                                </li>

                                <li>
                                  <a href="instructors-become.html">
                                    Become an Instructor
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a href="#">
                                Dashboard Pages
                                <div className="icon-chevron-right text-11"></div>
                              </a>

                              <ul className="subnav">
                                <li className="menu__backButton js-nav-list-back">
                                  <a href="#">
                                    <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                    Dashboard Pages
                                  </a>
                                </li>

                                <li>
                                  <a href="dashboard.html">Dashboard</a>
                                </li>

                                <li>
                                  <a href="dshb-courses.html">My Courses</a>
                                </li>

                                <li>
                                  <a href="dshb-bookmarks.html">Bookmarks</a>
                                </li>

                                <li>
                                  <a href="dshb-listing.html">Add Listing</a>
                                </li>

                                <li>
                                  <a href="dshb-reviews.html">Reviews</a>
                                </li>

                                <li>
                                  <a href="dshb-settings.html">Settings</a>
                                </li>

                                <li>
                                  <a href="dshb-administration.html">
                                    Administration
                                  </a>
                                </li>

                                <li>
                                  <a href="dshb-assignment.html">Assignment</a>
                                </li>

                                <li>
                                  <a href="dshb-calendar.html">Calendar</a>
                                </li>

                                <li>
                                  <a href="dshb-dashboard.html">
                                    Single Dashboard
                                  </a>
                                </li>

                                <li>
                                  <a href="dshb-dictionary.html">Dictionary</a>
                                </li>

                                <li>
                                  <a href="dshb-forums.html">Forums</a>
                                </li>

                                <li>
                                  <a href="dshb-grades.html">Grades</a>
                                </li>

                                <li>
                                  <a href="dshb-messages.html">Messages</a>
                                </li>

                                <li>
                                  <a href="dshb-participants.html">
                                    Participants
                                  </a>
                                </li>

                                <li>
                                  <a href="dshb-quiz.html">Quiz</a>
                                </li>

                                <li>
                                  <a href="dshb-survey.html">Survey</a>
                                </li>
                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a href="#">
                                Popular Courses
                                <div className="icon-chevron-right text-11"></div>
                              </a>

                              <ul className="subnav">
                                <li className="menu__backButton js-nav-list-back">
                                  <a href="#">
                                    <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                    Popular Courses
                                  </a>
                                </li>

                                <li>
                                  <a href="#">Web Developer</a>
                                </li>

                                <li>
                                  <a href="#">Mobile Developer</a>
                                </li>

                                <li>
                                  <a href="#">Digital Marketing</a>
                                </li>

                                <li>
                                  <a href="#">Development</a>
                                </li>

                                <li>
                                  <a href="#">Finance &amp; Accounting</a>
                                </li>

                                <li>
                                  <a href="#">Design</a>
                                </li>

                                <li>
                                  <a href="#">View All Courses</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a data-barba href="#">
                            Events{" "}
                            <i className="icon-chevron-right text-13 ml-10"></i>
                          </a>
                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                Events
                              </a>
                            </li>

                            <li>
                              <a href="event-list-1.html">Event List 1</a>
                            </li>

                            <li>
                              <a href="event-list-2.html">Event List 2</a>
                            </li>

                            <li>
                              <a href="event-single.html">Event Single</a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a data-barba href="#">
                            Blog{" "}
                            <i className="icon-chevron-right text-13 ml-10"></i>
                          </a>
                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                Blog
                              </a>
                            </li>

                            <li>
                              <a href="blog-list-1.html">Blog List 1</a>
                            </li>

                            <li>
                              <a href="blog-list-2.html">Blog List 2</a>
                            </li>

                            <li>
                              <a href="blog-list-3.html">Blog List 3</a>
                            </li>

                            <li>
                              <a href="blog-single.html">Blog Single</a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a data-barba href="#">
                            Pages{" "}
                            <i className="icon-chevron-right text-13 ml-10"></i>
                          </a>

                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                Pages
                              </a>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">
                                About Us
                                <div className="icon-chevron-right text-11"></div>
                              </a>

                              <ul className="subnav">
                                <li className="menu__backButton js-nav-list-back">
                                  <a href="#">
                                    <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                    About Us
                                  </a>
                                </li>

                                <li>
                                  <a href="about-1.html">About 1</a>
                                </li>

                                <li>
                                  <a href="about-2.html">About 2</a>
                                </li>
                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a href="#">
                                Contact
                                <div className="icon-chevron-right text-11"></div>
                              </a>
                              <ul className="subnav">
                                <li className="menu__backButton js-nav-list-back">
                                  <a href="#">
                                    <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                    Contact
                                  </a>
                                </li>

                                <li>
                                  <a href="contact-1.html">Contact 1</a>
                                </li>

                                <li>
                                  <a href="contact-2.html">Contact 2</a>
                                </li>
                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a href="#">
                                Shop
                                <div className="icon-chevron-right text-11"></div>
                              </a>
                              <ul className="subnav">
                                <li className="menu__backButton js-nav-list-back">
                                  <a href="#">
                                    <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                                    Shop
                                  </a>
                                </li>

                                <li>
                                  <a href="shop-cart.html">Shop Cart</a>
                                </li>

                                <li>
                                  <a href="shop-checkout.html">Shop Checkout</a>
                                </li>

                                <li>
                                  <a href="shop-list.html">Shop List</a>
                                </li>

                                <li>
                                  <a href="shop-order.html">Shop Order</a>
                                </li>

                                <li>
                                  <a href="shop-single.html">Shop Single</a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a href="pricing.html">Membership plans</a>
                            </li>

                            <li>
                              <a href="404.html">404 Page</a>
                            </li>

                            <li>
                              <a href="terms.html">FAQs</a>
                            </li>

                            <li>
                              <a href="help-center.html">Help Center</a>
                            </li>

                            <li>
                              <a href="login.html">Login</a>
                            </li>

                            <li>
                              <a href="signup.html">Register</a>
                            </li>

                            <li>
                              <a href="ui-elements.html">UI Elements</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a data-barba href="contact-1.html">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                      <div className="mobile-footer__number">
                        <div className="text-17 fw-500 text-dark-1">
                          Call us
                        </div>
                        <div className="text-17 fw-500 text-purple-1">
                          800 388 80 90
                        </div>
                      </div>

                      <div className="lh-2 mt-10">
                        <div>
                          329 Queensberry Street,
                          <br /> North Melbourne VIC 3051, Australia.
                        </div>
                        <div>hi@educrat.com</div>
                      </div>

                      <div className="mobile-socials mt-10">
                        <a
                          href="#"
                          className="d-flex items-center justify-center rounded-full size-40"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>

                        <a
                          href="#"
                          className="d-flex items-center justify-center rounded-full size-40"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>

                        <a
                          href="#"
                          className="d-flex items-center justify-center rounded-full size-40"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>

                        <a
                          href="#"
                          className="d-flex items-center justify-center rounded-full size-40"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="header-menu-close"
                    data-el-toggle=".js-mobile-menu-toggle"
                  >
                    <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
                      <div className="icon-close text-dark-1 text-16"></div>
                    </div>
                  </div>

                  <div className="header-menu-bg"></div>
                </div>

                <div className="mr-30">
                  <div className="d-none xl:d-block ml-20">
                    <button
                      className="text-dark-1 items-center"
                      data-el-toggle=".js-mobile-menu-toggle"
                    >
                      <i className="text-11 icon icon-mobile-menu"></i>
                    </button>
                  </div>
                </div>

                <div className="header-right__buttons md:d-none">
                  <Link
                    to="/sign-up"
                    className="button -sm -rounded -dark-1 text-white"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="content-wrapper  js-content-wrapper">
        <section className="form-page js-mouse-move-container">
          <div className="form-page__img bg-dark-1">
            <div className="form-page-composition">
              <div className="-bg">
                {/* <img
                  data-move="30"
                  className="js-mouse-move"
                  src="img/general/1.png"
                  alt="bg"
                /> */}
              </div>
              <div className="-el-1">
                <img
                  data-move="20"
                  className="js-mouse-move"
                  src="img/home-9/hero/bg.png"
                  alt="image"
                />
              </div>
              <div className="-el-2">
                <img
                  data-move="40"
                  className="js-mouse-move"
                  src="img/general/1.png"
                  alt="icon"
                />
              </div>
              <div className="-el-3">
                <img
                  data-move="40"
                  className="js-mouse-move"
                  src="img/general/2.png"
                  alt="icon"
                />
              </div>
              <div className="-el-4">
                <img
                  data-move="40"
                  className="js-mouse-move"
                  src="img/general/3.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>

          <div className="form-page__content lg:py-50">
            <div className="container">
              <div className="row justify-center items-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
                    <h3 className="text-30 lh-13">Login</h3>
                    <p className="mt-10">
                      Don't have an account yet?{" "}
                      <Link to="/sign-up" className="text-purple-1">
                        Sign up for free
                      </Link>
                    </p>

                    <form
                      className="contact-form respondForm__form row y-gap-20 pt-30"
                      action="#"
                    >
                      <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Username Or Email
                        </label>
                        <input type="text" name="title" placeholder="Name" />
                      </div>
                      <div className="col-12">
                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Password
                        </label>
                        <input
                          type="password"
                          name="title"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                        >
                          Login
                        </button>
                      </div>
                    </form>

                    <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                      Or sign in using
                    </div>

                    <div className="d-flex x-gap-20 items-center justify-between pt-20">
                      <div>
                        <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                          Log In via Facebook
                        </button>
                      </div>
                      <div>
                        <button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
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
      </div>
    </div>
  );
};

export default Login;
