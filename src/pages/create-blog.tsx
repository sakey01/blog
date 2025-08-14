import { useState } from "react";
import Navbar from "../components/navbar";

const CreateBlog = () => {
  const [input, setInput] = useState("");

  return (
    <div className="grid min-h-screen w-full bg-stone-900 text-white">
      <Navbar />
      <input
        name="blog input"
        type="text"
        value={input}
        placeholder="Start your blog..."
        onChange={() => {
          setInput(input);
        }}
        className=" p-2"
      />
    </div>
  );
};

export default CreateBlog;
