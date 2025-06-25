import React from "react";
import "../style.css";

const BookCard = ({ data }) => {
  return (
    <div className="cards" key={data?.id}>
      <h3> {data?.title}</h3>
      <br />
      <p>Author: {data?.author}</p>
      <p>Published Date: {data?.publishedDate}</p>
      <p>Rating: {data?.rating}</p>
      <br />
      <img
        className="card-img"
        src="https://covers.openlibrary.org/b/id/10523300-L.jpg"
      />
      <br />
      <div className="checkbox-button">
        <input
          type="checkbox"
          id="isRead"
          name="isRead"
          value="Read"
          defaultChecked={data?.isRead}
        ></input>
        <label htmlFor="isRead">Read</label>
        <br />
        <input
          type="checkbox"
          id="isFavorite"
          name="isFavorite"
          value="Favorite"
          defaultChecked={data?.isFavorite}
        ></input>
        <label htmlFor="isFavorite">Favorite</label>
        <br />
      </div>
    </div>
  );
};

export default BookCard;
