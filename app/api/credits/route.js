import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "no access" }, { status: 401 });
  }

  await connectMongo();
  const user = await User.findById(session.user.id);

  return NextResponse.json({ credits: user.credits || 0 });
}
