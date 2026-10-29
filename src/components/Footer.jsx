import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand"><span className="brand-mark">{"</>"}</span><span className="brand-name">BookStack</span></Link>
          <p className="muted footer-note">Technical books for working engineers.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link to="/library">Library</Link>
          <Link to="/authors">Authors</Link>
        </div>
        <div>
          <h4>Account</h4>
          <Link to="/sign-in">Sign in</Link>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#shipping">Shipping</a>
          <a href="#returns">Returns</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="container footer-base muted">© {new Date().getFullYear()} BookStack. Demo store, no real orders.</div>
    </footer>
  );
}
