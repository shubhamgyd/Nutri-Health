import { Navbar } from "../components/Navbar"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form>
          <fieldset>
            <legend>Name</legend>
            <label for="name">Name: </label>
            <input type="name" id="name" name="name"></input>
          </fieldset>
          <fieldset>
            <legend>Age</legend>
            <label for="age">Age: </label>
            <input type="age" id="age" name="age"></input>
          </fieldset>
          <fieldset>
            <legend>Gender</legend>
            <label for="gender">Gender: </label>
            <input type="text" id="gener" name="gender"></input>
          </fieldset>
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
          <button type="submit" className="login" style={{cursor:"pointer"}}>Sign Up</button>
          <div className="login">OR</div>
          <button className="login" onClick={() => navigate("/login")} style={{cursor:"pointer"}}>Log In</button>
          </div>
        </form>
      </div>
    </>
  )
}