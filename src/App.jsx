import "./App.css";
import Login from "./Component/Login & Signup/Login";
import HomePage from "./Component/HomePage Component/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  //test line by Sid
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
