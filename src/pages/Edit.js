import React from "react";
import { useParams } from "react-router-dom";
import EditBookCard from "../components/EditBookCard";
import { useGetBookQuery } from "../features/api/apiSlice";

function Edit() {
    const { bookId } = useParams();
    const { data: book, isLoading, isError, error } = useGetBookQuery(bookId);

    let content = null;
    if (isLoading) content = <div>Loading...</div>;
    if (!isLoading && isError) content = <div>{error}</div>;
    if (!isLoading && !isError && book?.id) {
        content = <EditBookCard book={book} />;
    }

    return (
        <div>
            <main className="py-6 2xl:px-6">
                <div className="container">
                    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                        <h4 className="mb-8 text-xl font-bold text-center">
                            Edit Book
                        </h4>
                        {content}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Edit;
