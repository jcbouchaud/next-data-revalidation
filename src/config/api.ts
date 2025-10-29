function getBaseURL() {
  if (typeof window !== "undefined") {
    // Client side
    return "";
  }
  // Server side
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const API_BASE_URL = getBaseURL();

export const API_ENDPOINTS = {
  texts: (quantity: number) =>
    `${API_BASE_URL}/api/texts?quantity=${quantity}&characters=200`,
} as const;

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface FakerTextResponse {
  status: string;
  code: number;
  total: number;
  data: Array<{
    title: string;
    author: string;
    genre: string;
    content: string;
  }>;
}

export async function fetchPost(index: number): Promise<Post> {
  const response = await fetch(API_ENDPOINTS.texts(index), {
    next: {
      revalidate: 10,
      tags: [`post-${index}`],
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result: FakerTextResponse = await response.json();
  const data = result.data[0];

  return {
    id: index,
    title: data.title,
    body: `${data.content.substring(0, 150)}... — ${data.author} (${
      data.genre
    })`,
  };
}
