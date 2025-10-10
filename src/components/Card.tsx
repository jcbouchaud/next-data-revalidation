"use client";

import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  description: string;
  onRevalidate: () => void;
}

export function Card({ title, description, onRevalidate }: CardProps) {
  const router = useRouter();

  const handleRevalidate = () => {
    onRevalidate();
    router.refresh();
  };

  return (
    <div className="bg-white dark:bg-[#1a1a1a] border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <button
        onClick={handleRevalidate}
        className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium"
      >
        Revalidate request Tag
      </button>
    </div>
  );
}
