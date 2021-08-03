import React from "react";
import BrowseListCard from "../components/BrowseListCard";
import jobData from "../data/jobData";
const BrowseList = () => {
  return (
    <>
      {jobData.map((data) => {
        const {
          id,
          title,
          location,
          salary,
          jobType,
          premium,
          profileImg,
          tags
        } = data;
        return (
          <BrowseListCard
            key={id}
            profileImg={profileImg}
            title={title}
            tags={tags}
            salary={salary}
            jobType={jobType}
            premium={premium}
            location={location}
          />
        );
      })}
    </>
  );
};
export default BrowseList;
