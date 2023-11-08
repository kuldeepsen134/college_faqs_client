import { useEffect } from "react";
const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">About Us</div>
                </div>
            </div>
        </>
    );
};
export default AboutUs;
