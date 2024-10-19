import './App.css';
import { DiseaseForm } from './pages/DiseaseForm';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/login" element={<Login />} />
      //   <Route path="/signup" element={<SignUp />} />
      // </Routes>
      <DiseaseForm />
  );
}

export default App;
