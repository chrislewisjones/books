import React from "react";
import booksimg from "../../images/books.jpg";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${booksimg})`,
        height: "100%",
        textAlign: "center",
        width: "100%"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
