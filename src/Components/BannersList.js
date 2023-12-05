import { useEffect, useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { STATIC_URL } from "../config/config";

const BannerItem = ({ banner }) => {

  const { auth } = useAuth();


  const record = async () => {
    try {
      const response = await axios.post("/analytics", { bannerId: banner.id }, { headers: { authorization: "Bearer " + auth.token } });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id={banner.id}>
      <a rel="nofollow" target="_blank" href={banner.url} onClick={record}>
        <img
          typeof="foaf:Image"
          src={STATIC_URL + "/images/" + banner.banner}
          width="335"
          height="80"
          alt="Banner"
          title="Banner"
        />
      </a>
    </div>
  );
};

const BannersList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/banners");
        setData(response?.data?.banners);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={(props?.custom ? "custom-" : "") + "sidebar"}>
      {data.map((item) => (
        <BannerItem banner={item} id={item.id} key={item.id} />
      ))}
    </div>
  );
};

export default BannersList;
