
import React, { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";

import { useDispatch } from "react-redux";
import { headerSearch } from "../../../../redux/commonSlice/commonSlice";
import { STATIC_URL } from "../../../../config/config";
import axios from "../../../../api/axios";

const CompareCOllege = () => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const [cardIndex, setCardIndex] = useState(0)

    const [getCollage1, setCollage1] = useState()
    const [getCollage2, setCollage2] = useState()
    const [getCollage3, setCollage3] = useState({})


    const [query, setQuery] = useState("");
    const [query2, setQuery2] = useState("");
    const [query3, setQuery3] = useState("");


    let token = localStorage.getItem('token')
    const navigate = useNavigate()

    const [searchResults, setSearchResults] = useState();
    const [searchResults2, setSearchResults2] = useState();
    const [searchResults3, setSearchResults3] = useState();



    // For first compare box>>>>
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
    }, [dispatch, query]);


    // For second compare box>>>>
    useEffect(() => {
        let timeoutId;
        const fetchData = async () => {
            try {
                const response = await dispatch(headerSearch({ q: query2 }));
                setSearchResults2(response?.payload?.data?.data);
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


    // For third compare box>>>>
    useEffect(() => {
        let timeoutId;
        const fetchData = async () => {
            try {
                const response = await dispatch(headerSearch({ q: query3 }));
                setSearchResults3(response?.payload?.data?.data);
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
    }, [dispatch, query3]);


    const handleResultClick = (id) => {
        (async () => {
            try {
                const responce = await axios.post("/colleges/fetch", { college: id, }, { headers: { authorization: token } })
                setCollage1(responce && responce?.data?.details)

                setShow(!show)

                setShow1(!show1)
            } catch (error) {
                console.error('error>>>>>>', error);
            }
        })()
    };

    const handleResultClick2 = (id) => {
        (async () => {
            try {
                const responce = await axios.post("/colleges/fetch", { college: id, }, { headers: { authorization: token } })
                setCollage2(responce && responce?.data?.details)

                setShow(!show)
                setShow2(!show2)
            } catch (error) {
                console.error('error>>>>>>', error);
            }
        })()
    };

    const handleResultClick3 = (id) => {
        (async () => {
            try {
                const responce = await axios.post("/colleges/fetch", { college: id, }, { headers: { authorization: token } })
                setCollage3(responce && responce?.data?.details)

                setShow(!show)
                setShow3(!show3)
            } catch (error) {
                console.error('error>>>>>>', error);
            }
        })()
    };


    return (
        <>
            <section id="latest-updates" className="media-5 compare-design custom-inner-pages mt-0 py-0">
                <div className="container">
                    {!show &&
                        <div className="row">
                            <div className="card-group px-0">
                                {!show1 && < div className="card">
                                    <div className="add-collage my-6 text-center">
                                        <div className=" custom-border">
                                            <button type="button"
                                                onClick={() => { !token ? navigate('/login') : setShow(!show); setCardIndex(1) }}
                                                className="btn add-collage-button">
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

                                {show1 && <div className="card m-2">
                                    <img src={STATIC_URL + "/images/" + getCollage1?.college_image} alt="image" />
                                    <div className="card-body">
                                        <div className="px-3">

                                            <h5 style={{ color: '#1048c3' }} className="institute-name ">Name : {getCollage1?.college_name}</h5>
                                            <p className="location ">Location:{getCollage1?.location}</p>
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>College Type :<span>{getCollage1?.college_type}</span> </p>
                                            <hr />
                                            <h6 className="text-center">Institute Information</h6>
                                            <hr />

                                        </div>
                                        <div className="px-3">
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Established : <span>{getCollage1?.established_year}</span></p>
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Total Fee :<span>{getCollage1?.total_fees}</span> </p>
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Ranking : <span>{getCollage1?.ranking}</span> </p>
                                            <hr />
                                            <h6 className="text-center">Placements Heighlits</h6>
                                            <p style={{ display: 'flex', flexDirection: 'column' }}>
                                                {getCollage1?.placement_heighlits?.map((item) => <li key={item.id} style={{ listStyle: "inside" }}>{item.placement_heighlit}</li>)}
                                            </p>
                                        </div>
                                        <hr />
                                        <h6 className="text-center">Programs</h6>
                                        <hr />
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="px-3">

                                            <p style={{ display: 'flex', flexDirection: 'column' }}>
                                                {getCollage1?.programs?.map((item) => <li key={item.id} style={{ listStyle: "inside" }}>{item.program_name} </li>)}
                                            </p>
                                        </div>

                                        <h6 className="text-center">Specilizations</h6>
                                        <hr />
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="px-3">
                                            <p style={{ display: 'flex', flexDirection: 'column' }}>
                                                <ul>
                                                    {getCollage1?.de?.map((item) => item.value === 1 && <li key={item.name} style={{ listStyle: "inside" }}>{item.name}</li>)}
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>}

                                {/* compaire college Card 22222222222222222222222222222222222222222  start*/}
                                {!show2 && <div className="card">
                                    <div className="add-collage my-6 text-center">
                                        <div className=" custom-border">
                                            <button type="button"
                                                className="btn add-collage-button"
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
                                </div>}

                                {show2 && <div className="card m-2">
                                    <img src={STATIC_URL + "/images/" + getCollage2?.college_image} alt="image" />
                                    <div className="card-body">
                                        <div className="px-3">

                                            <h5 style={{ color: '#1048c3' }} className="institute-name ">Name : {getCollage2?.college_name}</h5>
                                            <p className="location ">Location:{getCollage2?.location}</p>
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>College Type :<span>{getCollage2?.college_type}</span> </p>
                                            <hr />
                                            <h6 className="text-center">Institute Information</h6>
                                            <hr />

                                        </div>
                                        <div className="px-3">
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Established : <span>{getCollage2?.established_year}</span></p>
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Total Fee :<span>{getCollage2?.total_fees}</span> </p>
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Ranking : <span>{getCollage2?.ranking}</span> </p>
                                            <hr />
                                            <h6 className="text-center">Placements Heighlits</h6>
                                            <p style={{ display: 'flex', flexDirection: 'column' }}>
                                                {getCollage2?.placement_heighlits?.map((item) => <li key={item.id} style={{ listStyle: "inside" }}>{item.placement_heighlit}</li>)}
                                            </p>
                                        </div>
                                        <hr />
                                        <h6 className="text-center">Programs</h6>
                                        <hr />
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="px-3">

                                            <p style={{ display: 'flex', flexDirection: 'column' }}>
                                                {getCollage2?.programs?.map((item) => <li key={item.id} style={{ listStyle: "inside" }}>{item.program_name} </li>)}
                                            </p>
                                        </div>

                                        <h6 className="text-center">Specilizations</h6>
                                        <hr />
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="px-3">
                                            <p style={{ display: 'flex', flexDirection: 'column' }}>
                                                <ul>
                                                    {getCollage2?.de?.map((item) => item.value === 1 && <li key={item.name} style={{ listStyle: "inside" }}>{item.name}</li>)}
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>}

                                {!show3 && <div className="card">
                                    <div className="add-collage my-6 text-center">
                                        <div className=" custom-border">
                                            <button type="button"
                                                className="btn add-collage-button"
                                                onClick={() => { !token ? navigate('/login') : setShow(!show); setCardIndex(3) }}
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
                                            onClick={() => { !token ? navigate('/login') : setShow(!show); setCardIndex(3) }}
                                        >Add Similar College</button>
                                    </div>
                                </div>}

                                {show3 && <div className="card m-2">
                                    <img src={STATIC_URL + "/images/" + getCollage3?.college_image} alt="image" />
                                    <div className="card-body">
                                        <div className="px-3">

                                            <h5 style={{ color: '#1048c3' }} className="institute-name ">Name : {getCollage3?.college_name}</h5>
                                            <p className="location ">Location:{getCollage3?.location}</p>
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>College Type :<span>{getCollage3?.college_type}</span> </p>
                                            <hr />
                                            <h6 className="text-center">Institute Information</h6>
                                            <hr />

                                        </div>
                                        <div className="px-3">
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Established : <span>{getCollage3?.established_year}</span></p>
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Total Fee :<span>{getCollage3?.total_fees}</span> </p>
                                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>Ranking : <span>{getCollage3?.ranking}</span> </p>
                                            <hr />
                                            <h6 className="text-center">Placements Heighlits</h6>
                                            <p style={{ display: 'flex', flexDirection: 'column' }}>
                                                {getCollage3?.placement_heighlits?.map((item) => <li key={item.id} style={{ listStyle: "inside" }}>{item.placement_heighlit}</li>)}
                                            </p>
                                        </div>
                                        <hr />
                                        <h6 className="text-center">Programs</h6>
                                        <hr />
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="px-3">

                                            <p style={{ display: 'flex', flexDirection: 'column' }}>
                                                {getCollage3?.programs?.map((item) => <li key={item.id} style={{ listStyle: "inside" }}>{item.program_name} </li>)}
                                            </p>
                                        </div>

                                        <h6 className="text-center">Specilizations</h6>
                                        <hr />
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="px-3">
                                            <p style={{ display: 'flex', flexDirection: 'column' }}>
                                                <ul>
                                                    {getCollage3?.de?.map((item) => item.value === 1 && <li key={item.name} style={{ listStyle: "inside" }}>{item.name}</li>)}
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>}
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}

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
                                                {searchResults2?.map((result, index) => (
                                                    <div className="collageName ml-4" key={index}>
                                                        <p className=" text-black " onClick={() => handleResultClick2(result.id)} style={{ fontWeight: 'bold' }}>{result.name}</p>
                                                    </div>
                                                ))}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}


                    {show && cardIndex === 3 &&
                        <>
                            <div className="row overlap-card">
                                <div className="col m-0">
                                    <div className="card">
                                        <div className="card-header">
                                            <p className="mb-0">College Selection card3</p>
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
                                                        value={query3}
                                                        onChange={(e) => setQuery3(e.target.value)}
                                                    />
                                                </div>
                                                {searchResults3?.map((result, index) => (
                                                    <div className="collageName ml-4" key={index}>
                                                        <p className=" text-black " onClick={() => handleResultClick3(result.id)} style={{ fontWeight: 'bold' }}>{result.name}</p>
                                                    </div>
                                                ))}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                </div>
            </section >
        </>
    )
}

export default CompareCOllege