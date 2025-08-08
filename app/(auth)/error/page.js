export default function Error() {
  return (
    <main className="max-w-md mx-auto pt-32 px-6">
      <div className="bg-base-200 rounded-sm border border-neutral px-6 py-4 text-center">
        <div className="font-space tracking-tight opacity-60 mb-2">oops.</div>
        <h1 className="font-raleway font-black text-3xl tracking-tighter leading-none mb-2">
          there was a server error.
        </h1>
        <div className="font-lora opacity-80">
          try again. or try contacting <br></br>@jaishankarjagat on X
        </div>
      </div>
    </main>
  );
}
