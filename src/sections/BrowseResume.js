import React from "react";
import ResumeCard from "../pages/ResumeCard";
import { Link } from "react-router-dom";
import banner10 from "../img/banner-10.jpg";
import BRDetails from "../data/BrowseResumeData";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Banner from "../components/Banner";

const BrowseResume = () => {
  return (
    <>
      <Navbar />
      <section>
        <Banner
          cname="inner-header-title"
          title="Browse Resume"
          bgImg={banner10}
        />
      </section>
      <div className="clearfix"></div>
      <div className="row extra-mrg">
        <div className="wrap-search-filter">
          <form>
            <div className="col-md-4 col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Keyword: Name, Tag"
              />
            </div>
            <div className="col-md-3 col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="Location: City, State, Zip"
              />
            </div>
            <div className="col-md-3 col-sm-3">
              <select
                className="selectpicker form-control"
                multiple
                title="All Categories"
              >
                <option>Information Technology</option>
                <option>Mechanical</option>
                <option>Hardware</option>
              </select>
            </div>
            <div className="col-md-2 col-sm-2">
              <button type="submit" className="btn btn-success full-width">
                Filter
              </button>
            </div>
          </form>
        </div>
      </div>
      <Link to="resume-detail.html" className="item-click">
        <article>
          <div className="brows-resume">
            <div className="row no-mrg">
              {BRDetails.map((data) => {
                const {
                  pic,
                  heading,
                  word,
                  address,
                  payment,
                  experience
                } = data;
                return (
                  <ResumeCard
                    key={pic}
                    pic={pic}
                    heading={heading}
                    word={word}
                    address={address}
                    payment={payment}
                    experience={experience}
                  />
                );
              })}
            </div>
          </div>
        </article>
      </Link>
      <Footer />
    </>
  );
};
export default BrowseResume;
