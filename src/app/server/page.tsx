import { ServerCard } from "@/components/server/ServerCard";
import { CardSkeleton } from "@/components/CardSkeleton";
import { RevalidatePageButton } from "@/components/RevalidatePageButton";
import { revalidatePost, revalidateServerPage } from "@/actions/revalidate";
import { Suspense } from "react";

export default function ServerPage() {
  return (
    <div className="font-sans min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Server Component
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
          Fetching random data from Faker API on the server. Click Revalidate to
          get new content!
        </p>
        <RevalidatePageButton onRevalidate={revalidateServerPage} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Suspense fallback={<CardSkeleton />}>
            <ServerCard index={1} />
          </Suspense>

          <Suspense fallback={<CardSkeleton />}>
            <ServerCard index={2} />
          </Suspense>

          <Suspense fallback={<CardSkeleton />}>
            <ServerCard index={3} />
          </Suspense>

          <Suspense fallback={<CardSkeleton />}>
            <ServerCard index={4} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
