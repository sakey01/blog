import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "../firebase";
import type { User } from "firebase/auth";
import Loading from "../components/loading";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        author: user?.displayName || "Anonymous",
        uid: user?.uid,
        createdAt: serverTimestamp(),
        likes: 0,
      });

      setTitle("");
      setContent("");
      toast.success("Post created!");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to create post");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <Navbar />

      {!user ? (
        <div className="flex items-center justify-center min-h-screen">
          <p>
            Please{" "}
            <Link to="/sign-in" className="text-blue-400 underline hover:text-blue-300">
              sign in
            </Link>{" "}
            to create a post.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="text-2xl font-semibold mb-6">Create New Post</h1>

          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <div>
              <label htmlFor="title" className="block mb-1 text-sm font-medium">
                Title
              </label>
              <input
                id="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded bg-stone-800 border border-stone-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {title.length > 0 && title.length < 3 && (
                <p className="mt-1 text-sm text-red-400">Title must be at least 3 characters</p>
              )}
            </div>

            <div>
              <label htmlFor="content" className="block mb-1 text-sm font-medium">
                Content
              </label>
              <textarea
                id="content"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 rounded bg-stone-800 border border-stone-600 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] max-h-[250px]"
              />
              {content.length > 0 && content.length < 20 && (
                <p className="mt-1 text-sm text-red-400">Content must be at least 20 characters</p>
              )}
            </div>

            <button
              type="submit"
              disabled={title.length < 3 || content.length < 20}
              className="w-full py-2 rounded bg-stone-700 hover:bg-stone-600 disabled:opacity-50"
            >
              Add Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
