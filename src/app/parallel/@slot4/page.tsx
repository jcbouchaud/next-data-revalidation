import { ServerCard } from "@/components/server/ServerCard";
import { revalidatePost } from "@/actions/revalidate";

export default async function Slot4Page() {
  return <ServerCard index={4} onRevalidate={revalidatePost.bind(null, 4)} />;
}
