import { useNavigate} from "react-router-dom"
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <h3 onClick={() => navigate("/")} style={{cursor:"pointer"}}>Home</h3>
        <h3 onClick={() => navigate("/login")} style={{cursor:"pointer"}}>LogIn</h3>
      </div>
    </>
  )
}