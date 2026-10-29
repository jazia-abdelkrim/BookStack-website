import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";

export default function CartDrawer() {
  const { open, setOpen, lines, total, inc, dec, remove } = useCart();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => { if (!open) setDone(false); }, [open]);

  return (
    <>
      <div className={"scrim" + (open ? " show" : "")} onClick={() => setOpen(false)} />
      <aside className={"drawer" + (open ? " open" : "")} aria-hidden={!open} aria-label="Cart">
        <div className="drawer-head">
          <h2>Your cart</h2>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close cart">×</button>
        </div>

        <div className="drawer-body">
          {done ? (
            <p className="empty">Order placed. This is a demo, so nothing was charged.</p>
          ) : lines.length === 0 ? (
            <p className="empty">Your cart is empty. Add a book from the library.</p>
          ) : (
            lines.map(({ book, qty }) => (
              <div className="line" key={book.id}>
                <span className="line-swatch" style={{ background: book.color }} />
                <div className="line-info">
                  <strong>{book.title}</strong>
                  <span className="muted">${book.price} each</span>
                  <div className="qty">
                    <button onClick={() => dec(book.id)} aria-label="Decrease quantity">−</button>
                    <span>{qty}</span>
                    <button onClick={() => inc(book.id)} aria-label="Increase quantity">+</button>
                    <button className="text-link remove" onClick={() => remove(book.id)}>Remove</button>
                  </div>
                </div>
                <span className="price">${book.price * qty}</span>
              </div>
            ))
          )}
        </div>

        {!done && lines.length > 0 && (
          <div className="drawer-foot">
            <div className="total"><span>Subtotal</span><strong>${total}</strong></div>
            <button className="btn btn-dark btn-lg full" onClick={() => setDone(true)}>Check out</button>
          </div>
        )}
      </aside>
    </>
  );
}
