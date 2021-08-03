import React from "react";
import { Link } from "react-router-dom";
import banner10 from "../img/banner-10.jpg";

const NewJobDetailSection = () => {
  return (
    <>
      <section
        className="inner-header-title"
        style={{ backgroundImage: `url(${banner10})` }}
      >
        <div className="container">
          <h1>Job Detail</h1>
        </div>
      </section>
      <div className="clearfix"></div>

      <div className="container white-shadow">
        <div className="row">
          <div className="detail-pic">
            <img src="assets/img/com-7.jpg" className="img" alt="" />
            <Link to="#" className="detail-edit" title="edit">
              <i className="fa fa-pencil"></i>
            </Link>
          </div>
          <div className="detail-status">
            <span>2 Days Ago</span>
          </div>
        </div>
        <div className="row bottom-mrg">
          <div className="col-md-12 col-sm-12">
            <div className="advance-detail detail-desc-caption">
              <h4>Product Designer</h4>
              <span className="designation">Twitter Pvt</span>
              <ul>
                <li>
                  <strong className="j-view">742</strong>View Job
                </li>
                <li>
                  <strong className="j-applied">570</strong>Job Applied
                </li>
                <li>
                  <strong className="j-shared">210</strong>Job Shared
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
                  <Link to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-sm-7">
              <div className="detail-pannel-footer-btn pull-right">
                <Link
                  to={"javascript:void(0)"}
                  data-toggle="modal"
                  data-target="#apply-job"
                  className="footer-btn grn-btn"
                  title=""
                >
                  Quick Apply
                </Link>
                <Link to="#" className="footer-btn blu-btn" title="">
                  Save Draft
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-9 col-sm-12">
        <div className="full-card">
          <div className="row row-bottom mrg-0">
            <h2 className="detail-title">Job Detail</h2>
            <ul className="job-detail-des">
              <li>
                <span>Salary:</span>$10,000 - $12,000 P.A.
              </li>
              <li>
                <span>Industry:</span>IT-Software / Software Services
              </li>
              <li>
                <span>Role Category:</span>Programming & Design
              </li>
              <li>
                <span>Role:</span>Product Designer
              </li>
              <li>
                <span>Job Type:</span>Full Time
              </li>
            </ul>
          </div>
          <div className="row row-bottom mrg-0">
            <h2 className="detail-title">Location</h2>
            <ul className="job-detail-des">
              <li>
                <span>Address:</span>SCO 210, Neez Plaza
              </li>
              <li>
                <span>City:</span>Mohali
              </li>
              <li>
                <span>State:</span>Punjab
              </li>
              <li>
                <span>Country:</span>India
              </li>
              <li>
                <span>Zip:</span>520 548
              </li>
              <li>
                <span>Telephone:</span>+91 123 456 7854
              </li>
              <li>
                <span>Fax:</span>(622) 123 456
              </li>
              <li>
                <span>Email:</span>youremail@gmail.com
              </li>
            </ul>
          </div>
          <div className="row row-bottom mrg-0">
            <h2 className="detail-title">Job Responsibilities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="row row-bottom mrg-0">
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
            </ul>
          </div>

          <div className="row row-bottom mrg-0">
            <h2 className="detail-title">Map Location</h2>
            <div
              id="map_full_width_one"
              className="full-width"
              style={{ height: "400px" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewJobDetailSection;
