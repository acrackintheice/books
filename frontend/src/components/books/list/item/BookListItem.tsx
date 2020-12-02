import React, { useState } from "react";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import GridListTile from "@material-ui/core/GridListTile";
import Book from "../../../../model/Book";
import {
  FetchResult,
  gql,
  MutationFunctionOptions,
  useMutation,
} from "@apollo/client";
import square from ".././../../../img/square.png";
import placeholder from "../../../../img/placeholder.png";

const DELETE_BOOK = gql`
  mutation deleteBook($id: ID!) {
    book(id: $id)
      @rest(type: "Book", path: "/books/{args.id}", method: "DELETE") {
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [deleteBook]: [BookDeleteMutationType, any] = useMutation<Book, DeleteBookVariables>(DELETE_BOOK);

  const createLoadingContent = () => (
    <GridListTile key={book.id}>
    <img src={placeholder} alt="loading ..." />
    <GridListTileBar title="loading ..." subtitle={<span>by: No one</span>} />
  </GridListTile>
  )

  return (
      <GridListTile key={book.id}>
        <img
          src={square}
          alt={book.title}
          onLoad={() => setIsImageLoaded(true)}
        />
        {!isImageLoaded && createLoadingContent()}
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
};

export default BookListItem;
