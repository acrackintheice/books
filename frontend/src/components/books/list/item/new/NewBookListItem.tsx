import React from "react";
import star from "../../../../../img/star.png"
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import GridListTile from "@material-ui/core/GridListTile";
import Book from "../../../../../model/Book";
// import { FetchResult, gql, MutationFunctionOptions, MutationResult, MutationTuple, useMutation } from "@apollo/client";

// const DELETE_BOOK = gql`
//   mutation deleteBook($id: ID!) {
//     book(id: $id)
//       @rest(type: "Book", path: "/books/{args.id}", method: "DELETE") {
//       id
//     }
//   }
// `;

// export type BookDeleteMutationType = (options?: MutationFunctionOptions<Book, DeleteBookVariables> | undefined) => Promise<FetchResult<Book>>

// interface DeleteBookVariables {
//     id: number
// }

interface NewBookListItemProps {
  // handleDeleteClick: (book: Book, deletebook: BookDeleteMutationType) => void;
  book: Book;
};




const BookListItem = ({ book }: NewBookListItemProps) => {
  // const [deleteBook]: [BookDeleteMutationType, any] = useMutation<Book, DeleteBookVariables>(DELETE_BOOK);
  return (
    <GridListTile key={-1}>
      <img
        src={star}
        alt={book.title}
      />
      <GridListTileBar
        title={book.title}
        subtitle={<span>by: {book.id}</span>}
        actionIcon={
          <IconButton
            aria-label={`info about ${book.title}`}
            onClick={() => alert("kappa")}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
};

export default BookListItem;