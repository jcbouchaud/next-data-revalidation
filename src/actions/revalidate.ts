"use server";

import { revalidateTag, revalidatePath } from "next/cache";

// Revalidate individual posts by tag
export async function revalidatePostAction(
  _prevState: { index: number },
  formData: FormData
): Promise<{ index: number }> {
  const index = formData.get("index") as string;
  revalidateTag(`post-${index}`);
  return { index: parseInt(index) };
}

// Revalidate entire pages by path
export async function revalidateServerPage() {
  revalidatePath("/server");
}

export async function revalidateClientPage() {
  revalidatePath("/client");
}
