import React, { useEffect, useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import axios, { instance } from "../api/axios";
import { STATIC_URL } from "../config/config";
import useAuth from "../hooks/useAuth";

const CompairCollage = () => {
  const { id } = useParams()

  const [collageIDs, setCollageIDs] = useState([])

  const [getCollage, setCollage] = useState({})

  const [show, setShow] = useState(false)

  const { auth } = useAuth();

  let token = localStorage.getItem('token')
  const navigate = useNavigate()



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






  return (
    <>
      <section id="latest-updates" className="media-5 compare-design custom-inner-pages position-relative">
        <div className="container">

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

          {show &&
           <div className="overlap-card">
            <button type="button" onClick={() => setShow(!show)}>
              X
            </button>

            <input type="search"
              placeholder="Collage name here"
            >

            </input>
          </div>

          }

        </div>
      </section>
    </>
  )
}

export default CompairCollage