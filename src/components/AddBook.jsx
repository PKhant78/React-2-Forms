import React, { useState } from "react";

/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    date: "",
    category: "",
    rating: 1,
    isRead: false,
    isFavorite: false,
  });

  const [rating, setRatingError] = useState([]);

  const handleTitleChange = (e) => {
    const { name, value } = e.target;
    setBook((previousBook) => ({
      ...previousBook,
      [name]: value,
    }));
  };

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setBook((previousBook) => ({
      ...previousBook,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setBook((previousBook) => ({
      ...previousBook,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setBook((previousBook) => ({
      ...previousBook,
      [name]: value,
    }));
  };

  const handleReadChange = (e) => {
    setBook((previousBook) => ({
      ...previousBook,
      isRead: !previousBook.isRead,
    }));
  };

  const handleRating = (e) => {
    const { name, value } = e.target;
    setBook((previousBook) => ({
      ...previousBook,
      [name]: value,
    }));
  };

  const handleFavoriteChange = (e) => {
    setBook((previousBook) => ({
      ...previousBook,
      isFavorite: !previousBook.isFavorite,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
  };

  return (
    <div className="form-field">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter book title"
          required
          type="text"
          name="title"
          value={book.title}
          onChange={handleTitleChange}
        />
        <input
          required
          type="text"
          name="author"
          placeholder="Enter the author"
          value={book.author}
          onChange={handleAuthorChange}
        ></input>
        <input
          required
          type="text"
          name="date"
          placeholder="Enter publication date"
          value={book.date}
          onChange={handleDateChange}
        ></input>
        <input
          required
          type="number"
          name="rating"
          min="1"
          max="5"
          value={book.rating}
          onChange={handleRating}
        ></input>
        <label>
          Have you read this book?
          <input
            type="checkbox"
            checked={book.isRead}
            onChange={handleReadChange}
          ></input>
        </label>
        <label>
          Is this book your favorite?
          <input
            type="checkbox"
            checked={book.isFavorite}
            onChange={handleFavoriteChange}
            placeholder="Is this book your favorite"
          ></input>
        </label>
        Genre
        <select
          name="category"
          value={book.category}
          onChange={handleCategoryChange}
        >
          <option value="Non-fiction">Non-Fiction</option>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance </option>
          <option value="Psychology">Psychology</option>
        </select>
        <button type="submit">Submit Book</button>
      </form>
    </div>
  );
};

export default AddBook;
