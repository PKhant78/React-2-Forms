import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import BookCard from "./components/BookCard";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook />
      <BookList />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
