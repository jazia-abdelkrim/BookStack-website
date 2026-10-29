import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library.jsx";
import AuthorsPage from "./pages/AuthorsPage.jsx";
import Auth from "./pages/Auth.jsx";

export default function App() {
  const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return (
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/authors" element={<AuthorsPage />} />
            <Route path="/sign-in" element={<Auth mode="signin" />} />
            <Route path="/register" element={<Auth mode="register" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </>
  );
}
