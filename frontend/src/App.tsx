import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import BookList from "./components/books/list/BookList";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <BookList />
      </div>
    </div>
  );
};

export default App;
