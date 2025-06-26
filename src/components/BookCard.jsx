
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-image-placeholder" />
      <div className="book-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        {book.category && (
          <span className={`badge ${book.category.toLowerCase()}`}>
            {book.category.toUpperCase()}
          </span>
        )}
        <div className="rating">
          {"★".repeat(book.rating)}{"☆".repeat(5 - book.rating)}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
