import { useState } from "react";
import { Link } from "react-router-dom";

export default function Auth({ mode }) {
  const register = mode === "register";
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (form.password.length < 8) return setMsg("Password must be at least 8 characters.");
    setMsg(register ? "Account created (demo)." : "Signed in (demo).");
  };

  return (
    <section className="page container auth">
      <h1 className="page-title">{register ? "Create your account" : "Sign in"}</h1>
      <form className="auth-form" onSubmit={submit}>
        {register && (
          <label>Full name<input className="input" required value={form.name} onChange={set("name")} /></label>
        )}
        <label>Email<input className="input" type="email" required value={form.email} onChange={set("email")} /></label>
        <label>Password<input className="input" type="password" required value={form.password} onChange={set("password")} /></label>
        <button className="btn btn-dark btn-lg full" type="submit">{register ? "Register" : "Sign in"}</button>
        {msg && <p className="form-msg" role="status">{msg}</p>}
        <p className="muted">
          {register ? "Already have an account? " : "New here? "}
          <Link className="text-link" to={register ? "/sign-in" : "/register"}>{register ? "Sign in" : "Register"}</Link>
        </p>
      </form>
    </section>
  );
}
