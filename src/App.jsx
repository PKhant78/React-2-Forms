import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [
      {
        title: "Becoming Dickens: The Invention of a Novelist",
        author: "Robert Douglas-Fairhurst",
        rating: 5,
        isRead: true,
        isFavorite: false,
        category: "history",
        publishedDate: "2011-08-23",
        image: "",
        description: "A rich biography exploring Dickens’ early career and his transformation through memory and personal struggle."
      },
      {
        title: "The Waste Land",
        author: "T. S. Eliot",
        rating: 4,
        isRead: false,
        isFavorite: true,
        category: "poetry",
        publishedDate: "1922-10-01",
        image: "",
        description: "A defining modernist poem that pieces together cultural memory and post-war disillusionment."
      },
      {
        title: "Swann's Way",
        author: "Marcel Proust",
        rating: 5,
        isRead: true,
        isFavorite: true,
        category: "fiction",
        publishedDate: "1913-11-14",
        image: "",
        description: "The first volume of Proust’s 'In Search of Lost Time'—a masterpiece on involuntary memory and identity."
      },
      {
        title: "The Art of Memory",
        author: "Frances A. Yates",
        rating: 4,
        isRead: false,
        isFavorite: false,
        category: "non-fiction",
        publishedDate: "1966-01-01",
        image: "",
        description: "A historical study tracing how memory was conceptualized and trained from ancient Rome through the Renaissance."
      },
      {
        title: "Faust",
        author: "Johann Wolfgang Goethe",
        publishedDate: "1790",
        rating: 2,
        category: "literature",
        isRead: true,
        isFavorite: true,
        image: "",
        description: "A tragic play exploring the consequences of ambition, temptation, and the quest for knowledge."
      },
      {
        title: "The Republic",
        author: "Plato",
        publishedDate: "360 BCE",
        rating: 4,
        category: "philosophy",
        isRead: false,
        isFavorite: false,
        image: "",
        description: "A foundational text of Western philosophy, discussing justice, politics, and the ideal state."
      },
      {
        title: "V.",
        author: "Thomas Pynchon",
        publishedDate: "1963",
        rating: 4,
        category: "literature",
        isRead: false,
        isFavorite: false,
        image: "",
        description: "A postmodern novel that dives into conspiracy, memory, and fragmented identity across time."
      }
    ];
  });

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    isRead: "",
    sort: ""
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const applyFilters = () => {
    let filtered = [...books];

    if (filters.search) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        book.author.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter((book) => book.category === filters.category);
    }

    if (filters.isRead) {
      filtered = filtered.filter((book) => String(book.isRead) === filters.isRead);
    }

    if (filters.sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  };

  const filteredBooks = applyFilters();

  return (
    <div className="app">
      <h1 className="title" style={{ textAlign: "center", width: "100%", margin: "2rem 0" }}>Akashic Records 📝</h1>
      <AddBook onAddBook={handleAddBook} />
      <SearchBar filters={filters} setFilters={setFilters} />
      <BookList books={filteredBooks} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
