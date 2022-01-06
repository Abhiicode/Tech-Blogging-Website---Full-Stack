import "./App.css";
import Login from "./Component/Login/Login";
import HomePage from "./Component/HomePage Component/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./Component/SignUp/SignUp";
<<<<<<< HEAD
import SignUp from "./Component/SignUp/SignUp";
//Bc aaj to lode lag gye
//lode toh lag gaye par rohit bechare ke
//Test ho rha he
function App() {
=======
function App() {
  //test line by Sid
  //I am abhi bro
>>>>>>> Sid
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
