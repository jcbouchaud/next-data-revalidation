import { Card } from "../Card";
import { fetchPost } from "@/config/api";

interface ServerCardProps {
  index: number;
}

export async function ServerCard({ index }: ServerCardProps) {
  const post = await fetchPost(index);

  return (
    <Card
      title={`Card ${index}: ${post.title}`}
      description={post.body}
      index={index}
    />
  );
}
