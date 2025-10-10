"use server";

import { fetchPost, type Post } from "@/config/api";

export async function fetchPostAction(index: number): Promise<Post> {
  return fetchPost(index);
}
