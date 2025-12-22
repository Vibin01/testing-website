// app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidatePath("/");          // homepage
  revalidatePath("/pricing");
  revalidatePath("/features");
  revalidatePath("/contact-us");

  return NextResponse.json({ ok: true });
}
