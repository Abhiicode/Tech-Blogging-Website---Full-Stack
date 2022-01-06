import "./App.css";
import Login from "./Component/Login/Login";
import HomePage from "./Component/HomePage Component/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./Component/SignUp/SignUp";
import SignUp from "./Component/SignUp/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
