import { Link } from "react-router-dom";
import BookCard from "./BookCard.jsx";
import { books } from "../data/books.js";

export default function PopularBooks() {
    return (
        <section className="section container">
            <div className="section-head">
                <h2>Most popular books</h2>
                <Link to="/library" className="text-link">View all books</Link>
            </div>
            <div className="grid">
                {books.slice(0, 4).map((b) => <BookCard key={b.id} book={b} />)}
            </div>
        </section>
    );
}
