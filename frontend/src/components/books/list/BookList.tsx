import React from "react";
import { gql, useQuery } from "@apollo/client";
import './booklist.css'
import Book from "../../../model/Book";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import BookListItem, { BookDeleteMutationType } from "./item/BookListItem";
import NewBookListItem from "./item/new/NewBookListItem";

const GET_BOOKS = gql`
  query get_books {
    books @rest(type: "Book", path: "books/") {
      id
      title
    }
  }
`;

const handleDeleteClick = (book: Book, deleteBook: BookDeleteMutationType) => {
  deleteBook({
    variables: { id: book.id },
    optimisticResponse: {id: 0, title: 'Deleted Book', cover: 'https://thumbs.dreamstime.com/z/stamp-deleted-12720956.jpg', author: 'Deleted', publishedAt: new Date()},
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

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading ...</p>;;
  if (error) return <p>Error :(</p>;

  return (
    <GridList className="book list" cellHeight={350} cols={6}>
      <GridListTile key="Subheader" cols={6} style={{ height: "auto" }}>
        <ListSubheader component="div">Books</ListSubheader>
      </GridListTile>
      <NewBookListItem book={{id: 1, title: 'kappa', cover:'cover', author:'none', publishedAt: new Date()}}/>
      {data.books.map((book: Book) => <BookListItem handleDeleteClick={handleDeleteClick} book={book} />)}
    </GridList>
  );
};

export default BookList;
