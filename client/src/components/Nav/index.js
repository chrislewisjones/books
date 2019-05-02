import React from "react";
import "./index.css";

function Nav() {
  return (
    <div class="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Google Books
        </a>

        <a class="nav-link" href="/">
          Search
        </a>

        <a class="nav-link" href="/Saved">
          Saved Library
        </a>
      </nav>
    </div>
  );
}

export default Nav;
