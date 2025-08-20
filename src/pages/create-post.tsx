import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../firebase";
import type { User } from "firebase/auth";
import Loading from "../components/loading";
import { Link } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length < 3 || content.length < 20) return;

    await addDoc(collection(db, "posts"), {
      title,
      content,
      author: 0,
      uid: 0,
      createdAt: new Date(),
      likes: 0,
    });

    setTitle("");
    setContent("");
  };

  if (loading) return <Loading />;

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center text-stone-300">
        <Navbar />
        <p>
          Please <Link to="/sign-in"> sign in </Link> to create a post.
        </p>
      </div>
    );
  }

  return (
    <div className="text-white">
      <Navbar />
      <h1 className="text-2xl text-center mt-60 mb-10">Create New Post</h1>
      <form onSubmit={handleSubmit} className="grid justify-center gap-8">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="w-[300px] p-2 border"
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="w-[300px] max-h-[250px] min-h-[100px] p-2 border"
        />
        {title.length > 0 && title.length < 3 && (
          <div className="text-red-400 text-sm">Title must be at least 3 characters</div>
        )}
        {content.length > 0 && content.length < 20 && (
          <div className="text-red-400 text-sm">Content must be at least 20 characters</div>
        )}
        <button type="submit" disabled={title.length < 3 || content.length < 20} className="border p-2 bg-stone-700 hover:bg-stone-600">
          Add Post
        </button>
      </form>
    </div>
  );
}
