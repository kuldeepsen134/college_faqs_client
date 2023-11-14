import React, { useEffect, useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import { instance } from "../api/axios";
import { STATIC_URL } from "../config/config";
import useAuth from "../hooks/useAuth";


const CompairCollage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const { id } = useParams()

  const [getCollages, setCollages] = useState({})
  const [collageIDs, setCollageIDs] = useState([])
  const [getCollage, setCollage] = useState({})
  const [showList, setShowList] = useState(false)
  const [showCollageData, setshowCollageData] = useState(false)

  const [selectedCollage, setselectedCollage] = useState(false)

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
  }, [collageIDs, id])


  const handleClick1 = async () => {
    if (!token) {
      navigate('/login')
    }
    try {
      const response = await instance.get("/get-all-collages", { headers: { authorization: "Bearer " + auth.token } });
      setCollages(response?.data?.data)

    } catch (error) {
      console.log(error);

    };

    setShowList(!showList)
  }

  const handleClick2 = async () => {
    if (!token) {
      navigate('/login')
    }
    try {
      const response = await instance.get("/get-all-collages", { headers: { authorization: "Bearer " + auth.token } });
      setCollages(response?.data?.data)

    } catch (error) {
      console.log(error);

    };

    setShowList(!showList)
  }


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setshowCollageData(!showCollageData)
  };

  const selectOption = (option, id) => {
    setCollageIDs([option])
    setSelectedOption(option);
    toggleDropdown();

  };

  return (
    <>
      <section id="latest-updates" className="media-5">
        <div className="row">
          <div className="col-4  mb-3 py-md-2   flakh rounded" style={{ marginLeft: '180px', marginTop: '100px' }}>
            {getCollage?.baseCollage?.map((item, i) => {
              return (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={STATIC_URL + "/images/" + item.college_image} alt="image" />
                  </div>
                  <hr />
                  <h5 style={{ color: 'blue' }}>{item?.college_name}</h5>
                  <p>{item?.location}</p>
                  <p>{item?.program}</p>

                  {/* <button style={{ color: 'blue', border: 'solid' }}>Modify Selection</button> */}
                  <hr />
                  <p>Institute Information</p>
                  <hr />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>Established Year <span>{item?.established_year}</span></p>
                    <p>Ranking<span>{item?.ranking}</span> </p>
                  </div>
                  <hr />
                  <p>Course Details</p>
                  <hr />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>Total Courses (11)</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>B.Tech</p>
                    <p>Public/Government, Autonomous</p>
                  </div>
                </>
              )
            })}
          </div>


          <div className="col-3  mb-3 py-md-2  flakh rounded" style={{ marginLeft: '', marginTop: '100px' }}>
            {!showList ?
              <div className="add-collage mt-6 text-center" style={{ border: "dotted", height: "200px" }}>
                <button type="button" className="add-collage-button mt-4" onClick={handleClick2}>+</button>
                <p className="">Add to callage</p>
                <span className="">Or</span>
                <p className="" style={{ color: '#152edd' }}>Add to callage</p>
              </div>
              :
              <div className="custom-dropdown">
                <div className="dropdown-trigger border" onClick={toggleDropdown}>
                  {selectedOption}
                </div>

                {isOpen && (
                  <div className="dropdown-content">
                    {getCollages?.map((collage, i) => {
                      return (
                        <div className="dropdown-option" onClick={() => selectOption(collage.id)}>
                          {collage.college_name}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            }

            {showCollageData &&
              (<> {getCollage?.comapareCollage?.map((item, i) => {
                return (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={STATIC_URL + "/images/" + item.college_image} alt="image" />
                    </div>
                    <hr />
                    <h5 style={{ color: 'blue' }}>{item?.college_name}</h5>
                    <p>{item?.location}</p>
                    <p>{item?.program}</p>

                    {/* <button style={{ color: 'blue', border: 'solid' }}>Modify Selection</button> */}
                    <hr />
                    <p>Institute Information</p>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>Established Year <span>{item?.established_year}</span></p>
                      <p>Ranking<span>{item?.ranking}</span> </p>
                    </div>
                    <hr />
                    <p>Course Details</p>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>Total Courses (11)</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>B.Tech</p>
                      <p>Public/Government, Autonomous</p>
                    </div>
                  </>
                )
              })}
              </>
              )}
          </div>

          <div className="col-3  mb-3 py-md-2  flakh rounded" style={{ marginLeft: '', marginTop: '100px' }}>
            {!showList ?
              <div className="add-collage mt-6 text-center" style={{ border: "dotted", height: "200px" }}>
                <button type="button" className="add-collage-button mt-4" onClick={handleClick1}>+</button>
                <p className="">Add to callage</p>
                <span className="">Or</span>
                <p className="" style={{ color: '#152edd' }}>Add to callage</p>
              </div>
              :
              <div className="custom-dropdown">
                <div className="dropdown-trigger border" onClick={toggleDropdown}>
                  {selectedOption}
                </div>

                {isOpen && (
                  <div className="dropdown-content">
                    {getCollages?.map((collage, i) => {
                      return (
                        <div className="dropdown-option" onClick={() => selectOption( collage.id)
                    }>
                    { collage.college_name }
                        </div>
                )
                })}
              </div>
                )}
          </div>
            }

          {showCollageData &&
            (<> {getCollage?.comapareCollage?.map((item, i) => {
              return (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={STATIC_URL + "/images/" + item.college_image} alt="image" />
                  </div>
                  <hr />
                  <h5 style={{ color: 'blue' }}>{item?.college_name}</h5>
                  <p>{item?.location}</p>
                  <p>{item?.program}</p>

                  {/* <button style={{ color: 'blue', border: 'solid' }}>Modify Selection</button> */}
                  <hr />
                  <p>Institute Information</p>
                  <hr />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>Established Year <span>{item?.established_year}</span></p>
                    <p>Ranking<span>{item?.ranking}</span> </p>
                  </div>
                  <hr />
                  <p>Course Details</p>
                  <hr />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>Total Courses (11)</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>B.Tech</p>
                    <p>Public/Government, Autonomous</p>
                  </div>
                </>
              )
            })}
            </>
            )}




        </div>
      </div>
    </section >
    </>
  )
}

export default CompairCollage