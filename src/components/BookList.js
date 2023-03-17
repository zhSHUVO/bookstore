import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../features/api/apiSlice";
import BookItem from "./BookItem";

function BookList(props) {
    const { data: books, isLoading, isError, error } = useGetBooksQuery();
    const { filter, search } = useSelector((state) => state.filter);

    let content;
    if (isLoading) content = <div>Loading...</div>;
    if (!isLoading && isError) content = <div>{error}</div>;
    if (!isLoading && !isError && books?.length === 0)
        content = <div>No Books Found!</div>;

    if (!isLoading && !isError && books?.length > 0) {
        if (filter === "featured" && !search)
            content = books
                .filter((book) => book.featured)
                .map((book) => <BookItem key={book.id} book={book} />);
        if (filter === "featured" && search)
            content = books
                .filter((book) => book.featured)
                .filter((book) =>
                    book.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((book) => <BookItem key={book.id} book={book} />);
        if (filter === "all" && search)
            content = books
                .filter((book) =>
                    book.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((book) => <BookItem key={book.id} book={book} />);
        if (filter === "all" && !search)
            content = books.map((book) => (
                <BookItem key={book.id} book={book} />
            ));
    }

    return content;
}

export default BookList;
