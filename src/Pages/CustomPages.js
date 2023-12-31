import BannersList from "../Components/BannersList";
import "../index.css";
import { useEffect } from "react";

const CustomPage = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <>
      <section className="hero-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">

              <img
                src="./img/pngtree-countdown-to-the-college-entrance-examination-image_790187.jpg"
                alt="Hero banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-inner-pages">
        <div className="container">
          <div className="row">

            {/* <div
          style={{
            width: "80%",
            display: "block",
            position: "relative",
            right: "100px",
            top: "115px",
            marginBottom: "130px",

            // margin: "0 auto",
            marginLeft: "270px",
          }}
        > */}
            <div
              className="col-12 col-sm-12 col-md-8 custom-page"
            // style={{
            //   display: "block",
            //   paddingLeft: "20px",
            //   paddingTop: "10px",
            //   width: "70%",
            //   paddingRight: "20px",
            // }}
            >
              {props.children}
            </div>
            <div className="col-12 col-sm-12 col-md-4">
               <BannersList custom={true} />
            </div>
          </div>
        </div>
      </section>

      {/* </div> */}

    </>
  );
};
export default CustomPage;
