import React, { useEffect, useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import axios, { instance } from "../api/axios";
import { STATIC_URL } from "../config/config";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { headerSearch } from "../redux/commonSlice/commonSlice";

const CompairCollage = () => {
  const { id } = useParams()

  const [collageIDs, setCollageIDs] = useState([])
  const [getCollage, setCollage] = useState({})
  const [show, setShow] = useState(false)

  const [query, setQuery] = useState("");
  const dispatch = useDispatch()

  let token = localStorage.getItem('token')
  const navigate = useNavigate()

  const [searchResults, setSearchResults] = useState([]);

  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        let responce = await instance.post(`/colleges/compare/${id}`, { ids: collageIDs })
        setCollage(responce && responce?.data?.data)

      } catch (error) {
        console.error('error>>>>>>', error);
      }
    })()
  }, [])


  useEffect(() => {
    let timeoutId;

    const fetchData = async () => {
      try {
        const response = await dispatch(headerSearch({ q: query }));
        setSearchResults(response?.payload?.data?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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




  const handleResultClick = (id) => {
    setSelectedId(id);
  };


  return (
    <>
      <section id="latest-updates" className="media-5 compare-design custom-inner-pages">
        <div className="container">

          {!show &&
            <div className="row">

              <div className="card-group">

                <div className="card">
                  {getCollage?.baseCollage?.map((item, i) => {
                    return (
                      <div key={i}>
                        <img src={STATIC_URL + "/images/" + item.college_image} alt="image" />
                        <div className="card-body">
                          <h5 style={{ color: '#1048c3' }} className="institute-name px-3">{item?.college_name}</h5>
                          <p className="location px-3">
                            {item?.location}</p>
                          <p className="course-name px-3">{item?.program}</p>

                          {/* <button style={{ color: 'blue', border: 'solid' }}>Modify Selection</button> */}
                          <hr />
                          <h6 className="text-center">Institute Information</h6>
                          <hr />
                          <div className="px-3">
                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Established Year <span>{item?.established_year}</span></p>
                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Ranking<span>{item?.ranking}</span> </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Ownership<span>Public/Government, Autonomous</span> </p>
                          </div>
                          <hr />
                          <h6 className="text-center">Course Details</h6>
                          <hr />
                          <div style={{ display: 'flex', justifyContent: 'space-between' }} className="px-3">
                            <p style={{ color: '#000' }}><strong>Total Courses <span> (11)</span></strong></p>
                          </div>

                          <div className="px-3">
                            <p>B.Tech</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>


                {/* Card Number 11111 */}

                {<div className="card">
                  <div className="add-collage mt-6 text-center">
                    <div className=" custom-border">
                      <button type="button"
                        onClick={() => setShow(!show)}
                        className="btn add-collage-button mt-4">
                        <span className="plus"> +</span>
                        <span>
                          Add College
                        </span>
                      </button>
                    </div>
                    <span className="another-addition">Or</span>
                    <button className="btn similar-button" type="button">Add Similar College</button>
                  </div>
                </div>
                }
                {/* Card Number 2222 */}
                <div className="card">
                  <div className="add-collage mt-6 text-center">
                    <div className=" custom-border">
                      <button type="button" className="btn add-collage-button mt-4">
                        <span className="plus"> +</span>
                        <span>
                          Add College
                        </span>
                      </button>
                    </div>
                    <span className="another-addition">Or</span>
                    <button className="btn similar-button" type="button">Add Similar College</button>
                  </div>
                </div>
              </div>

            </div>
          }

          {show &&
            <>
              <div className="row overlap-card">
                <div className="col m-0">
                  <div className="card">
                    <div className="card-header">
                      <p className="mb-0">College Selection</p>
                      <button type="button" onClick={() => setShow(!show)}>
                        X
                      </button>
                    </div>

                    <div className="card-body">
                      <div className="heading">
                        <p className="mb-0 text-dark"> <strong>
                          Select College
                        </strong>
                        </p>
                      </div>
                      <form>
                        <div className="form-group mb-0 position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                          <input
                            className="form-control"
                            type="search"
                            id="search"
                            placeholder="Search Colleges"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                          />
                        </div>
                        {searchResults?.map((result, index) => (
                          <div key={index}>
                            <p onClick={() => handleResultClick(result.id)}>{result.name}</p>
                          </div>
                        ))}

                      </form>

                      <div className="selected">
                        <p className="mb-0">Selected ID: {selectedId}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }

        </div>
      </section >
    </>
  )
}

export default CompairCollage