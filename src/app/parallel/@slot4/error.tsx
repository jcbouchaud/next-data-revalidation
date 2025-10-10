"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-3 text-red-700 dark:text-red-400">
        Error in Slot 4
      </h2>
      <p className="text-red-600 dark:text-red-300 mb-4">
        {error.message || "Something went wrong!"}
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors text-sm font-medium"
      >
        Try Again
      </button>
    </div>
  );
}
