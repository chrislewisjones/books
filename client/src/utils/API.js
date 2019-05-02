import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

// all the methods for the API

export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get("/api/google", {
      params: { q: "title:" + query }
    });
  },

  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
