import { Suspense } from "react";
import { ServerActionCard } from "@/components/server-action/ServerActionCard";
import { CardSkeleton } from "@/components/CardSkeleton";
import { RevalidatePageButton } from "@/components/RevalidatePageButton";
import {
  revalidatePost,
  revalidateServerActionPage,
} from "@/actions/revalidate";

export default function ServerActionPage() {
  return (
    <div className="font-sans min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Server Action</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
          Fetching random data using Server Actions. Click Revalidate to get new
          content!
        </p>
        <RevalidatePageButton onRevalidate={revalidateServerActionPage} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Suspense fallback={<CardSkeleton />}>
            <ServerActionCard
              index={1}
              onRevalidate={revalidatePost.bind(null, 1)}
            />
          </Suspense>

          <Suspense fallback={<CardSkeleton />}>
            <ServerActionCard
              index={2}
              onRevalidate={revalidatePost.bind(null, 2)}
            />
          </Suspense>

          <Suspense fallback={<CardSkeleton />}>
            <ServerActionCard
              index={3}
              onRevalidate={revalidatePost.bind(null, 3)}
            />
          </Suspense>

          <Suspense fallback={<CardSkeleton />}>
            <ServerActionCard
              index={4}
              onRevalidate={revalidatePost.bind(null, 4)}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
