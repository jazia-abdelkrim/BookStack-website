import { Link } from "react-router-dom";
import { authors, getBook } from "../data/books.js";

export function AuthorCard({ author }) {
    const initials = author.name.split(/[\s&]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("");
    return (
        <article className="author-card">
            <div className="author-avatar">
                {author.photo ? (
                    <img
                        className="author-photo"
                        src={author.photo}
                        alt={`Portrait of ${author.name}`}
                        loading="lazy"
                        onError={(event) => {
                            event.currentTarget.style.display = "none";
                            event.currentTarget.nextElementSibling?.classList.remove("avatar-fallback-hidden");
                        }}
                    />
                ) : null}
                <div className={`avatar ${author.photo ? "avatar-fallback-hidden" : ""}`} aria-hidden="true">{initials}</div>
            </div>
            <h3>{author.name}</h3>
            <p className="muted">{author.role}</p>
            <p className="author-books">{author.bookIds.map((id) => getBook(id).title).join(", ")}</p>
        </article>
    );
}

export default function Authors({ limit = 3 }) {
    return (
        <section className="section container">
            <div className="section-head">
                <h2>Authors</h2>
                <Link to="/authors" className="text-link">All authors</Link>
            </div>
            <div className="grid grid-3">
                {authors.slice(0, limit).map((a) => <AuthorCard key={a.name} author={a} />)}
            </div>
        </section>
    );
}
