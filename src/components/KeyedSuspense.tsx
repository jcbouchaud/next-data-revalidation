import { Suspense, SuspenseProps } from "react";

interface KeyedSuspenseProps extends SuspenseProps {
  key?: string;
}

/**
 * A wrapper around React's Suspense component that automatically generates a unique key
 * to force fallback re-triggering on revalidation.
 *
 * **Why this is needed:**
 * When data is revalidated in Next.js (e.g., via `revalidatePath` or server actions),
 * React's Suspense boundary won't show the fallback UI again by default unless the
 * Suspense component has a different key. By automatically generating a new unique key
 * on each render, this component ensures the fallback state is always shown during
 * data refetching, providing better UX feedback to users.
 *
 * @param {ReactNode} children - The content to render when not suspended
 * @param {ReactNode} fallback - The loading UI to show during suspension
 * @param {string} [key] - Optional custom key (defaults to crypto.randomUUID())
 *
 * @example
 * ```tsx
 * <KeyedSuspense fallback={<LoadingSkeleton />}>
 *   <AsyncDataComponent />
 * </KeyedSuspense>
 * ```
 */
export function KeyedSuspense({ children, ...props }: KeyedSuspenseProps) {
  const key = props.key ?? crypto.randomUUID();

  return (
    <Suspense key={key} {...props}>
      {children}
    </Suspense>
  );
}
