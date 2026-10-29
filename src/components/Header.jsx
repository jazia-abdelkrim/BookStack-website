import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Header() {
  const { count, setOpen } = useCart();
  const link = ({ isActive }) => "nav-link" + (isActive ? " active" : "");

  return (
    <header className="header">
      <Link to="/" className="brand" aria-label="BookStack home">
        <span className="brand-mark">{"</>"}</span>
        <span className="brand-name">BookStack</span>
      </Link>

      <nav className="nav" aria-label="Main">
        <NavLink to="/" end className={link}>Home</NavLink>
        <NavLink to="/library" className={link}>Library</NavLink>
        <NavLink to="/authors" className={link}>Authors</NavLink>
      </nav>

      <div className="header-actions">
        <Link to="/sign-in" className="nav-link hide-sm">Sign in</Link>
        <Link to="/register" className="btn btn-dark btn-sm hide-sm">Register</Link>
        <button className="cart-btn" onClick={() => setOpen(true)} aria-label={`Open cart, ${count} items`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.5L20 8H6" />
            <circle cx="10" cy="20.5" r="1" /><circle cx="17" cy="20.5" r="1" />
          </svg>
          {count > 0 && <span className="cart-count">{count}</span>}
        </button>
      </div>
    </header>
  );
}
