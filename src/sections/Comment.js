import React from "react";
import CommentHeader from "../components/CommentHeader";
import Singlecomment from "../components/Singlecomment";
import Commentsdata from "../data/Commentsdata";

const Comment = () => {
  return (
    <div className="row no-mrg">
      <div className="comments">
        <CommentHeader header="Comments (2)" />
        {Commentsdata.map((data) => {
          const { date, author, img, detail } = data;
          return (
            <Singlecomment
              key={date}
              date={date}
              author={author}
              img={img}
              detail={detail}
            />
          );
        })}{" "}
      </div>
    </div>
  );
};
export default Comment;
