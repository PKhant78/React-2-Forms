import React, { useEffect, useState } from "react";
import "../style.css";

const BookCard = ({ book }) => {
  const [coverUrl, setCoverUrl] = useState(
    "https://via.placeholder.com/150x200?text=No+Cover"
  );

  useEffect(() => {
    const fetchCover = async () => {
      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?title=${encodeURIComponent(
            book.title
          )}`
        );
        const data = await res.json();
        const coverId = data?.docs?.[0]?.cover_i;
        if (coverId) {
          setCoverUrl(
            `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
          );
        }
      } catch (err) {
        console.error("Cover fetch error:", err);
      }
    };

    fetchCover();
  }, [book.title]);

  const stars = "★".repeat(book.rating) + "☆".repeat(5 - book.rating);

  return (
    <div className="book-card">
      {/* cover */}
      <img
        src={coverUrl}
        alt={`${book.title} cover`}
        className="book-image-placeholder"
      />

      {/* content */}
      <div className="book-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>

        {/* category badge */}
        {book.category && (
          <span className={`badge ${book.category.toLowerCase()}`}>
            {book.category.toUpperCase()}
          </span>
        )}

        {/* published date */}
        {book.publishedDate && (
          <p className="book-date">Published: {book.publishedDate}</p>
        )}

        {/* rating */}
        <div className="rating">{stars}</div>

        {/* read / favorite flags (read-only) */}
        <div className="check-buttons" style={{ marginTop: "0.75rem" }}>
          <label>
            <input type="checkbox" readOnly checked={book.isRead} /> Read
          </label>
          <label style={{ marginLeft: "1rem" }}>
            <input type="checkbox" readOnly checked={book.isFavorite} /> Favorite
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
