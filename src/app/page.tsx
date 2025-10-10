import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Data Revalidation Demo
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Explore different Next.js rendering patterns
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/server"
            className="bg-white dark:bg-[#1a1a1a] border border-black/[.08] dark:border-white/[.145] rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:scale-105 group"
          >
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Server Component →
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Server-side rendering with React Server Components. Data fetching
              and rendering on the server.
            </p>
          </Link>

          <Link
            href="/client"
            className="bg-white dark:bg-[#1a1a1a] border border-black/[.08] dark:border-white/[.145] rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:scale-105 group"
          >
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Client Component →
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Client-side rendering with hooks and interactivity. JavaScript
              runs in the browser.
            </p>
          </Link>

          <Link
            href="/server-action"
            className="bg-white dark:bg-[#1a1a1a] border border-black/[.08] dark:border-white/[.145] rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:scale-105 group"
          >
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Server Action (Server) →
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Server component calling server actions. Rendering happens on the
              server with streaming support.
            </p>
          </Link>

          <Link
            href="/server-action-client"
            className="bg-white dark:bg-[#1a1a1a] border border-black/[.08] dark:border-white/[.145] rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:scale-105 group"
          >
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Server Action (Client) →
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Client component calling server actions with hooks. Code runs on
              server but invoked from client.
            </p>
          </Link>

          <Link
            href="/parallel"
            className="bg-white dark:bg-[#1a1a1a] border border-black/[.08] dark:border-white/[.145] rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:scale-105 group md:col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Parallel Routes →
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Multiple routes rendered simultaneously using named slots. Each
              card is a parallel route with independent loading states.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
