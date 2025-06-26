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
      <form onSubmit={handleSubmit} className="add-book-form">
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
        <label>
          Rate from 1-5
          <input
            required
            type="number"
            name="rating"
            placeholder="Rating"
            min="1"
            max="5"
            value={book.rating}
            onChange={handleRating}
          ></input>
        </label>
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
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-Fiction</option>
          <option value="Poetry">Poetry</option>
          <option value="Drama">Drama</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="Art">Art</option>
          <option value="Music">Music</option>
          <option value="Travel">Travel</option>
          <option value="Cooking">Cooking</option>
          <option value="Gardening">Gardening</option>
          <option value="Psychology">Psychology</option>
          <option value="Sociology">Sociology</option>
          <option value="Education">Education</option>
          <option value="Religion">Religion</option>
          <option value="Philosophy">Philosophy</option>
          <option value="Health">Health</option>
          <option value="Business">Business</option>
          <option value="Finance">Finance</option>
          <option value="Literature">Literature</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
        </select>
        <button type="submit">Submit Book</button>
      </form>
    </div>
  );
};

export default AddBook;
