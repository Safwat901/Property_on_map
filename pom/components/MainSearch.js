import React from "react";

const MainSearch = () => {
  return (
    <>
      <div className="searchBox">
        <input
          className="searchBox_inp"
          type="text"
          placeholder="Location"
        ></input>
        <button className="search-btn" href="#">
          Find
        </button>
      </div>
    </>
  );
};

export default MainSearch;
