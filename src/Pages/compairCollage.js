import React from "react";

const CompairCollage = () => {


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
                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>

                  <img src="/img/upload/gallery-add.png" alt="image" />
                </div>
                <hr />
                <h5>bdsjfhb</h5>
                <p>Location</p>
                <p>B.Tech. in Civil Engineering + M.Tech. in Transportation Engineering</p>

                <button>Modify Selection</button>
                <hr />

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <p>Established Year</p>
                  <p>Established Year</p>

                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <p>Ownership</p>
                  <p>Public/Government, Autonomous</p>

                </div>

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

              </div>
            </section>

          </div>
        </main>
      </div>




    </>
  )
}

export default CompairCollage