export default function BookCover({ book }) {
    return (
        <div className="cover" style={{ "--c": book.color }} aria-label={`Cover of ${book.title}`}>
            {book.coverImage ? (
                <img
                    className="cover-image"
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    loading="lazy"
                    onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.nextElementSibling?.classList.add("cover-fallback-visible");
                    }}
                />
            ) : null}
            <div className="cover-fallback" aria-hidden="true">
                <span className="cover-spine" />
                <span className="cover-tag">{book.skill}</span>
                <span className="cover-title">{book.title}</span>
                <span className="cover-author">{book.author}</span>
            </div>
        </div>
    );
}
