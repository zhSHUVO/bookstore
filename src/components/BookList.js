import { useGetBooksQuery } from "../features/api/apiSlice";
import BookItem from "./BookItem";

function BookList(props) {
    const { data: books, isLoading, isError, error } = useGetBooksQuery();

    let content;
    if (isLoading) content = <div>Loading...</div>;
    if (!isLoading && isError) content = <div>{error}</div>;
    if (!isLoading && !isError && books?.length === 0)
        content = <div>No Books Found!</div>;

    if (!isLoading && !isError && books?.length > 0) {
        content = books.map((book) => <BookItem key={book.id} book={book} />);
    }

    return content;
}

export default BookList;
