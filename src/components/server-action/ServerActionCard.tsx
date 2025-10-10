import { Card } from "../Card";
import { fetchPostAction } from "@/actions/posts";

interface ServerActionCardProps {
  index: number;
  onRevalidate: () => void;
}

export async function ServerActionCard({
  index,
  onRevalidate,
}: ServerActionCardProps) {
  const post = await fetchPostAction(index);

  return (
    <Card
      title={`Card ${index}: ${post.title}`}
      description={post.body}
      onRevalidate={onRevalidate}
    />
  );
}
