import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "../api/axios";
import CollegeListItem from "../Components/CollegeListItem";
import ReactPaginate from "react-paginate";
import "../assets/css/main.css";

import { useSelector } from "react-redux";


const CollegeList = ({ itemsPerPage = 6 }) => {

  let token = localStorage.getItem('token')
  const [urlSearchParams] = useSearchParams();

  const page = urlSearchParams.get("q") || null;

  const m = urlSearchParams.get("m") || null;

  var url = "/college-list";

  const { search, loading } = useSelector((state) => state.commonHeader)

  var menu_page = urlSearchParams.get("state") || null;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  let city = ''

  if (menu_page == null) {
    city = urlSearchParams.get("city") || null;
    console.log('city>>>>>', city);
  }

  const [itemOffset, setItemOffset] = useState(0);
  const [locations, setLocations] = useState(["Indore", "Maharashtra", "Gujrat", "Mumbai", "Noida",]);
  const [locationFilter, setLocationFilter] = useState("");

  const [fees, setFees] = useState(["1 - 2 Lakh", "2 - 3 Lakh", "3 - 5 Lakh", "> 5 Lakh",]);

  const [feesFilter, setFeesFilter] = useState("");
  const [data, setData] = useState([]);
  const [currentItems, setCurrentItem] = useState([])

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = search?.data?.length > 0 ? search?.data : data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);


  useEffect(() => {
    setCurrentItem(data?.slice(itemOffset, endOffset))
  }, [data, endOffset, itemOffset])


  useEffect(() => {
    if (search?.data?.length > 0) {
      setCurrentItem(search?.data)
    } else {
      setCurrentItem([])
    }
  }, [search])



  useEffect(() => {
    if (!page && !menu_page && !locationFilter && !feesFilter) {
      console.log("returning");
    }
    let isMounted = true;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        if (menu_page === null) {
          if (city) {
            const response = await axios.post('/college-list/fromCity', {
              q: page?.toLowerCase(),
              m: city,
              filter: { location: locationFilter, fees: feesFilter },
            }, {
              headers: headers,
            });

            setData(response.data.success ? response.data.data : []);
          }
          else {
            let newURL = '';
            if (m === 'Top Government MBA Colleges') {
              newURL = '/college-list/top-collages/government';
            } else if (m === 'Top Private MBA Colleges') {
              newURL = '/college-list/top-collages/private';
            } else if (m === 'NIRF MBA College Ranking') {
              newURL = '/college-list/top-collages/NIRF';
            }

            const response = await axios.get(newURL, {
              q: page?.toLowerCase(),
              m: menu_page,
              filter: { location: locationFilter, fees: feesFilter },
            }, {
              headers: headers,
            });

            setData(response.data.success ? response.data.data : []);
          }
        }
        else {
          const response = await axios.post(url, {
            q: page?.toLowerCase(),
            m: menu_page || m,
            filter: { location: locationFilter, fees: feesFilter },
          }, {
            headers: headers,
          });

          setData(response.data.success ? response.data.data : []);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    window.scrollTo(0, 0);

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [m, city]);



  useEffect(() => {
    const fun = async () => {

      if (menu_page) {
        const newURL = url ? url : '/college-list'
        const response = await axios.post(newURL, { m: menu_page, filter: { location: locationFilter, fees: feesFilter }, },
          {
            headers: headers,
          });


        setData(response.data.success ? response.data.data : []);
      }

    }
    fun()
  }, [menu_page, m])


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="breadcrumbs sect">
        <div className="container ">
          <div className="row ">
            <div className="col-auto top1 ">
              <div className="breadcrumbs__content ">
                <div className="breadcrumbs__item ">
                  <a href="#">Home</a>
                </div>

                <div className="breadcrumbs__item">
                  <a href="#">All courses</a>
                </div>

                <div className="breadcrumbs__item">
                  <a href="#">User Experience Design</a>
                </div>

                <div className="breadcrumbs__item">
                  <a href="#">User Interface</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="college-list-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col px-0 mx-0">
              <img src="./img/12.jpg" alt="img" />
            </div>
          </div>
        </div>
      </section>



      <section className="layout-pb-lg" style={{ marginTop: '-100px' }}>
        <div className="container-fluid">
          <div className="row justify-content-center"          >
            <div className="col-11 col-md-11 col-lg-9 pt-4 p-md-5 bg-white  rounded shad main-card"            >

              <div className="accordion js-accordion">
                <div className="accordion__item">
                  <div className="row y-gap-20 items-center justify-between pb-30">
                    <div className="col-auto ">
                      <div className="text-18 lh-12 media-2">
                        Showing
                        <span className="text-white-1 fw-500">
                          {" "}
                          {currentItems.length}
                        </span>{" "}
                        out of total results
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2  g-4">
                {console.log('currentItems>>>>', currentItems && currentItems)}
                {currentItems && currentItems?.length <= 0 ? 'No Data Found' : currentItems && currentItems?.map((item) => {
                  return (
                    <CollegeListItem item={item && item} key={item.id} />
                    );
                })}
              </div>


              <div className="row justify-center pt-90 lg:pt-50">
                <div className="col-auto">
                  {currentItems.length ? (
                    <ReactPaginate
                      pageCount={pageCount}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      previousLabel="<"
                      nextLabel=">"
                      containerClassName=""
                      className="pagination -buttons media-8"
                      pageClassName="pagination__count"
                      activeLinkClassName="-count-is-active"
                      previousLinkClassName="pagination__button -prev"
                      nextLinkClassName="pagination__button -next"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CollegeList;
