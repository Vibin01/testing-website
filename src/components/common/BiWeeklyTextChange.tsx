import { getBiWeeklyData } from "@/lib/biWeekly";

export const BiWeeklyTextChange = async () => {
  const { description, updatedAt } = getBiWeeklyData();

  return (
    <>
      {description} — {new Date(updatedAt).toDateString()}
    </>
  );
};
