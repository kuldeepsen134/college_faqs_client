import { useEffect } from "react";
const PublicFooter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <footer className="footer -type-1 bg-dark-1 -green-links">
        <div className="container">
          <div className="footer-header">
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-auto">
                <div className="footer-header__logo">
                  <img
                    src="./img/general/logo.jpeg"
                    width="65px"
                    height="85px"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="col-auto">
                <div className="footer-header-socials">
                  <div className="footer-header-socials__title text-white">
                    Follow us on social media
                  </div>
                  <div className="footer-header-socials__list">
                    <a href="#">
                      <i className="icon-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="icon-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="icon-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-columns">
            <div className="row y-gap-30">
              <div className="col-md-4">
                <div className="text-17 fw-500 text-white uppercase mb-25">
                  INFORMATION
                </div>
                <div className="d-flex y-gap-10 flex-column">
                  <a href="/">Home</a>
                  <a href="/about-us">About Us</a>

                  <a href="contact-1.html">Contact Us</a>
                </div>
              </div>


              <div className="col-md-5">
                <div className="text-17 fw-500 text-white uppercase mb-25">
                  POLICIES
                </div>
                <div className="d-flex y-gap-10 flex-column">
                  <a href="/privacy-policy">Privacy Policy</a>
                  <a href="/">Terms of use</a>
                </div>
              </div>

              <div className="col-md-3">
                <div className="footer-columns-form">
                  <form action="post">
                    <div className="form-group">
                      <input type="text" placeholder="Email..." />
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="py-30 border-top-light-15">
            <div className="row justify-center items-center y-gap-20">
              <div className="col-auto">
                <div className="d-flex items-center  h-100 text-white">
                  © CollageFAQs. All Right Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default PublicFooter;
