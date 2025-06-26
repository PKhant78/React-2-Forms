import React, { useState } from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";

const BookList = ({ books, setBooks }) => {
  const [ascending, setAscending] = useState(true);
  const [buttonText, setButtonText] = useState(
    "Sort By Rating (Descending)"
  );

  const handleClick = () => {
    const sorted = [...books].sort((a, b) =>
      ascending ? b.rating - a.rating : a.rating - b.rating
    );
    setBooks(sorted);
    setAscending(!ascending);
    setButtonText(
      ascending ? "Sort By Rating (Ascending)" : "Sort By Rating (Descending)"
    );
  };

  if (!books.length) return <p>No books yet.</p>;

  return (
    <>
      <div style={{ textAlign: "center", margin: "1rem" }}>
        {setBooks && (
          <button id="sort-button" onClick={handleClick}>
            {buttonText}
          </button>
        )}
      </div>
      <div className="book-grid">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func, // optional – only required if sorting is enabled
};

export default BookList;
