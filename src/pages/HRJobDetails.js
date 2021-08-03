import React from "react";
import { Link } from "react-router-dom";
import banner10 from "../img/banner-10.jpg";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const HRJobDetails = () => {
  return (
    <>
      <Navbar />
      <section
        className="inner-header-title"
        style={{ backgroundImage: `url(${banner10})` }}
      >
        <div className="container">
          <h1>Job Detail</h1>
        </div>
      </section>

      <div className="clearfix"></div>

      <section className="detail-desc">
        <div className="container white-shadow">
          <div className="row">
            <div className="detail-pic">
              <img src="assets/img/com-2.jpg" className="img" alt="" />
              <Link to={"#"} class="detail-edit" title="edit">
                <i className="fa fa-pencil"></i>
              </Link>
            </div>

            <div className="detail-status">
              <span>2 Days Ago</span>
            </div>
          </div>

          <div className="row bottom-mrg">
            <div className="col-md-8 col-sm-8">
              <div className="detail-desc-caption">
                <h4>Google</h4>
                <span className="designation">
                  Software Development Company
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <ul>
                  <li>
                    <i className="fa fa-briefcase"></i>
                    <span>Full time</span>
                  </li>
                  <li>
                    <i className="fa fa-flask"></i>
                    <span>3 Year Experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="get-touch">
                <h4>Get in Touch</h4>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <span>Menlo Park, CA</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span>danieldax704@gmail.com</span>
                  </li>
                  <li>
                    <i className="fa fa-globe"></i>
                    <span>microft.com</span>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <span>0 123 456 7859</span>
                  </li>
                  <li>
                    <i className="fa fa-money"></i>
                    <span>$1000 -$1200/Month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row no-padd">
            <div className="detail pannel-footer">
              <div className="col-md-5 col-sm-5">
                <ul className="detail-footer-social">
                  <li>
                    <Link to={"#"}>
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-7 col-sm-7">
                <div className="detail-pannel-footer-btn pull-right">
                  <Link to={"#"} className="footer-btn grn-btn" title="">
                    Quick Apply
                  </Link>
                  <Link to={"#"} className="footer-btn blu-btn" title="">
                    Save Draft
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-detail-description full-detail">
        <div className="container">
          <div className="row row-bottom">
            <h2 className="detail-title">Job Responsibilities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>

          <div className="row row-bottom">
            <h2 className="detail-title">Skill Requirement</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="detail-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
            </ul>
          </div>

          <div className="row row-bottom">
            <h2 className="detail-title">Qualification</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="detail-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default HRJobDetails;
