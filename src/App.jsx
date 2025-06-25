import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const sampleData = [
  {
    id: 1,
    title: "Faust",
    author: "Johann Wolfgang von Goethe",
    publishedDate: "1790",
    rating: 2,
    isRead: true,
    isFavorite: true,
  },
  {
    id: 2,
    title: "The Republic",
    author: "Plato",
    publishedDate: "360 BCE",
    rating: 4,
    isRead: false,
    isFavorite: false,
  },
];

const App = () => {
  const [books, setBookList] = useState(sampleData);

  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook />
      <BookList books={books} setBookList={setBookList} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
