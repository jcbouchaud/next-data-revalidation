"use client";

interface RevalidatePageButtonProps {
  onRevalidate: () => void;
}

export function RevalidatePageButton({
  onRevalidate,
}: RevalidatePageButtonProps) {
  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={onRevalidate}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-semibold shadow-md hover:shadow-lg"
      >
        Revalidate Entire Page
      </button>
    </div>
  );
}
