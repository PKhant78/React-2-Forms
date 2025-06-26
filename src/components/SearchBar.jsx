import React from "react";

function SearchBar({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "",
      isRead: "",
      sort: ""
    });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        placeholder="Search by title or author"
        value={filters.search}
        onChange={handleChange}
      />

      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="poetry">Poetry</option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="technology">Technology</option>
      </select>

      <select name="isRead" value={filters.isRead} onChange={handleChange}>
        <option value="">All</option>
        <option value="true">Read</option>
        <option value="false">Unread</option>
      </select>

      <select name="sort" value={filters.sort} onChange={handleChange}>
        <option value="">Sort</option>
        <option value="rating">Rating (High to Low)</option>
      </select>

      <button onClick={resetFilters}>Reset Filters</button>
    </div>
  );
}

export default SearchBar;
