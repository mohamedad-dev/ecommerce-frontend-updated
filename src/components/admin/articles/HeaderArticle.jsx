const HeaderArticle = ({ searchText, handleSearchChange }) => {
  return (
    <div
      className="table-container-header"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* <button className="new">
        <Link
          to="/products/add"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <i className="fa-solid fa-plus-square"></i> Nouveau
        </Link>
      </button> */}
      <div className="search-container">
        <i className="fa-solid fa-search"></i>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Rechercher des articles..."
          className="search-input"
        />
      </div>
    </div>
  );
};

export default HeaderArticle;
