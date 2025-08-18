import Navbar from "../components/navbar";
import Card from "../components/card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  likeCount?: number;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const snapshot = await getDocs(collection(db, "posts"));
       
        const postsList = snapshot.docs.map((doc) => {
          const data = doc.data();
          console.log(doc);
          return {
            id: doc.id,
            title: data.title,
            content: data.content,
            author: data.author,
            likeCount: data.likeCount,
          };
        });

        setPosts(postsList);
      } catch (error) {
        console.log("couldn't fetch post", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <Navbar />

      <main className="px-4 py-40 grid justify-center">
        <section
          className="
        grid gap-8 
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
