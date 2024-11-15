import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../../auth.css";
import api from "../../services/api.js";

function Login() {
  const navigate = useNavigate();

  //Data
  const emailRef = useRef();
  const passwordRef = useRef();

  //Handler
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { data: token } = await api.post("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      localStorage.setItem("token", token);
      navigate("/usersList");
    } catch (error) {
      alert("Wrong Email or Password");
    }
  }

  return (
    <div className="flex">
      <form className="container" onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>
        <div className="inputBox">
          <input
            ref={emailRef}
            className="input"
            type="email"
            placeholder="Email"
            required
          />
          <i className="bx bxs-envelope"></i>
        </div>

        <div className="inputBox">
          <input
            ref={passwordRef}
            className="input"
            type="password"
            placeholder="Password"
            required
          />
          <i className="bx bxs-lock-alt icon"></i>
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <Link to={"/"} className="account">
          <p>Don't have an account?</p>
          <p>Sign In</p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
