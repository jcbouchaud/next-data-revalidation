import { Card } from "../Card";
import { fetchPost } from "@/config/api";

interface ServerCardProps {
  index: number;
  onRevalidate: () => void;
}

export async function ServerCard({ index, onRevalidate }: ServerCardProps) {
  const post = await fetchPost(index);

  return (
    <Card
      title={`Card ${index}: ${post.title}`}
      description={post.body}
      onRevalidate={onRevalidate}
    />
  );
}
