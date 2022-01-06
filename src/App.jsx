import "./App.css";
import Login from "./Component/Login/Login";
import HomePage from "./Component/HomePage Component/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
<<<<<<< HEAD
//hello bro
//hi bro - Sid
//this is test branch
=======
import SignUp from "./Component/SignUp/SignUp";
>>>>>>> 82859275910bbb647966f4700e2eb13d4c92b883
function App() {
  //test line by Sid
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
