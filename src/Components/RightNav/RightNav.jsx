import React from "react";
import CustomerReview from "../Review/Review";
import Updates from "../Updates/Updates";
import "./RightNav.css";

const RightNav = () => {
  return (
    <div className="RightNav">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightNav;
