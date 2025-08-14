import "./index.css";
import Home from "./pages/home";
import CreateBlog from "./pages/create-blog";
import SignIn from "./pages/sign-in";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;