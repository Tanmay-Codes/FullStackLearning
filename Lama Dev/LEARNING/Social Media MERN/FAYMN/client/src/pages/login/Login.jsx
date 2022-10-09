import "./login.css";
import { useRef } from "react";
import { loginCall } from "../../apicalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const email = useRef(); 
  const password = useRef(); 
  const {user,isFetching, error, dispatch} = useContext(AuthContext);
  const handleClicked = (e)=>{
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value}, dispatch);
  }
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FAYMN</h3>
          <span className="loginDesc">
            Feel the Beat and the world of Music with FAYMN.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClicked}>
            <input placeholder="Email" required type="email" ref={email} className="loginInput" />
            <input placeholder="Password" required type="password" ref={password} className="loginInput" />
            <button type="submit" className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}