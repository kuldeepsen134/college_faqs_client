import React, { useEffect, useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import axios, { instance } from "../api/axios";
import { STATIC_URL } from "../config/config";

import { useDispatch } from "react-redux";
import { headerSearch } from "../redux/commonSlice/commonSlice";

const CompairCollage = () => {
  const { id } = useParams()

  const [collageIDs, setCollageIDs] = useState()
  const [show, setShow] = useState(false)

  const [collageIDs2, setCollageIDs2] = useState()

  const [cardIndex, setCardIndex] = useState(0)


  const [getCollage, setCollage] = useState({})

  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");

  const dispatch = useDispatch()

  let token = localStorage.getItem('token')
  const navigate = useNavigate()

  const [searchResults, setSearchResults] = useState();

  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        let responce = await instance.post(`/colleges/compare/${id}`, { ids: [collageIDs, collageIDs2] })

        setCollage(responce && responce?.data?.data)

      } catch (error) {
        console.error('error>>>>>>', error);
      }
    })()
  }, [collageIDs, collageIDs2])


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
  }, [dispatch, query, query2]);

  useEffect(() => {
    let timeoutId;

    const fetchData = async () => {
      try {

        const response = await dispatch(headerSearch({ q: query2 }));

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
  }, [dispatch, query2]);




  const handleResultClick = (id) => {
    setCollageIDs(id);
    setShow(!show)
  };


  const handleResultClick2 = (id) => {
    setCollageIDs2(id);
    setShow(!show)
  };


  console.log('cardIndex<<<<<', cardIndex);
  console.log('cardIndex<<<<<', collageIDs2);


  return (
    <>
      <section id="latest-updates" className="media-5 compare-design custom-inner-pages">
        <div className="container">

          {!show &&
            <div className="row">
              <div className="card-group">
                {/* Base collage part start */}
                <div className="card" style={{ width: "33%" }}>
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
                {/* Base collage part End  */}

                {/* compaire college Card 1  start*/}
                {collageIDs == undefined && < div className="card">
                  <div className="add-collage mt-6 text-center">
                    <div className=" custom-border">
                      <button type="button"
                        onClick={() => { !token ? navigate('/login') : setShow(!show); setCardIndex(1) }}
                        className="btn add-collage-button mt-4">
                        <span className="plus"> +</span>
                        <span>
                          Add College
                        </span>
                      </button>
                    </div>
                    <span className="another-addition">Or</span>
                    <button className="btn similar-button" type="button" onClick={() => { !token ? navigate('/login') : setShow(!show); setCardIndex(1) }} >Add Similar College</button>
                  </div>
                </div>}

                {/* compaire college Card 1 details start*/}

                {getCollage?.comapareCollage?.length > 0 && collageIDs !== undefined &&
                  getCollage?.comapareCollage?.map((item, i) => {
                    return (
                      <div className="card" key={i}>
                        <img src={STATIC_URL + "/images/" + item.college_image} alt="image" />
                        <div className="card-body">
                          <h5 style={{ color: '#1048c3' }} className="institute-name px-3">{item?.college_name}</h5>
                          <p className="location px-3">
                            {item?.location}</p>
                          <p className="course-name px-3">{item?.program}</p>
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
                  })
                }

                {/* compaire college Card 1 details End*/}
                {/* compaire college Card 1  end*/}


                {/* compaire college Card 2  start*/}
                {console.log('collageIDs>>>', collageIDs)}
                {collageIDs2 == undefined &&
                  <div className="card">
                    <div className="add-collage mt-6 text-center">
                      <div className=" custom-border">
                        <button type="button"
                          className="btn add-collage-button mt-4"
                          onClick={() => { !token ? navigate('/login') : setShow(!show); setCardIndex(2) }}
                        >
                          <span className="plus"> +</span>
                          <span>
                            Add College
                          </span>
                        </button>
                      </div>
                      <span className="another-addition">Or</span>
                      <button className="btn similar-button"
                        type="button"
                        onClick={() => { !token ? navigate('/login') : setShow(!show); setCardIndex(2) }}
                      >Add Similar College</button>
                    </div>
                  </div>

                }

                {/* compaire college Card 2  end*/}

              </div>
            </div>
          }

          {/* compaire college Search box  1 start */}

          {show && cardIndex === 1 &&
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
                          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                          <input
                            className="form-control"
                            type="search"
                            id="search"
                            placeholder="Search Colleges"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                          />
                        </div>
                        {searchResults?.map((result, i) => (
                          <div className="collageName ml-4" key={i}>
                            <p className=" text-black " onClick={() => handleResultClick(result.id)} style={{ fontWeight: 'bold' }}>{result.name}</p>
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
          {/* compaire college Search box  1 end */}





          {/* compaire college Search box  2 start */}
          {show && cardIndex === 2 &&
            <>
              <div className="row overlap-card">
                <div className="col m-0">
                  <div className="card">
                    <div className="card-header">
                      <p className="mb-0">College Selection card2</p>

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
                          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                          <input
                            className="form-control"
                            type="search"
                            id="search"
                            placeholder="Search Colleges"
                            value={query2}
                            onChange={(e) => setQuery2(e.target.value)}
                          />
                        </div>
                        {searchResults?.map((result, index) => (
                          <div className="collageName ml-4" key={index}>
                            <p className=" text-black " onClick={() => handleResultClick2(result.id)} style={{ fontWeight: 'bold' }}>{result.name}</p>
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
          {/* compaire college Search box  2 end */}


        </div>
      </section >
    </>
  )
}

export default CompairCollage