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

        let responce = await instance.post(`/colleges/compare/${id}`, { ids: [85] })
        setCollage(responce && responce?.data?.data)

      } catch (error) {
        console.error('error>>>>>>', error);
      }
    })()
  }, [])

  return (
    <>
      <section id="latest-updates" className="media-5">
        <div className="row">
          <div class="col-4  mb-3 py-md-2   flakh rounded" style={{ marginLeft: '180px', marginTop: '100px' }}>
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

                  <button style={{ color: 'blue', border: 'solid' }}>Modify Selection</button>
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

          <div class="col-3  mb-3 py-md-2 flakh rounded" style={{ marginLeft: '', marginTop: '100px' }}>
            <div className="add-collage mt-6 text-center" style={{ border: "dotted", height: "100px" }}>
              <span className="">+</span>
              <p className="">Add to callage</p>
            </div>
          </div>

          <div class="col-3  mb-3 py-md-2  flakh rounded" style={{ marginLeft: '', marginTop: '100px' }}>
            <div className="add-collage mt-6 text-center" style={{ border: "dotted", height: "100px" }}>
              <span className="">+</span>
              <p className="">Add to callage</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CompairCollage