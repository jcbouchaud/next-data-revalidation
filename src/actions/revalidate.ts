"use server";

import { revalidateTag, revalidatePath } from "next/cache";

// Revalidate individual posts by tag
export async function revalidatePost(index: number) {
  revalidateTag(`post-${index}`);
}

// Revalidate entire pages by path
export async function revalidateServerPage() {
  revalidatePath("/server");
}

export async function revalidateClientPage() {
  revalidatePath("/client");
}

export async function revalidateServerActionPage() {
  revalidatePath("/server-action");
}

export async function revalidateServerActionClientPage() {
  revalidatePath("/server-action-client");
}

export async function revalidateParallelPage() {
  revalidatePath("/parallel");
}
