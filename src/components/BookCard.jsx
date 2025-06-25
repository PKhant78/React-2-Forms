import React from "react";
import "../style.css";

const BookCard = ({ bookData }) => {
  return (
    <div className="book-card-container">
      {bookData.map((data) => (
        <div className="cards" key={data?.id}>
          {data?.title}
          <img src={"placeholder"} />
        </div>
      ))}
    </div>
  );
};

export default BookCard;
