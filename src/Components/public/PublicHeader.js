import { menuJs } from "./menu";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./NavBar.css";
import { instance } from "../../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { headerSearch } from "../../redux/commonSlice/commonSlice";
import { STATIC_URL } from "../../config/config";

const PublicHeader = () => {

  const { auth } = useAuth();
  const [query, setQuery] = useState("");
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const contentRef = useRef();
  const navigate = useNavigate()

  const dispatch = useDispatch()

  // const { search, loading } = useSelector((state) => state.commonHeader)


  const [searchField, setSearchField] = useState('')
  const [searchResults, setSearchResults] = useState([]);

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


  const handleResultClick = (id) => {
    navigate(`/college-details?college=${id}`)
    // setShow(!show)
    window.location.reload();

  };




  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch(headerSearch({ q: query }))
  //   };
  //   fetchData()

  // }, [dispatch, query]);



  // useEffect(() => {
  //   if (query && search?.data?.length > 0) {
  //     navigate(`/college-list?q=${query}`)
  //   }
  // }, [search])

  return (
    <>

      <header className="header -type-1 js-header">
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
            <div className="position-relative">
              <input
                type="text"
                id="search"
                placeholder="Search Colleges, Courses, Exams, QnA, & Articles"
                // value={query}
                value={searchField}

                // onChange={(e) => setQuery(e.target.value)}
                onChange={(e) => setSearchField(e.target.value)}

                style={{
                  width: "84%",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "white",
                }}
              />


              {searchResults && 
              <ul className="header-search-result">
                {searchResults?.map((result, i) => (
                  <>
                    <li className="d-flex align-items-center text-start" onClick={() => handleResultClick(result?.id)}>
                      <img src={`${STATIC_URL} /images/${result.image}`} alt="img" className="mx-2 serachimag" />
                      <aside>
                        <h5 className="mb-0"> {result.name}</h5>
                        <span>{result.location}</span>
                      </aside>
                    </li>
                  </>
                ))}
              </ul>}
            </div>
            <div style={{ width: "100px", marginLeft: "550px", marginTop: "-40px", }}            >
              <Link to={`/college-list?q=${query.replace(" ", "+")}`}>
                <button
                  type="button"
                  name="search"
                  onClick={(e) => e.preventDefault()}
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
            {menuJs.map((mainMenu, i) => (
              <div className="dropdown" key={i}>
                <Link className="dropBtn" to={mainMenu.path}>
                  {mainMenu.name}
                </Link>
                {mainMenu.children ? (
                  <>
                    <div className="drop-content">
                      {mainMenu.children.map((item, j) => (
                        <div key={j}>
                          {item?.children ? (
                            <div className="dropdown2">
                              <Link className="dropBtn2" to={item.path}>
                                {item.name}
                              </Link>
                              <div className="drop-content2">
                                {item.children.map((item, k) => (
                                  <div key={k}>
                                    <Link to={item.path}>{item.name}</Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link to={item.path}>{item.name}</Link>
                          )}
                        </div>
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

        <div className="offset-md-10 items-center">
          <div className="col-auto" style={{ marginTop: "10px" }}>
            <div className="header-right d-flex items-center">
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

                  </>
                )}
              </div>
            </div>
          </div>
        </div>


      </header>
    </>
  );
};
export default PublicHeader;
