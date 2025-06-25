import React, { useState } from "react";
import BookCard from "./BookCard";

const BookList = ({ books, setBookList }) => {
  const [buttonText, setButtonText] = useState(
    "Sort Rating in Ascending Order"
  );
  const [ascending, setAscending] = useState(true);

  const handleClick = () => {
    const sorted = [...books].sort((a, b) => {
      return ascending ? b.rating - a.rating : a.rating - b.rating;
    });
    setBookList(sorted);

    setButtonText(
      ascending
        ? "Sort Rating in Ascending Order"
        : "Sort Rating in Descending Order"
    );
    setAscending(!ascending);
  };

  return (
    <>
      <div>
        <button id="sort" onClick={handleClick}>
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
