import { Link } from "react-router-dom";
import "../assets/css/main.css";
import { STATIC_URL } from "../config/config";
import useAuth from "../hooks/useAuth";

const CollegeListItem = ({ item }) => {
  const { auth } = useAuth();
  return (
    <div className="col-lg-6 my-1 my-md-0 pt-2 pb-3 py-md-3 border-bottom our-rmi media-7">
      <div id="school_1" className="school d-flex">
        <div className="school-list-item__logo logo-wrapper d-flex align-items-center mr-2 mr-md-3 border rounded media-img">
          <Link to={`/college-details?college=${item.id}`}>
            <img
              src={STATIC_URL + "/images/" + item.image}
              width="186"
              height="16"
              alt="Southern New Hampshire University"
              className="logo p-2"
              style={{ alignItems: "center", margin: "10px 15px 10px 15px" }}
            />
          </Link>
        </div>{" "}
        <div className="d-flex w-100 school-list-item__main">
          <div className="w-100">
            <div className="media-name">
              <Link
                to={`/college-details?college=${item.id}`}
                className="text-dark"
              >
                <h3 className="mb-0 h5">{item.name}</h3>
              </Link>{" "}
              <p className="d-flex align-items-center mb-0 text-muted">
                <span>{item.location}</span>
              </p>
            </div>
          </div>{" "}
          <div className="school-actions ml-2 school-list-item__actions media-btn">
            <div className="position-relative ">
              <Link
                style={{ marginTop: "50px" }}
                className="btn btn-sm btn-rmi d-flex align-items-center justify-content-center px-1 px-md-1 rmi_10000139"
                to="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-text ">Compare</span>{" "}
              </Link>{" "}
              <br />
              <a
                href={
                  item.brochure && auth.token
                    ? STATIC_URL + "/files/" + item.brochure
                    : "/login"
                }
                onClick={(e) => e.preventDefault()}
                className="btn btn-sm btn-rmi d-flex align-items-center justify-content-center px-1 px-md-2 rmi_10000139"
              >
                <span className="btn-text">Brochure</span>{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="media-name2 school-list-item__stats stats row no-gutters d-flex align-items-start position-relative mt-1 mt-md-1">
        <div className="col-5 col-md-4">
          <strong className="d-block" style={{ color: "rgb(52, 53, 64)" }}>
            Total Fees:
          </strong>{" "}
          <div className="line-height-adj">
            {item?.total_fees ? "$" + item.total_fees : ""}
            {/* <del className="d-inline text-muted">$15,000</del>{" "}
            <span className="ml-1" style={{ color: "rgb(72, 155, 203)" }}>
              <span className="mr-1">$7,006</span>{" "}
              <span className="d-inline-block d-md-none">after fin. aid</span>{" "}
              <span className="d-none d-md-inline-block">
                after financial aid
              </span>
            </span> */}
          </div>
        </div>{" "}
        <div className="col-2">
          <strong className="d-block" style={{ color: "rgb(52, 53, 64)" }}>
            Size:
          </strong>{" "}
          <span className="d-inline-block text-muted">{item.size}</span>
        </div>{" "}
        <div className="col-5 col-md-3 accept">
          <strong className="d-block" style={{ color: " rgb(52, 53, 64)" }}>
            Acceptance Rate:
          </strong>{" "}
          <span
            className="d-inline-block text-muted"
            style={{ marginLeft: "30px" }}
          >
            {item.acceptence_rate}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollegeListItem;
