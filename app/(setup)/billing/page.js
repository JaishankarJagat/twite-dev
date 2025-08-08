import Link from "next/link";
export default function Billing() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-2">
      <Link
        href={"/v1"}
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
      <div className="pt-32 text-center">
        <div className="font-space tracking-tight opacity-60 mb-2">
          it&apos;s currently free :)
        </div>
        <h1 className="font-raleway font-black text-3xl tracking-tighter leading-none mb-2">
          you ran out of credits??
        </h1>
        <div className="font-lora opacity-80 mb-8">
          just hit me up on X and i&apos;ll hook you up (@jaishankarjagat)
        </div>
      </div>
    </main>
  );
}
