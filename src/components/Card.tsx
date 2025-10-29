"use client";

import { revalidatePostAction } from "@/actions/revalidate";

interface CardProps {
  title: string;
  description: string;
  index: number;
}

export function Card({ title, description, index }: CardProps) {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] border border-black/[.08] dark:border-white/[.145] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <form action={revalidatePostAction}>
        <input type="hidden" name="index" value={index} />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium"
        >
          Revalidate request Tag
        </button>
      </form>
    </div>
  );
}
