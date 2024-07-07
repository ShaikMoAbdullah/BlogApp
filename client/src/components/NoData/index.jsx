// NoData.js
import React from "react";
import "./index.css";

const NoData = () => {
  return (
    <div className="no-data-container">
      <div className="no-data-icon">📭</div>
      <h2>No Data Available</h2>
      <p>There is no data to display at the moment.</p>
    </div>
  );
};

export default NoData;
