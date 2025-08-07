import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST() {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "not authorised" }, { status: 401 });
    }
    await connectMongo();
    const user = await User.findById(session.user.id);

    if (user.credits <= 0) {
      return NextResponse.json(
        { error: "insufficient credits" },
        { status: 403 },
      );
    }
    user.credits -= 1;
    await user.save();
    return NextResponse.json({});
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
