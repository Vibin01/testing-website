import data from "@/data/data.json";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function SeoText() {
  const index =
    Math.floor(Date.now() / 60000) % data.descriptions.length;

  return <p>{data.descriptions[index]}</p>;
}
