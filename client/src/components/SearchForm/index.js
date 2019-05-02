import React from "react";

function SearchForm({ query, handleInputChange, handleFormSubmit }) {
  return (
    <div class="container">
      <form className="form-inline">
        <div className="form-group">
          {/* <label htmlFor="Title" className="sr-only">
          Search Book Title
        </label> */}
          <input
            className="form-control"
            id="Title"
            type="text"
            value={query}
            placeholder="Enter Book Title..."
            name="query"
            onChange={handleInputChange}
            size="60"
            required
          />
        </div>

        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-md search-button heading-subtitle"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
