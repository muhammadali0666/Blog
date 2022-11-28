import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../Components/Logo";
import "./login.css"

export const Login = () => {
  const Navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(
      "https://n36-blog.herokuapp.com/login?login=" +
        login +
        "&password=" +
        password
    );
    const { token } = await res.json();

    if (token) {
      window.localStorage.setItem("token", token);
      Navigate("/all");
    }
    else if (token === null) {
      Navigate("/login")
    }
  }

  return (
    <div className="container mt-3">
      <Logo />
      <h1 className="paragraph">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};
