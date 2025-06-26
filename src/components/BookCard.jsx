import React from "react";
import "../style.css";

const BookCard = ({ data }) => {
  return (
    <div className="cards" key={data?.id}>
      <div className="card-title">
        <h3> {data?.title}</h3>
      </div>

      <div className="card-info">
        <p>Author: {data?.author}</p>
        <p>Published Date: {data?.publishedDate}</p>
        <p>Rating: {data?.rating}</p>
      </div>

      <div className="card-img-box">
        <img
          className="card-img"
          src="https://covers.openlibrary.org/b/id/10523300-L.jpg"
        />
      </div>

      <div className="category-display">
        <p>Category: {data?.category}</p>
      </div>

      <div className="check-read-button">
        <input
          type="checkbox"
          id={data?.id}
          name="isRead"
          value="Read"
          defaultChecked={data?.isRead}
        ></input>
        <label htmlFor="isRead">Read</label>
      </div>

      <div className="check-favorite-button">
        <input
          type="checkbox"
          id={data?.id}
          name="isFavorite"
          value="Favorite"
          defaultChecked={data?.isFavorite}
        ></input>
        <label htmlFor="isFavorite">Favorite</label>
      </div>
    </div>
  );
};

export default BookCard;
