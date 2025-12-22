// app/components/SeoText.tsx
import data from "@/data/data.json";

// 🚨 IMPORTANT: Disable caching
export const dynamic = "force-dynamic";

export default function BiWeeklyTextChange() {
  const index =
    Math.floor(Date.now() / 60000) % data.descriptions.length;

  return (
    <p>{data.descriptions[index]}</p>
  );
}
