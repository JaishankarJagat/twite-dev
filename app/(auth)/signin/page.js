import { signIn } from "@/auth.js";
import { auth } from "@/auth.js";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SignIn() {
  const session = await auth();
  if (session) {
    redirect("/v1");
  }
  return (
    <main className="max-w-3xl mx-auto px-6 py-2">
      <Link
        href={"/"}
        className="btn btn-neutral btn-outline font-raleway font-extrabold tracking-tighter text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        back
      </Link>
      <div className="pt-32">
        <div className="font-space tracking-tight opacity-60 text-center">
          hello there.
        </div>
        <div className="text-center font-raleway text-3xl font-black tracking-tighter mb-2">
          welcome back.
        </div>
        <div className="font-lora opacity-80 mb-10 text-center">
          enter your email to sign in or create your account.
          <br className="max-sm:hidden block" />
          no password is required.
        </div>
      </div>
      <form
        action={async (formData) => {
          "use server";
          await signIn("resend", formData);
        }}
      >
        <div className="flex flex-col items-center space-y-4">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              name="email"
              placeholder="name@whatever.com"
              required
            />
          </label>
          <button
            type="submit"
            className="font-raleway font-extrabold text-lg tracking-tighter btn btn-neutral"
          >
            sign in with email.
          </button>
        </div>
      </form>
    </main>
  );
}
