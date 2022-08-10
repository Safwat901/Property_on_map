const MainSearch = () => {
  return (
    <>
      <div className="searchBox">
        <input className="searchBox_inp" type="text" placeholder="Location" />
        <a href="#" className="srch-btn"></a>

        <button className="search-btn" href="#">
          <span
            style={{
              fontFamily:
                "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            }}
          >
            Find
          </span>
        </button>
      </div>
    </>
  );
};

export default MainSearch;
