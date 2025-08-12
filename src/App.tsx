import "./App.css";

function App() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10 text-gray-100 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <article className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Setting up Tailwind with Vite</h2>
        <p className="mb-4">
          Or just click{" "}
          <a
            href="https://tailwindcss.com/docs/installation/using-vite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline"
          >
            here
          </a>
        </p>
        <ol className="list-decimal list-inside space-y-3">
          <li>cd my-project</li>
          <li>npm install tailwindcss @tailwindcss/vite</li>
          <li>
            Add the <code>@tailwindcss/vite</code> plugin to your Vite configuration:
            <pre className="bg-gray-900 text-sm p-4 rounded mt-2 overflow-x-auto">
              {`import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})`}
            </pre>
          </li>
        </ol>
      </article>

      <article className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Setting up Github Pages for Vite{" "}
          <span className="text-gray-400 italic">(assuming it's already setup)</span>
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Add <code className="bg-gray-900 px-1 rounded">{`base: '/repo-name/',`}</code> to{" "}
            <code className="bg-gray-900 px-1 rounded">vite.config.js</code> above plugins.
          </li>
          <li>
            Add <code className="bg-gray-900 px-1 rounded">{`"deploy": "gh-pages -d dist"`}</code>{" "}
            to <code className="bg-gray-900 px-1 rounded">package.json</code> scripts section.
          </li>
          <li>
            Run <code className="bg-gray-900 px-1 rounded">npm install gh-pages --save-dev</code> in
            your terminal.
          </li>
          <li>
            Build and deploy: <br />
            <code className="bg-gray-900 px-1 rounded">npm run build</code> <br />
            <code className="bg-gray-900 px-1 rounded">npm run deploy</code>
          </li>
        </ol>
      </article>
    </main>
  );
}

export default App;
