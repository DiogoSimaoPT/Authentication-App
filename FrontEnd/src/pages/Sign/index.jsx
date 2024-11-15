import "../../auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api.js";

function Sign() {
  const navigate = useNavigate();
  //Data
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  //Handler
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/sign", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      navigate("/login");
    } catch (error) {
      alert("Something went wrong");
    }

    console.log(nameRef);
  }

  return (
    <div className="flex">
      <form className="container" onSubmit={handleSubmit}>
        <h2 className="title">Sign in</h2>

        <div className="inputBox">
          <input
            ref={nameRef}
            className="input"
            type="text"
            placeholder="Name"
            required
          />
          <i className="bx bxs-user"></i>
        </div>

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
          Sign in
        </button>

        <Link to={"/login"} className="account">
          <p>Already have an account?</p>
          <p>Login</p>
        </Link>
      </form>
    </div>
  );
}

export default Sign;
