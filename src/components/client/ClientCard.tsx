"use client";

import { Card } from "../Card";
import { CardSkeleton } from "../CardSkeleton";
import { usePost } from "@/hooks/usePost";

interface ClientCardProps {
  index: number;
  onRevalidate: () => void;
}

export function ClientCard({ index, onRevalidate }: ClientCardProps) {
  const { post, loading, error } = usePost(index * 2);

  if (loading) {
    return <CardSkeleton />;
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3 text-red-700 dark:text-red-400">
          Error
        </h2>
        <p className="text-red-600 dark:text-red-300">{error.message}</p>
      </div>
    );
  }

  if (!post) {
    return <CardSkeleton />;
  }

  return (
    <Card
      title={`Card ${index}: ${post.title}`}
      description={post.body}
      onRevalidate={onRevalidate}
    />
  );
}
