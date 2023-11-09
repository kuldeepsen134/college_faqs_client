import { menuJs } from "./menu";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./NavBar.css";
import { instance } from "../../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { headerSearch } from "../../redux/commonSlice/commonSlice";

const PublicHeader = () => {

  const { auth } = useAuth();
  const [query, setQuery] = useState("");
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const contentRef = useRef();
  const handleLogout = async () => { };
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { search, loading } = useSelector((state) => state.commonHeader)


  useEffect(() => {
    let timeoutId;

    const fetchData = async () => {
      // dispatch(headerSearch({ q: query }))
    };

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(fetchData, 500);


    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [dispatch, query]);


  // useEffect(() => {
  //   console.log('search', search);
  //   if (query && search?.data?.length > 0) {
  //     navigate('/college-list')
  //   }
  // }, [navigate, search])





  // useEffect(() => {
  //   const handleClick = (event) => {
  //     console.log("ahnding", isDropdownActive);
  //     if (!isDropdownActive) return;
  //     console.log("click event", event.target.contains(contentRef.current));
  //     if (
  //       event.target.contains(contentRef.current) &&
  //       event.target !== contentRef.current
  //     ) {
  //       console.log("im here");
  //       setIsDropdownActive(false);
  //     } else {
  //       console.log("im yo");
  //     }
  //   };
  //   window.onclick = (event) => {
  //     handleClick(event);
  //   };
  // }, [contentRef, isDropdownActive]);
  return (
    <>

      <header className="header -type-1 js-header">
        <div className="" style={{}}>
          <div className="">
            <div className="">
              <div className="">
                {/* 
              <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                <Link to="/login" className="text-dark-1">
                  Log in
                </Link>
                <Link to="/sign-up" className="text-dark-1 ml-30">
                  Sign Up
                </Link>
              </div> */}

                {/* <tr>
                  <div style={{ marginTop: "60px", marginLeft: "45px" }}>
                    <div>
                      <input
                        type="text"
                        id="search"
                        placeholder="Search Colleges, Courses, Exams, QnA, &amp; Articles"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{
                          width: "80%",
                          padding: "9px",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: "100px",
                        marginLeft: "550px",
                        marginTop: "-40px",
                      }}
                    >
                      <Link to={`/college-list?q=${query.replace(" ", "+")}`}>
                        <button
                          type="button"
                          name="search"
                          onClick={(e) => e.preventDefault}
                          className="button -sm -white text-dark-1 ml-30"
                        >
                          Search
                        </button>
                      </Link>
                    </div>
                  </div>
                </tr> */}
                <div className="navbar">
                  <div className="nav-header">
                    <div className="nav-logo">
                      <Link to="/">
                        <img
                          src="./img/general/logo.jpeg"
                          width="85px"
                          height="85px"
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="s-bar">
                    <div>
                      <input
                        type="text"
                        id="search"
                        placeholder="Search Colleges, Courses, Exams, QnA, & Articles"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{
                          width: "84%",
                          padding: "10px",
                          borderRadius: "8px",
                          backgroundColor: "white",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: "100px",
                        marginLeft: "550px",
                        marginTop: "-40px",
                      }}
                    >
                      <Link to={`/college-list?q=${query.replace(" ", "+")}`}>
                        <button
                          type="button"
                          name="search"
                          // onClick={(e) => e.preventDefault()}
                          className="s1"
                        >
                          Search
                        </button>
                      </Link>
                    </div>
                  </div>

                  <input type="checkbox" id="nav-check" />
                  <div className="nav-btn">
                    <label htmlFor="nav-check">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>
                  </div>

                  <div className="nav-links">
                    {menuJs.map((mainMenu) => (
                      <div className="dropdown">
                        <Link className="dropBtn" to={mainMenu.path}>
                          {mainMenu.name}
                        </Link>
                        {mainMenu.children ? (
                          <>
                            <div className="drop-content">
                              {mainMenu.children.map((item) => (
                                <>
                                  {item?.children ? (
                                    <div className="dropdown2">
                                      <Link className="dropBtn2" to={item.path}>
                                        {item.name}
                                      </Link>
                                      <div className="drop-content2">
                                        {item.children.map((item) => (
                                          <Link to={item.path}>{item.name}</Link>
                                        ))}
                                      </div>
                                    </div>
                                  ) : (
                                    <Link to={item.path}>{item.name}</Link>
                                  )}
                                </>
                              ))}
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                    <div className="dropdown1 login-profile">
                      {auth?.token ? (
                        <Link to="/profile">
                          <img
                            className="size-50"
                            src="img/misc/user-profile.png"
                            alt="image"
                            style={{ marginLeft: "130px" }}
                          />
                        </Link>
                      ) : (
                        <>
                          <Link to="/login">Log in</Link>
                          <Link to="/sign-up">
                            <button className="signUp">Sign Up</button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {/* <tr>
                  <div>
                    <ul className="menu__nav text-white -is-active">
                      {menuJs.map((mainMenu) => (
                        <li
                          key={mainMenu.name}
                          className={
                            mainMenu.children ? "menu-item-has-children" : ""
                          }
                        >
                          {mainMenu.path ? (
                            <Link to={mainMenu.path || ""}>
                              {mainMenu.name}
                            </Link>
                          ) : (
                            <a>{mainMenu.name}</a>
                          )}
                          {mainMenu.children && (
                            <ul className="subnav">
                              {mainMenu.children?.map((children) => (
                                <li
                                  key={children.name}
                                  className={
                                    children.children
                                      ? "menu-item-has-children"
                                      : ""
                                  }
                                >
                                  {children.path ? (
                                    <Link to={children.path || ""}>
                                      {children.name}
                                    </Link>
                                  ) : (
                                    <a>{children.name}</a>
                                  )}

                                  {children.children && (
                                    <ul className="subnav">
                                      {children.children.map((subChild) => (
                                        <li className="" key={subChild.name}>
                                          {subChild.path ? (
                                            <Link to={subChild.path || ""}>
                                              {subChild.name}
                                            </Link>
                                          ) : (
                                            <a>{subChild.name}</a>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}

                       <li>
                    <a data-barba href="/">Home</a>
                                          </li> 
                    </ul>
                  </div>
                </tr> */}

                {/* <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                <div className="mobile-footer__number">
                  <div className="text-17 fw-500 text-dark-1">Call us</div>
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
                    href="/"
                    className="d-flex items-center justify-center rounded-full size-40"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>

                  <a
                    href="/"
                    className="d-flex items-center justify-center rounded-full size-40"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>

                  <a
                    href="/"
                    className="d-flex items-center justify-center rounded-full size-40"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>

                  <a
                    href="/"
                    className="d-flex items-center justify-center rounded-full size-40"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div> */}
              </div>

              {/* <div
              className="header-menu-close"
              data-el-toggle=".js-mobile-menu-toggle"
            >
              <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
                <div className="icon-close text-dark-1 text-16"></div>
              </div>
            </div> */}
            </div>

            <div className="offset-md-10 items-center">
              <div className="col-auto" style={{ marginTop: "10px" }}>
                <div className="header-right d-flex items-center">
                  {/* <div className="header-right__icons text-white d-flex items-center">
                  <div className="d-none xl:d-block ml-20">
                    <button
                      className="text-white items-center"
                      data-el-toggle=".js-mobile-menu-toggle"
                    >
                      <i className="text-11 icon icon-mobile-menu"></i>
                    </button>
                  </div>
                </div> */}

                  <div className="header-right__buttons d-flex items-center ml-30 md:d-none">
                    {auth.token ? (
                      <div
                        className="relative d-flex items-center ml-10"
                        ref={contentRef}
                      >
                        {isDropdownActive ? (
                          <div className="toggle-element js-profile-toggle -is-el-visible">
                            <div className="toggle-bottom -profile bg-white -dark-bg-dark-1 shadow-4 border-light rounded-8 mt-10">
                              <div className="px-30 py-30">
                                <div className="sidebar -dashboard">
                                  <div className="sidebar__item -is-active -dark-bg-dark-2">
                                    <a
                                      href="dashboard.html"
                                      className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white"
                                    >
                                      <i className="text-20 icon-discovery mr-15"></i>
                                      Dashboard
                                    </a>
                                  </div>

                                  <div className="sidebar__item ">
                                    <a
                                      href="#"
                                      className="d-flex items-center text-17 lh-1 fw-500 "
                                    >
                                      <i className="text-20 icon-power mr-15"></i>
                                      Logout
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <>
                        {/* <div className="relative d-flex items-center ml-10 signup">
                        <Link
                          to="/login"
                          className="button -underline text-white"
                        >
                          Log in
                        </Link>
                        <Link
                          to="/sign-up"
                          className="button -sm -white text-dark-1 ml-30"
                        >
                          Sign up
                        </Link>
                      </div> */}
                      </>
                    )}
                    {/* <Link to="/login" className="button -underline text-white">
                  Log in
                </Link>
                <Link
                  to="/sign-up"
                  className="button -sm -white text-dark-1 ml-30"
                >
                  Sign up
                </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default PublicHeader;
