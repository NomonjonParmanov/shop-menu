import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const tokenCode =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6ImxvZ2luIn0.eyJ1c2VybmFtZSI6ImpvaG4zMiIsInBhc3N3b3JkIjoiODc2NTQzMjEiLCJpYXQiOjE1MTYyMzkwMjJ9.cQt47uR0DUks_4U2JvC-sTbrZAFXlWWAPHnSShF6FYo";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username: "john32",
      password: "87654321",
    };
    if (user.username === username && user.password === password) {
      localStorage.setItem("token", tokenCode);
      toast.success("Login successful");
      navigate("/admin");
    } else {
      toast.error("Username or password is incorrect");
    }
  };
  return (
    <div className="container login">
      <form onSubmit={handleLogin} action="">
        <label htmlFor="">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          required
        />
        <label htmlFor="">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          required
        />
        <button type="submit">LOGIN</button>
      </form>
      <ToastContainer
        autoClose={400}
        style={{ left: 0, bottom: 10, width: 250 }}
      />
    </div>
  );
};

export default Login;
