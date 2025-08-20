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

   useEffect(() => {
      
      
    }, []);

  // Fetch data from Firestore
  useEffect(() => {
    async function fetchPosts() {
      try {
        const snapshot = await getDocs(collection(db, "posts"));
        
        setLoading(false);

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
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="grid min-h-screen bg-stone-900 text-white">
      <Navbar />
      <main className="grid justify-center mt-40">
        <section
          className="
        grid items-center gap-8 
        sm:grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3
        max-w-6xl mx-auto 
      "
        >
          {posts.map((post) => (
            <Card key={post.id} {...post} />
          ))}
        </section>
      </main>
    </div>
  );
}
