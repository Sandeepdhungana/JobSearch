import React from "react";
import NewJobDetailSection from "../sections/NewJobDetailSection";
import NewJobDetailSideBar from "../sections/NewJobDetailSideBar";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const NewJobDetail = () => {
  return (
    <>
      <Navbar />
      <NewJobDetailSection />
      <NewJobDetailSideBar />

      <Footer />
    </>
  );
};

export default NewJobDetail;
