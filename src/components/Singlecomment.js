import React from "react";

function SingleComment({ date, img, detail, author }) {
  return (
    <>
      <div className="single-comment">
        <div className="img-holder">
          <img src={img} className="img-responsive" alt="" />
        </div>
        <div className="text-holder">
          <div className="top">
            <div className="name pull-left">
              <h4>
                {author} – {date}
              </h4>
            </div>
            <div className="rating pull-right">
              <ul>
                <li>
                  <i className="fa fa-star active" />
                </li>
                <li>
                  <i className="fa fa-star active" />
                </li>
                <li>
                  <i className="fa fa-star active" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
            </div>
          </div>
          <div className="text">
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleComment;
