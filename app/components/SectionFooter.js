export default function SectionFooter() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-5">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content px-6 py-5 rounded-sm font-lora border border-neutral">
        <aside>
          <div className="font-raleway font-extrabold text-2xl tracking-tighter">
            twite.dev
          </div>
          <p>
            build in public. stay visible.
            <br />
            copyright &copy; {new Date().getFullYear()}
          </p>
        </aside>
        <nav>
          <h6 className="footer-title font-raleway font-bold tracking-tighter text-lg lowercase">
            check out
          </h6>
          <a className="link link-hover">reflact.dev</a>
          <a className="link link-hover">jagoff.dev</a>
        </nav>
        <nav>
          <h6 className="footer-title font-raleway font-bold tracking-tighter text-lg lowercase">
            the builder
          </h6>
          <a className="link link-hover">about me</a>
          <a className="link link-hover">contact</a>
          <a className="link link-hover">jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title font-raleway font-bold tracking-tighter text-lg lowercase">
            Legal
          </h6>
          <a className="link link-hover">terms of use</a>
          <a className="link link-hover">privacy policy</a>
          <a className="link link-hover">refund policy</a>
        </nav>
      </footer>
    </section>
  );
}
