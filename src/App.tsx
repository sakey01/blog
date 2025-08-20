import "./index.css";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import CreatePost from "./pages/create-post";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/sign-up";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter basename="/blog">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
