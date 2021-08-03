import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const CreateResume = () => {
  return (
    <>
      <Navbar />

      <section className="inner-header-title blank">
        <div className="container">
          <h1>Create Job</h1>
        </div>
      </section>
      <div className="clearfix"></div>

      <div className="detail-desc section">
        <div className="container white-shadow">
          <div className="row">
            <div className="detail-pic js">
              <div className="box">
                <input
                  type="file"
                  name="upload-pic[]"
                  id="upload-pic"
                  className="inputfile"
                />
                <label for="upload-pic">
                  <i className="fa fa-upload" aria-hidden="true"></i>
                  <span></span>
                </label>
              </div>
            </div>
          </div>

          <div className="row bottom-mrg">
            <form className="add-feild">
              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job Title"
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <select className="form-control input-lg">
                    <option>Job Type</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Freelancer</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location,e.g. London Quel Mark"
                  />
                </div>
              </div>

              <div className="col-md-12 col-sm-12">
                <textarea
                  className="form-control"
                  placeholder="Job Description"
                ></textarea>
              </div>
            </form>
          </div>

          <div className="row no-padd">
            <div className="detail pannel-footer">
              <div className="col-md-12 col-sm-12">
                <div className="detail-pannel-footer-btn pull-right">
                  <Link to="#" class="footer-btn choose-cover">
                    Choose Cover Image
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="full-detail">
        <div class="container">
          <div class="row bottom-mrg extra-mrg">
            <form>
              <h2 class="detail-title">Company Information</h2>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-flag"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-pencil"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company Tagline"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company Email"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-map-marker"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Local E.g. It Park New"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-globe"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Website"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-birthday-cake"></i>
                  </span>
                  <input
                    type="text"
                    id="company-dob"
                    data-lang="en"
                    data-large-mode="true"
                    data-min-year="2017"
                    data-max-year="2020"
                    data-disabled-days="08/17/2017,08/18/2017"
                    data-id="datedropper-0"
                    data-theme="my-style"
                    class="form-control"
                    readonly=""
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <form>
              <h2 class="detail-title">Social Profile</h2>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-facebook"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-google-plus"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-instagram"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-linkedin"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-dribbble"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <form>
              <h2 class="detail-title">Job Requirement</h2>
              <div class="col-md-12 col-sm-12">
                <textarea
                  class="form-control textarea"
                  placeholder="About Company"
                ></textarea>
              </div>
              <div class="col-md-12 col-sm-12">
                <button class="btn btn-success btn-primary small-btn">
                  Submit your company
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default CreateResume;
