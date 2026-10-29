import { createContext, useContext, useMemo, useReducer, useState } from "react";
import { getBook } from "../data/books.js";

const CartContext = createContext(null);

function reducer(state, action) {
  const { id } = action;
  switch (action.type) {
    case "add":
      return { ...state, [id]: (state[id] || 0) + 1 };
    case "dec": {
      const next = { ...state, [id]: (state[id] || 0) - 1 };
      if (next[id] <= 0) delete next[id];
      return next;
    }
    case "remove": {
      const next = { ...state };
      delete next[id];
      return next;
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, {});
  const [open, setOpen] = useState(false);

  const value = useMemo(() => {
    const lines = Object.entries(items).map(([id, qty]) => ({ book: getBook(id), qty }));
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: lines.reduce((n, l) => n + l.qty * l.book.price, 0),
      open,
      setOpen,
      add: (id) => { dispatch({ type: "add", id }); setOpen(true); },
      dec: (id) => dispatch({ type: "dec", id }),
      inc: (id) => dispatch({ type: "add", id }),
      remove: (id) => dispatch({ type: "remove", id }),
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
