import { ServerCard } from "@/components/server/ServerCard";
import { revalidatePost } from "@/actions/revalidate";

export default async function Slot3Page() {
  return <ServerCard index={3} onRevalidate={revalidatePost.bind(null, 3)} />;
}
