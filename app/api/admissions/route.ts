import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.studentName || !body?.parentPhone || !body?.classGrade) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    return NextResponse.json({ ok: true, message: "Admission enquiry received." });
  } catch {
    return NextResponse.json({ error: "Something went wrong while submitting." }, { status: 500 });
  }
}
