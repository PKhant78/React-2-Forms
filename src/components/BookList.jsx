import React, { useState } from "react";
import BookCard from "./BookCard";

const BookList = ({ books, setBookList }) => {
  // default text for sort-button
  const [buttonText, setButtonText] = useState(
    "Sort By Rating in Descending Order"
  );

  // to switch between ascending and descending
  const [ascending, setAscending] = useState(true);

  // sort-button click
  const handleClick = () => {
    const sorted = [...books].sort((a, b) => {
      return ascending ? b.rating - a.rating : a.rating - b.rating;
    });
    setBookList(sorted);

    setButtonText(
      ascending
        ? "Sort By Rating in Ascending Order"
        : "Sort By Rating in Descending Order"
    );
    setAscending(!ascending);
  };

  return (
    <>
      <div>
        <button id="sort-button" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
      <div className="book-card-container">
        {books.map((bookData) => (
          <BookCard key={bookData.id} data={bookData} />
        ))}
      </div>
    </>
  );
};

export default BookList;
