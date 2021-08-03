import React from "react";
import { Link } from "react-router-dom";

const NewJobDetailSideBar = () => {
  return (
    <>
      <div className="col-md-3 col-sm-12">
        <div className="sidebar right-sidebar">
          <div className="side-widget">
            <h2 className="side-widget-title">Job Alert</h2>
            <div className="job-alert">
              <div className="widget-text">
                <form>
                  <input
                    type="text"
                    name="keyword"
                    className="form-control"
                    placeholder="Job Keyword"
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email ID"
                  />
                  <button type="submit" className="btn btn-alrt">
                    Add Alert
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="side-widget">
            <h2 className="side-widget-title">Advertisment</h2>
            <div className="widget-text padd-0">
              <div className="ad-banner">
                <img
                  src="http://via.placeholder.com/320x285"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="side-widget">
            <h2 className="side-widget-title">Compensation</h2>
            <div className="widget-text padd-0">
              <ul>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="1" />
                    <label for="1"></label>
                  </span>
                  Under $10,000
                  <span className="pull-right">102</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="2" />
                    <label for="2"></label>
                  </span>
                  $10,000 - $15,000
                  <span className="pull-right">78</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="3" />
                    <label for="3"></label>
                  </span>
                  $15,000 - $20,000
                  <span className="pull-right">12</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="4" />
                    <label for="4"></label>
                  </span>
                  $20,000 - $30,000
                  <span className="pull-right">85</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="5" />
                    <label for="5"></label>
                  </span>
                  $30,000 - $40,000
                  <span className="pull-right">307</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="side-widget">
            <h2 className="side-widget-title">
              <Link to="#designation" data-toggle="collapse">
                Designation
                <i
                  className="pull-right fa fa-angle-double-down"
                  aria-hidden="true"
                ></i>
              </Link>
            </h2>
            <div className="widget-text padd-0 collapse" id="designation">
              <ul>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="1" />
                    <label for="1"></label>
                  </span>
                  Web Designer
                  <span className="pull-right">102</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="2" />
                    <label for="2"></label>
                  </span>
                  Php Developer
                  <span className="pull-right">78</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="3" />
                    <label for="3"></label>
                  </span>
                  Project Manager
                  <span className="pull-right">12</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="4" />
                    <label for="4"></label>
                  </span>
                  Human Resource
                  <span className="pull-right">85</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="5" />
                    <label for="5"></label>
                  </span>
                  CMS Developer
                  <span className="pull-right">307</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="6" />
                    <label for="6"></label>
                  </span>
                  App Developer
                  <span className="pull-right">256</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="side-widget">
            <h2 className="side-widget-title">
              <Link to="#job-location" data-toggle="collapse">
                Location
                <i
                  className="pull-right fa fa-angle-double-down"
                  aria-hidden="true"
                ></i>
              </Link>
            </h2>
            <div className="widget-text padd-0 collapse" id="job-location">
              <ul>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="1" />
                    <label for="1"></label>
                  </span>
                  Mohali
                  <span className="pull-right">102</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="2" />
                    <label for="2"></label>
                  </span>
                  Chandigarh
                  <span className="pull-right">78</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="3" />
                    <label for="3"></label>
                  </span>
                  Chennai
                  <span className="pull-right">12</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="4" />
                    <label for="4"></label>
                  </span>
                  Delhi
                  <span className="pull-right">85</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="5" />
                    <label for="5"></label>
                  </span>
                  Noida
                  <span className="pull-right">307</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="6" />
                    <label for="6"></label>
                  </span>
                  Chhatisgarh
                  <span className="pull-right">256</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="side-widget">
            <h2 className="side-widget-title">
              <Link to="#job-type" data-toggle="collapse">
                Job type
                <i
                  className="pull-right fa fa-angle-double-down"
                  aria-hidden="true"
                ></i>
              </Link>
            </h2>
            <div className="widget-text padd-0 collapse" id="job-type">
              <ul>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="1" />
                    <label for="1"></label>
                  </span>
                  Full Time
                  <span className="pull-right">102</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="2" />
                    <label for="2"></label>
                  </span>
                  Part Time
                  <span className="pull-right">78</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="3" />
                    <label for="3"></label>
                  </span>
                  Internship
                  <span className="pull-right">12</span>
                </li>
                <li>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="4" />
                    <label for="4"></label>
                  </span>
                  Freelancer
                  <span className="pull-right">85</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewJobDetailSideBar;
