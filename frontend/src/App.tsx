import React from "react";
import "./App.css";
import { gql, useQuery, useMutation } from "@apollo/client";
import Book from "./model/Book";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import Sidebar from "./components/sidebar/Sidebar";
import DeleteIcon from "@material-ui/icons/Delete";

const GET_BOOKS = gql`
  query get_books {
    books @rest(type: "Book", path: "books/") {
      id
      title
    }
  }
`;

const DELETE_BOOK = gql`
  mutation deleteBook($id: ID!) {
    book(id: $id)
      @rest(type: "Book", path: "/books/{args.id}", method: "DELETE") {
      id
    }
  }
`;

const createGridItem = (book: Book, deleteBook: any) => (
  <GridListTile key={book.id}>
    <img
      src="https://squaredwp.blob.core.windows.net/webmedia/2020/04/SquaredSquare.png"
      alt={book.title}
    />
    <GridListTileBar
      title={book.title}
      subtitle={<span>by: {book.id}</span>}
      actionIcon={
        <IconButton
          aria-label={`info about ${book.title}`}
          onClick={() => handleDeleteClick(book, deleteBook)}
        >
          <DeleteIcon />
        </IconButton>
      }
    />
  </GridListTile>
);

const handleDeleteClick = (book: Book, deleteBook: any) => {
  deleteBook({
    variables: { id: book.id },
    optimisticResponse: true,
    update: (cache: any) => {
      const data = cache.readQuery({ query: GET_BOOKS });
      const newBooks = data.books.filter((b: Book) => b.id !== book.id);
      cache.writeQuery({
        query: GET_BOOKS,
        data: { books: newBooks },
      });
    },
  });
};

const App = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [deleteBook] = useMutation(DELETE_BOOK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <GridList cellHeight={350} cols={6}>
          <GridListTile key="Subheader" cols={6} style={{ height: "auto" }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {data.books.map((book: Book) => createGridItem(book, deleteBook))}
        </GridList>
      </div>
    </div>
  );
};

export default App;
