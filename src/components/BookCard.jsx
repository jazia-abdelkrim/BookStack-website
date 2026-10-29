import BookCover from "./BookCover.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function BookCard({ book }) {
    const { add } = useCart();
    return (
        <article className="book-card">
            <BookCover book={book} />
            <div className="book-info">
                <h3>{book.title}</h3>
                <p className="muted">{book.author}</p>
                <p className="book-blurb">{book.blurb}</p>
                <div className="book-foot">
                    <span className="price">{book.price} DZD</span>
                    <button className="btn btn-outline btn-sm" onClick={() => add(book.id)}>Add to cart</button>
                </div>
            </div>
        </article>
    );
}
