import { ServerCard } from "@/components/server/ServerCard";
import { revalidatePost } from "@/actions/revalidate";

export default async function Slot1Page() {
  return <ServerCard index={1} onRevalidate={revalidatePost.bind(null, 1)} />;
}
