import Navbar from "../components/navbar";
import Card from "../components/card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

// Object component
type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firestore
  useEffect(() => {
    async function fetchPosts() {
      try {
        const snapshot = await getDocs(collection(db, "posts"));
        
        const postsList = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            content: data.content,
            author: data.author,
            likes: data.likes ?? 0,
          };
        });

        setPosts(postsList);
      } catch (error) {
        console.log("couldn't fetch post", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-transparent"></div>
      
      <Navbar />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="px-6 pt-42 pb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
              Discover Posts
            </h1>
          </div>
        </section>

        {/* Posts Section */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800/50 rounded-full mb-6">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">No posts yet</h3>
                <p className="text-gray-400">Be the first to share your story!</p>
              </div>
            ) : (
              <>
                {/* Posts Grid Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Latest Posts</h2>
                    <p className="text-gray-400">{posts.length} {posts.length === 1 ? 'post' : 'posts'} available</p>
                  </div>
                  
                  {/* Filter/Sort controls could go here */}
                  <div className="hidden sm:flex items-center space-x-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent flex-1"></div>
                  </div>
                </div>

                {/* Posts Grid */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {posts.map((post, index) => (
                    <div
                      key={post.id}
                      className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <Card {...post} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}