import Navbar from "../components/navbar";
import Card from "../components/card";
import Footer from "../components/footer";
import { useState, useEffect } from "react";

interface CardData {
  id: string;
  image?: string;
  title: string;
  content: string;
  author?: string;
}

function Home() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        // TODO: Replace with actual API call or Firebase query
        // const response = await fetch('/api/cards');
        // const data = await response.json();
        // setCards(data);

        const mockData: CardData[] = [
          {
            id: "1",
            title: "Setting up Tailwind with Vite",
            content: `cd my-project
            npm install tailwindcss @tailwindcss/vite
            Add the @tailwindcss/vite plugin to your Vite configuration:
            import { defineConfig } from 'vite'
            import tailwindcss from '@tailwindcss/vite'

            export default defineConfig({
              plugins: [
                tailwindcss(),
              ],
            })`,
            author: "Me",
            image: "/assets/tailwindlog.png",
          },
          {
            id: "2",
            title: "Setting up Github Pages for Vite",
            content: `Add base: '/repo-name/', to vite.config.js above plugins.
            Add "deploy": "gh-pages -d dist" to package.json scripts section.
            Run npm install gh-pages --save-dev in your terminal.
            Build and deploy:
            npm run build
            npm run deploy`,
            author: "Another Author",
          },
        ];

        // Simulate loading delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCards(mockData);
      } catch (err) {
        setError("Failed to load cards");
        console.error("Error fetching cards:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
      <div className="grid min-h-screen w-full bg-stone-900 text-white">
        <Navbar />
        <main className="flex justify-center items-center w-full mt-60">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
            <p className="mt-4">Loading cards...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid min-h-screen w-full bg-stone-900 text-white">
        <Navbar />
        <main className="flex justify-center items-center w-full mt-60">
          <div className="text-center text-red-400">
            <p>Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded"
            >
              Retry
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  // Card component
  return (
    <div className="grid min-h-screen w-full bg-stone-900 text-white">
      <Navbar />
      <main className="grid justify-center w-full mt-60">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-2">
          {cards.length === 0 ? (
            <div className="col-span-full text-center text-gray-400">
              <p>No cards available</p>
            </div>
          ) : (
            cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
                author={card.author || "Unknown"}
              />
            ))
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
