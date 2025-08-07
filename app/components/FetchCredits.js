import User from "@/models/User";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
export default async function fetchCredits() {
  const session = await auth();
  await connectMongo();
  const user = await User.findById(session.user.id);
  return user.credits;
}
