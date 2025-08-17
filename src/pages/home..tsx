import Navbar from "../components/navbar";
import Card from "../components/card";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const posts = [
    {
      id: uuidv4(),
      title: "Creating a Post",
      content: "How would I create a post on this blog page?",
      author: "Owner",
    },
    { id: uuidv4(), title: "setting up tailwind", content: "Coming soon", author: "Myself" },
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <Navbar />

      <main className="px-4 py-20">
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
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
