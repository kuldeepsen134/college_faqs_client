import BannersList from "../Components/BannersList";
import "../index.css";
import { useEffect } from "react";

const CustomPage = (props) => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  
  return (
    <>
    

      <div style={{ backgroundColor: "rgb(239, 232, 232)" }}>
        <div
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
        >
          <div
            className="custom-page"
            style={{
              display: "block",
              paddingLeft: "20px",
              paddingTop: "10px",
              width: "70%",
              paddingRight: "20px",
            }}
          >
            {props.children}
          </div>
        </div>
        
      </div>
      <div>
        <BannersList custom={true} />
      </div>
    </>
  );
};
export default CustomPage;
