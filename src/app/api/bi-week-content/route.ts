import { NextResponse } from "next/server";
import { getBiWeeklyData } from "@/lib/biWeekly";

export async function GET() {
  return NextResponse.json(getBiWeeklyData());
}
