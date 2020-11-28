import React from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Book from "./model/Book";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const GET_BOOKS = gql`
  query books {
    books @rest(type: "Book", path: "books/") {
      title
    }
  }
`;

const createListItem = (book: Book) => (
  <ListItem>
    <ListItemText primary={book.title} />
  </ListItem>
);

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="app">
      <List className="kappa">
        {data.books.map((book: Book) => createListItem(book))}
      </List>
    </div>
  );
};

export default App;
