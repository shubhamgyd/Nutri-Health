import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Login = () => {

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="login-container">
        <form>
          <fieldset>
            <legend>Email</legend>
            <label for="email">Email: </label>
            <input type="email" id="email" name="emailId"></input>
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <label for="password">Password: </label>
            <input type="password" id="password" name="password"></input>
          </fieldset>
          <div className="LoginButton">
          <button type="submit" className="login" style={{cursor:"pointer"}}>Log In</button>
          <div className="login">OR</div>
          <button className="login" onClick={() => navigate("/signup")} style={{cursor:"pointer"}}>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
};
