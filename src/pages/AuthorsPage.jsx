import { AuthorCard } from "../components/Authors.jsx";
import { authors } from "../data/books.js";

export default function AuthorsPage() {
  return (
    <section className="page container">
      <h1 className="page-title">Authors</h1>
      <p className="lead">The engineers and researchers behind the books on our shelf.</p>
      <div className="grid grid-3">
        {authors.map((a) => <AuthorCard key={a.name} author={a} />)}
      </div>
    </section>
  );
}
