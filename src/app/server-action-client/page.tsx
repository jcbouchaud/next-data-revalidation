"use client";

import { ServerActionClientCard } from "@/components/server-action/ServerActionClientCard";
import { RevalidatePageButton } from "@/components/RevalidatePageButton";
import {
  revalidatePost,
  revalidateServerActionClientPage,
} from "@/actions/revalidate";

export default function ServerActionClientPage() {
  return (
    <div className="font-sans min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Server Action (Client)
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
          Client component calling Server Actions. Click Revalidate to get new
          content!
        </p>
        <RevalidatePageButton onRevalidate={revalidateServerActionClientPage} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServerActionClientCard
            index={1}
            onRevalidate={revalidatePost.bind(null, 1)}
          />
          <ServerActionClientCard
            index={2}
            onRevalidate={revalidatePost.bind(null, 2)}
          />
          <ServerActionClientCard
            index={3}
            onRevalidate={revalidatePost.bind(null, 3)}
          />
          <ServerActionClientCard
            index={4}
            onRevalidate={revalidatePost.bind(null, 4)}
          />
        </div>
      </div>
    </div>
  );
}
