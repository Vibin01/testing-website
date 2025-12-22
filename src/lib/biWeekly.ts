import data from "@/data/data.json";

export function getBiWeeklyData() {
  const INTERVAL_MS = 60 * 1000;
  const index =
    Math.floor(Date.now() / INTERVAL_MS) % data.descriptions.length;

  return {
    description: data.descriptions[index],
    updatedAt: new Date().toISOString(),
  };
}
