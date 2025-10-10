"use client";

import { useState, useEffect } from "react";
import { fetchPostAction } from "@/actions/posts";
import type { Post } from "@/config/api";

interface UsePostActionResult {
  post: Post | null;
  loading: boolean;
  error: Error | null;
}

export function usePostAction(index: number): UsePostActionResult {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPost() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchPostAction(index);

        if (isMounted) {
          setPost(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [index]);

  return { post, loading, error };
}
