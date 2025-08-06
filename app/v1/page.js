"use client";

import { useState } from "react";
import TemplateTweet from "../components/TemplateTweet";
import SectionFooter from "../components/SectionFooter";

export default function V1() {
  const [journal, setJournal] = useState("");
  const [tweets, setTweets] = useState(null); // null | string | object
  const [loading, setLoading] = useState(false);

  async function handleGenerate(e) {
    e.preventDefault();
    setLoading(true);
    setTweets(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: journal }),
      });

      const data = await res.json();
      console.log("GPT Response:", data);
      setTweets(data); // directly set object with { success, tweets }
    } catch (err) {
      setTweets("an error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="text-neutral">
      {/* section: header */}
      <section className="max-w-3xl px-6 pt-2 mx-auto">
        <div className="navbar bg-base-200 rounded-sm border-neutral border">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost sm:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-lora opacity-80"
              >
                <li>
                  <a>credits: 100</a>
                </li>
                <li>
                  <a>billing</a>
                </li>
                <li>
                  <a>logout</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl font-raleway font-extrabold tracking-tighter">
              twite.dev
            </a>
          </div>
          <div className="navbar-center hidden sm:flex">
            <ul className="menu menu-horizontal px-1 font-lora opacity-80">
              <li>
                <a>credits: 100</a>
              </li>
              <li>
                <a>billing</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end max-sm:hidden">
            <a className="btn btn-ghost text-xl fot-raleway font-extrabold tracking-tighter">
              logout
            </a>
          </div>
        </div>
      </section>

      {/* section: journal input */}
      <section className="max-w-3xl mx-auto px-6 pt-32 text-center max-sm:text-start">
        <div className="font-space tracking-tight opacity-60 mb-2">
          stuck with writing?
        </div>
        <h1 className="font-raleway font-black text-3xl tracking-tighter leading-none mb-2">
          tell me what you did today.
        </h1>
        <div className="font-lora opacity-80 mb-4">
          as you get ~100 credits a month... i would recommend you use it 3x a
          day. so keep coming back every third of your day.
        </div>

        <textarea
          className="textarea textarea-neutral w-full font-space mb-6 border-1"
          placeholder="what did you do today?"
          rows={6}
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
        />

        <button
          className="btn btn-neutral font-raleway font-extrabold text-lg mb-32 max-sm:w-full"
          onClick={handleGenerate}
          disabled={loading || !journal}
        >
          {loading ? (
            <div>
              generating{" "}
              <span className="loading loading-dots loading-sm" />{" "}
            </div>
          ) : (
            "show me my tweets."
          )}
        </button>
        {!loading && tweets === "an error occurred" && (
          <div className="font-raleway tracking-tighter font-extrabold text-xl text-error leading-none mb-32">
            <span className="opacity-60">oops! something went wrong.</span>{" "}
            <br />
            <span className="text-3xl opacity-100">try again.</span>
          </div>
        )}
        {!loading &&
          tweets &&
          typeof tweets === "object" &&
          tweets.success === false && (
            <div className="font-raleway tracking-tighter font-extrabold text-xl text-neutral leading-none mb-32">
              <span className="text-3xl opacity-100">nothing tweetable.</span>
              <br />
              <span className="opacity-60">
                be more raw + expressive + specific.
              </span>
            </div>
          )}
        {!loading && tweets && typeof tweets === "object" && tweets.success && (
          <div className="bg-base-100 rounded-sm border-neutral border mb-32">
            {tweets.tweets.map((t, i) => (
              <div key={i}>
                <TemplateTweet tweet={t} index={i} />
                {i !== tweets.tweets.length - 1 && (
                  <hr className="text-neutral" />
                )}
              </div>
            ))}
          </div>
        )}
      </section>
      {/* section: footer */}
      <SectionFooter />
    </main>
  );
}
