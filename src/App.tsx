import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CreatePost from "./pages/create-post";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter basename="/blog">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
