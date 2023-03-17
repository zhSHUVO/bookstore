import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditBookMutation } from "../features/api/apiSlice";

function EditBookCard({ book }) {
    const {
        name: currentName,
        author: currentAuthor,
        thumbnail: currentThumbnail,
        price: currentPrice,
        rating: currentRating,
        featured: currentFeatured,
        id,
    } = book;

    const navigate = useNavigate();
    const [editBook, { isLoading }] = useEditBookMutation();

    const [name, setName] = useState(currentName);
    const [author, setAuthor] = useState(currentAuthor);
    const [thumbnail, setThumnail] = useState(currentThumbnail);
    const [price, setPrice] = useState(currentPrice);
    const [rating, setRating] = useState(currentRating);
    const [featured, setFeatured] = useState(currentFeatured);

    const handleSubmit = (e) => {
        e.preventDefault();
        editBook({
            id,
            data: { name, author, thumbnail, price, rating, featured },
        });
        navigate("/");
    };
    return (
        <form className="book-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="space-y-2">
                <label>Book Name</label>
                <input
                    required
                    className="text-input"
                    type="text"
                    id="lws-bookName"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label>Author</label>
                <input
                    required
                    className="text-input"
                    type="text"
                    id="lws-author"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label>Image Url</label>
                <input
                    required
                    className="text-input"
                    type="text"
                    id="lws-thumbnail"
                    name="thumbnail"
                    value={thumbnail}
                    onChange={(e) => setThumnail(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label>Price</label>
                    <input
                        required
                        className="text-input"
                        type="number"
                        id="lws-price"
                        name="price"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                    />
                </div>

                <div className="space-y-2">
                    <label>Rating</label>
                    <input
                        required
                        className="text-input"
                        type="number"
                        id="lws-rating"
                        name="rating"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                    />
                </div>
            </div>

            <div className="flex items-center">
                <input
                    id="lws-featured"
                    type="checkbox"
                    name="featured"
                    className="w-4 h-4"
                    defaultChecked={featured}
                    onClick={(e) => setFeatured(e.target.checked)}
                />
                <label className="ml-2 text-sm">
                    {" "}
                    This is a featured book{" "}
                </label>
            </div>

            <button
                disabled={isLoading}
                type="submit"
                className="submit"
                id="lws-submit"
            >
                Edit Book
            </button>
        </form>
    );
}

export default EditBookCard;
