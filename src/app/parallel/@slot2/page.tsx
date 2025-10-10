import { ServerCard } from "@/components/server/ServerCard";
import { revalidatePost } from "@/actions/revalidate";

export default async function Slot2Page() {
  return <ServerCard index={2} onRevalidate={revalidatePost.bind(null, 2)} />;
}
