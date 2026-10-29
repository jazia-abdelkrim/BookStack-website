import { Link, useNavigate } from "react-router-dom";
import { skills } from "../data/books.js";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero container">
      <div className="hero-left">
        <p className="pill"><span className="dot" /> foundational titles in stock</p>
        <h1>The first source of knowledge!</h1>
        <p className="lead">
          BookStack curates the technical books engineers keep coming back to, from distributed
          systems to algorithms. Read once, apply for a career.
        </p>
        <div className="hero-cta">
          <Link to="/library" className="btn btn-dark btn-lg">See the library</Link>
          <Link to="/authors" className="btn btn-ghost btn-lg">Meet the authors</Link>
        </div>
      </div>

      <div className="hero-right" aria-label="Skills you can learn">
        <div className="term">
          <div className="term-bar"><i /><i /><i /><span>skills.config</span></div>
          <p className="term-title">Skills you can learn</p>
          <ul>
            {skills.map((s) => (
              <li key={s.label}>
                <button onClick={() => navigate("/library")} className="skill-row">
                  <span className="skill-name">{s.label}</span>
                  <span className="skill-book">{s.bookId}.pdf</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="term-foot">$ BookStack learn --any<span className="caret" /></p>
        </div>
      </div>
    </section>
  );
}
