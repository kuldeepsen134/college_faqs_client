import React, { useEffect, useState } from "react";

// import { useRouter } from 'next/router';
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { instance } from "../api/axios";
import { STATIC_URL } from "../config/config";

const CompairCollage = () => {
  const [urlSearchParams] = useSearchParams();
  const { id } = useParams()

  const [getCollage, setCollage] = useState({})


  useEffect(() => {
    (async () => {
      try {

        let responce = await instance.post(`/colleges/compare/${82}`, { ids: [81] })
        setCollage(responce && responce?.data?.data)

      } catch (error) {
        console.error('error>>>>>>', error);
      }
    })()
  }, [])

  return (
    <>
      <div>
        <main id="content" role="main">
          <div className="col-lg-9 p-0 profile-content media-4" style={{
            width: '50%'
          }}>
            <section id="latest-updates" className="media-5">
              <div
                className=" mb-3 py-md-2 px-3 px-md-5 flakh rounded"
                style={{
                  marginLeft: '200px',
                  marginTop: '100px'

                }}
              >
                {getCollage?.baseCollage?.map((item, i) => {
                  return (<>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <img src={STATIC_URL + "/images/" + item.college_image} alt="image" />

                    </div>
                    <hr />
                    <h5 style={{ color: 'blue' }}>{item?.college_name}</h5>
                    <p>{item?.location}</p>
                    <p>{item?.program}</p>

                    <button style={{ color: 'blue', border: 'solid' }}>Modify Selection</button>
                    <hr />
                    <p>Institute Information</p>
                    <hr />
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <p>Established Year <span>{item?.established_year}</span></p>
                      <p>Ranking<span>{item?.ranking}</span> </p>
                    </div>
                    <hr />
                    <p>Course Details</p>
                    <hr />
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <p>Total Courses (11)</p>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <p>B.Tech</p>
                      <p>Public/Government, Autonomous</p>

                    </div>
                  </>
                  )
                })}
              </div>
            </section>

          </div>
        </main>
      </div>




    </>
  )
}

export default CompairCollage