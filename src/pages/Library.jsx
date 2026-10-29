import { useMemo, useState } from "react";
import BookCard from "../components/BookCard.jsx";
import { books, tags } from "../data/books.js";

export default function Library() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return books.filter(
      (b) => (tag === "All" || b.skill === tag) &&
        (!s || b.title.toLowerCase().includes(s) || b.author.toLowerCase().includes(s))
    );
  }, [q, tag]);

  return (
    <section className="page container">
      <h1 className="page-title">Library</h1>
      <p className="lead">Browse every title by skill, author or keyword.</p>

      <div className="toolbar">
        <input className="input" type="search" placeholder="Search title or author" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search books" />
        <div className="chips">
          {tags.map((t) => (
            <button key={t} className={"chip" + (t === tag ? " on" : "")} onClick={() => setTag(t)}>{t}</button>
          ))}
        </div>
      </div>

      {list.length ? (
        <div className="grid">{list.map((b) => <BookCard key={b.id} book={b} />)}</div>
      ) : (
        <p className="empty">No books match that search. Clear the filter or try another keyword.</p>
      )}
    </section>
  );
}
