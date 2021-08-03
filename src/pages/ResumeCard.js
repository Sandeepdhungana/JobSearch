import React from "react";

const ResumeCard = ({ pic, heading, word, address, payment, experience }) => {
  return (
    <>
      <a href="resume-detail.html" className="item-click">
        <article>
          <div className="brows-resume">
            <div className="row no-mrg">
              <div className="col-md-2 col-sm-2">
                <div className="brows-resume-pic">
                  <img src={pic} className="img-responsive" alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="brows-resume-name">
                  <h4>{heading}</h4>
                  <span className="brows-resume-designation">{word}</span>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="brows-resume-location">
                  <p>
                    <i className="fa fa-map-marker"></i> {address}
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-2">
                <div className="browse-resume-rate">
                  <span>
                    <i className="fa fa-money"></i>
                    {payment}
                  </span>
                </div>
              </div>
            </div>
            <div className="row extra-mrg row-skill">
              <div className="browse-resume-skills">
                <div className="col-md-9 col-sm-8">
                  <div className="br-resume">
                    <span>css</span>
                    <span>html</span>
                    <span>photoshop</span>
                    <span>wordpress</span>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="browse-resume-exp">
                    <span className="resume-exp">{experience}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </a>
    </>
  );
};
export default ResumeCard;
