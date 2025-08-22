import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Loading from "../components/loading";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import type { User } from "firebase/auth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState<User | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profile, setProfile] = useState<any>(null); 
  const [loading, setLoading] = useState(true);

  // Track sign-in status and fetch profile
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setProfile(userSnap.data());
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length < 5 || content.length < 20 || title.length > 100 || content.length > 750)
      return;

    try {
      // Posts get saved in firebase db
      await addDoc(collection(db, "posts"), {
        title,
        content,
        author: profile?.displayName || user?.displayName || "anonymous",
        uid: user?.uid,
        createdAt: serverTimestamp(),
        likes: 0,
      });

      setTitle("");
      setContent("");
      toast.success(<span>Post Created</span>);
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to create post");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-transparent"></div>

      <Navbar />

      {!user ? (
        <div className="relative flex items-center justify-center min-h-screen px-6 py-32">
          <div className="w-full max-w-md">
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl shadow-black/20 text-center">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Please Sign In</h2>
              <p className="text-gray-400">
                You need to{" "}
                <Link to="/sign-in" className="text-blue-400 underline hover:text-blue-300">
                  sign in
                </Link>{" "}
                to create a post.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex items-center justify-center min-h-screen px-6 py-32">
          <div className="w-full max-w-lg">
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl shadow-black/20">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  Create New Post
                </h1>
                <p className="text-gray-400">Share your thoughts with the world</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Field */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                    placeholder="Enter a title"
                  />
                  {title.length > 0 && (title.length < 5 || title.length > 100) && (
                    <p className="mt-2 text-sm text-red-400">
                      Title must be between 5 and 100 characters
                    </p>
                  )}
                </div>

                {/* Content Field */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                    Content
                  </label>
                  <textarea
                    id="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 min-h-[120px] max-h-[280px]"
                    placeholder="Write your post here..."
                  />
                  {content.length > 0 && (content.length < 20 || content.length > 750) && (
                    <p className="mt-2 text-sm text-red-400">
                      Content must be between 20 and 750 characters
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={title.length < 3 || content.length < 20}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:scale-100 disabled:shadow-none"
                >
                  Add Post
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
