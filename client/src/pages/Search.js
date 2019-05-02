import React, { Component } from "react";
import Book from "../components/Book/index";
import SearchForm from "../components/SearchForm/index";
import { List } from "../components/List/index";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";

class Search extends Component {
  state = {
    books: [],
    query: "",
    message: "Search for books via the Google Books API"
  };

  // handleInputChange is built into React, here we are updating the state to reflect the users input
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // function to call the API with query, results put into an array of books
  // then catch error message if results come back empty
  // this.state.query - the users submission

  getBooks = () => {
    API.getBooks(this.state.query)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() => {
        this.setState({
          books: [],
          message: "Your search did not match any book results."
        });
      });
  };

  // runs getbooks, along with page not refreshing
  handleFormSubmit = event => {
    event.preventDefault();

    this.getBooks();
  };

  // saves the book by id, then saved book will not appear when getBooks runs again
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <div className="container">
        <Jumbotron>
          <div className="row">
            <div className="col-12 col-centered">
              <div className="d-flex flex-wrap flex-row bd-highlight mb-3 justify-content-center align-items-center">
                <div className="order-sm-1 p-2 bd-highlight">
                  <h1 className="heading-title mx-sm-3 mb-2">
                    React Google Books Search
                  </h1>
                  <br />
                </div>
              </div>
              <SearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.query}
              />
            </div>
          </div>
        </Jumbotron>

        <div className="row">
          <div className="col-12 col-centered card-content mb-4">
            <h3 className="heading-title mx-sm-3 mb-2 text-center">Results</h3>

            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookSave(book.id)}
                        className="btn save-button  heading-subtitle ml-2"
                      >
                        Save
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <div className="mockup-content">
                <h2 className="heading-title text-center">
                  {this.state.message}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
