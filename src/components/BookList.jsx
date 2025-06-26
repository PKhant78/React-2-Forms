import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books.length) return <p>No books yet.</p>;

  return (
    <div className="book-grid">
      {books.map((book, idx) => (
        <BookCard key={idx} book={book} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
