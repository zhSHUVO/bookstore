import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookList from "../components/BookList";
import { selectedFilters } from "../features/filter/filterSlice";

function Home(props) {
    const dispatch = useDispatch();
    const { filter } = useSelector((state) => state.filter);
    return (
        <div>
            <main className="py-12 px-6 2xl:px-6 container">
                <div className="order-2 xl:-order-1">
                    <div className="flex items-center justify-between mb-12">
                        <h4 className="mt-2 text-xl font-bold">Book List</h4>

                        <div className="flex items-center space-x-4">
                            <button
                                className={
                                    filter === "all"
                                        ? "lws-filter-btn active-filter"
                                        : "lws-filter-btn"
                                }
                                onClick={() => dispatch(selectedFilters("all"))}
                            >
                                All
                            </button>
                            <button
                                className={
                                    filter === "featured"
                                        ? "lws-filter-btn active-filter"
                                        : "lws-filter-btn"
                                }
                                onClick={() =>
                                    dispatch(selectedFilters("featured"))
                                }
                            >
                                Featured
                            </button>
                        </div>
                    </div>
                    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <BookList />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
