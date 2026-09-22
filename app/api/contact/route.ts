import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.name || !body?.email || !body?.phone || !body?.message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    return NextResponse.json({ ok: true, message: "Message received." });
  } catch {
    return NextResponse.json({ error: "Something went wrong while sending the email." }, { status: 500 });
  }
}
