import React from "react";
import { Link } from "react-router";
const BrowseListCard = ({
  id,
  title,
  location,
  salary,
  jobType,
  premium,
  profileImg,
  tags
}) => {
  return (
    <>
      <div className="item-click">
        <article>
          <div className="brows-job-list">
            <div className="col-md-1 col-sm-2 small-padding">
              <div className="brows-job-company-img">
                <Link to="job-detail.html">
                  <img src={profileImg} className="img-responsive" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-sm-5">
              <div className="brows-job-position">
                <Link to="job-apply-detail.html">
                  <h3>{title}</h3>
                </Link>
                <p>
                  <span>{tags}</span>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    {salary}
                  </span>
                  <span className="job-type cl-success bg-trans-success">
                    {jobType}
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="brows-job-location">
                <p>
                  <i className="fa fa-map-marker" />
                  {location}
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-2">
              <div className="brows-job-link">
                <Link to="job-apply-detail.html" className="btn btn-default">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          {premium ? (
            <span className="tg-themetag tg-featuretag">Premium</span>
          ) : null}{" "}
        </article>
      </div>
    </>
  );
};

export default BrowseListCard;
