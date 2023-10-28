import * as React from "react";
import { useSearchParams } from "react-router-dom";
import BannersList from "../Components/BannersList";
import { cmsRoutes } from "./file";

const CustomPage = () => {
  const [urlSearchParams] = useSearchParams();
  const page = urlSearchParams.get("page");
  const [height, setHeight] = React.useState(0);

  const fetchHtml = () => {
    const _route = cmsRoutes.find((route) => route.path === page);
    if (_route) {
      return _route.file;
    }
    return "";
  };

  React.useEffect(() => {
    const frame = document.getElementById("myFrame") as any;
    if (frame && frame.contentWindow) {
      setTimeout(() => {
        setHeight(frame.contentWindow.document.body.scrollHeight);
      }, 100);
    }
  }, [page]);

  return (
    <>
      <div
        style={{
          width: "80%",
          display: "block",
          // margin: "0 auto",
          marginLeft: "250px",
          background: "#fff",
        }}
      >
        <iframe
          title={page || ""}
          id="myFrame"
          src={fetchHtml()}
          width="70%"
          style={{ display: "block" }}
          height={`${height}px`}
          scrolling="no"
          frameBorder="0"
        />
        <BannersList custom={true} />
      </div>
    </>
  );
};
export default CustomPage;
