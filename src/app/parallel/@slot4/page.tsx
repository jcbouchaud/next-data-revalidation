import { ServerCard } from "@/components/server/ServerCard";
import { revalidatePost } from "@/actions/revalidate";

export default async function Slot4Page() {
  throw new Error("This is a demo error from Slot 4!");

  return <ServerCard index={4} onRevalidate={revalidatePost.bind(null, 4)} />;
}
