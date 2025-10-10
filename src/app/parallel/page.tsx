import { RevalidatePageButton } from "@/components/RevalidatePageButton";
import { revalidateParallelPage } from "@/actions/revalidate";

export default function ParallelPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Parallel Routes</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
        Each card is rendered in a parallel route slot with independent loading
        states. Click Revalidate to get new content!
      </p>
      <RevalidatePageButton onRevalidate={revalidateParallelPage} />
    </>
  );
}
