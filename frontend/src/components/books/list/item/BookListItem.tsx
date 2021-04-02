import React from "react";
import Book from "../../../../model/Book";
import {
  FetchResult,
  gql,
  MutationFunctionOptions,
  useMutation,
} from "@apollo/client";
import { Link } from "@material-ui/core";

const DELETE_BOOK = gql`
  mutation deleteBook($id: ID!) {
    book(id: $id)
      @rest(type: "Book", path: "book/{args.id}", method: "DELETE") {
      id
    }
  }
`;

export type BookDeleteMutationType = (
  options?: MutationFunctionOptions<Book, DeleteBookVariables> | undefined
) => Promise<FetchResult<Book>>;

interface DeleteBookVariables {
  id: number;
}

interface BookListItemProps {
  handleDeleteClick: (book: Book, deletebook: BookDeleteMutationType) => void;
  book: Book;
}

const BookListItem = ({ handleDeleteClick, book }: BookListItemProps) => {
  const [deleteBook]: [BookDeleteMutationType, any] = useMutation<
    Book,
    DeleteBookVariables
  >(DELETE_BOOK);

  return (
    <div key={book.id} className="book item">
      <div className="book image">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="book info">
        <div className="book title"><Link>{book.title}</Link></div>
        <div className="book author"> {book.author}</div>
        <div className="book actions">    
            {/* <IconButton
              aria-label={`info about ${book.title}`}
              onClick={() => handleDeleteClick(book, deleteBook)}
            >
              <DeleteIcon />
            </IconButton> */}
        </div>
      </div>
    </div>
  );
};

export default BookListItem;
