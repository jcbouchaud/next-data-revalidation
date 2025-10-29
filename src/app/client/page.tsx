"use client";

import { ClientCard } from "@/components/client/ClientCard";
import { RevalidatePageButton } from "@/components/RevalidatePageButton";
import { revalidatePost, revalidateClientPage } from "@/actions/revalidate";

export default function ClientPage() {
  return (
    <div className="font-sans min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Client Component
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
          Fetching random data from Faker API on the client. Click Revalidate to
          get new content!
        </p>
        <RevalidatePageButton onRevalidate={revalidateClientPage} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ClientCard index={1} />
          <ClientCard index={2} />
          <ClientCard index={3} />
          <ClientCard index={4} />
        </div>
      </div>
    </div>
  );
}
