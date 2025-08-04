"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [journal, setJournal] = useState("");
  const dummy_array = [
    {
      tweet:
        "generated tweets will appear here.\n\nmy goal?\nmake sharing easier.\n\nbuild in public. stay visible.",
      suggested_media: "",
    },
  ];
  const [tweets, setTweets] = useState(dummy_array);
  const brainfog = `  slept at 9pm last night and woke up at 11pm and then… nothing. just couldn’t move. like my body was made of wet cement. sore everywhere, heavy everywhere. every time i tried to get up, my brain was like nah bro, stay. and i stayed. i must’ve blinked and it was already morning and somehow i was still lying in bed like an unused feature in an old codebase. no motivation. no spark. no lightbulb. just fog. thick, heavy fog. and not the cool cinematic kind either.

  dragged myself to the desk around midday thinking maybe, maybe, once i open the editor, things would click. spoiler: they didn’t. i stared at the screen for like 30 minutes. almost convinced myself to start doing something bigger but ended up just completing the footer of the SaaS landing page. and honestly even that felt like a f***ing mountain. aligned some links. adjusted the padding. slapped on the copyright text. and i was like… done. not mentally, but done.

  after that? brain straight up went into survival mode. opened netflix for “a quick break” and then suddenly i was two full seasons into ozark. two. and yeah i skipped through parts but still. that show is insane. it’s just people making bad decisions and cleaning money and whispering all the time. i don’t know why i kept watching it. maybe because doing anything else felt like more effort. i wasn’t even fully enjoying it, just passively absorbing pixels like a zombie in decent lighting.

  i didn’t journal. didn’t check my emails. didn’t even open my planner. the day just slid past like an uncommitted git branch. no progress. no clarity. just noise. felt restless but lazy at the same time—worst combo. too tired to work, too wired to rest.

  and now it’s 2am and i’m writing this hoping tomorrow doesn’t feel like this again. some days you ship features. some days you binge ozark and pretend footer sections count as productivity. we move.`;
  const brainfog_array = [
    {
      tweet:
        "slept at 9pm, woke up at 11pm, and then... nothing.\nfelt like wet cement. every move was a no from my brain.\nblinked and it was morning, still in bed like an unused feature in old code.\n\nno spark. no motivation. just thick, heavy fog. not the cool kind.",
      suggested_media: "",
    },
    {
      tweet:
        "dragged myself to the desk midday hoping editing would click.\n\n30 mins staring at the screen.\n\nended up finishing the footer of the SaaS landing page.\n\nlinks aligned.\npadding adjusted.\ncopyright slapped on.\n\nfelt like climbing a mountain but... done. not really.",
      suggested_media: "Screenshot of the SaaS landing page footer",
    },
    {
      tweet:
        "after that, brain hit survival mode.\n\nopened netflix for ‘quick break’\n\n2 seasons of Ozark later...\n\njust people making bad decisions, money laundering, and whispering.\n\nwasn’t enjoying it, just passively absorbing pixels like a pixel zombie in decent lighting.",
      suggested_media: "",
    },
    {
      tweet:
        "no journaling. no emails. no planner. day slid past like an uncommitted git branch.\n\nrestless but lazy.\n\ntoo tired to work, too wired to rest.\n\n2am now, writing this hoping tomorrow isn’t like today.\n\nsome days ship features. some days binge Ozark and pretend footer fixes count.",
      suggested_media: "",
    },
  ];
  const notbad = `  today sat somewhere in the middle—not a banger, not a waste. just a solid little blip in the timeline where i got some stuff done and also lived a little. woke up feeling… neutral. not sluggish, not fired up. just kinda there. no existential crisis, no fire in my veins either. but i’ll take it. opened the laptop around 11ish, brain half-loaded, and bam—had this stupidly simple idea out of nowhere. what if i turned my dev journals into tweets? like short, raw, high-signal pieces of my day. no fancy graphics, just me talking into the void and hoping someone out there nods. felt like a vibe.

  so i pulled out my pen and started scribbling. mapped it out in like an hour. nothing major—just a loose structure and a few ideas for the landing page. then i got straight to work. took me maybe 3-4 hours to build a basic but clean landing page. pretty proud of how fast that came together. simple CTA, one punchy headline, slightly oversized font, and a cheeky little emoji in the copy. real me stuff. might even ship it this week if i don’t change the idea three more times lol.

  after that i decided not to force anything else. just closed the laptop and leaned into chill mode. curled up with this book i’ve been reading for a while. one of those ones that kinda crawls into your head without asking for permission. then later in the evening, i had this podcast playing while i cleaned my room. halfway through the guy goes, “we are all stardust” and i just froze. like what??? excuse me?? man’s just casually dropping metaphysical bombs while i’m folding my t-shirt. it hit though. we are stardust. recycled atoms. same stuff as stars and black holes and dead planets. but also here. alive. listening to podcasts. what the actual f**k.

  anyway, wrapped the night by heading out with some friends. ended up at this arcade. proper old school. neon lights, loud music, bumpy cars. we did like four rounds. screamed like kids. laughed till our stomachs hurt. got back with ringing ears and a sore neck but honestly? worth it.

  today wasn’t legendary. but it mattered. and i’m cool with that.`;
  const notbad_array = [
    {
      tweet:
        "woke up neutral. no fire in the veins, no existential crisis—just there.\n\nhad this silly idea: turn dev journals into raw, tweet-sized vibes. no fancy stuff. just me talking into the void, hoping someone nods back.\n\nfelt like a vibe. let’s see where it goes.",
      suggested_media: "",
    },
    {
      tweet:
        "spent 3-4 hours building a quick landing page for this new idea:\n\n• simple CTA\n• punchy headline\n• slightly oversized font\n• cheeky emoji\n\nreal me energy. might ship it this week... if i don’t change my mind 3 more times lol.",
      suggested_media: "Screenshot of the landing page with headline and CTA",
    },
    {
      tweet:
        "chill mode activated:\n\nbook creeps in, podcast drops metaphysical bombs (“we are stardust”) while i clean my room.\n\njust folding shirts and suddenly—wait, what?\n\nsame atoms as stars and black holes but here i am, listening.\n\nwhat the actual f**k.",
      suggested_media: "",
    },
    {
      tweet:
        "ended the night with some friends at an arcade.\n\nneon lights\nloud music\nbumpy cars\n\nscreamed like kids\nlaughed till stomachs hurt\n\nringing ears, sore neck, totally worth it.\n\ntoday wasn’t legendary. but it mattered. and that’s cool.",
      suggested_media: "Photo of arcade neon lights or arcade game controllers",
    },
  ];
  const crushedit = `  woke up at 4 am today. no snoozing. no dragging myself out of bed. just popped up like it was my day. and it was. something in the air just told me today’s gonna hit. laced up, stepped out, and the streets were dead silent. everything felt slow, still waking up—except me.

  went for a run. early morning mist, breath fogging up, legs light. then outta nowhere, this dog starts chasing me. full sprint. for a second i was terrified, next second i was flying. ran my first sub 6 minute kilometer without even realizing. not planned. not trained. just survival mode turned into speed mode. i think that dog might’ve unlocked something in me lol.

  came back home buzzing. straight into a cold shower. and man… that hit. something about stepping out of freezing water into the warmth of a new day just makes you feel invincible. like nothing can touch you. i was standing there, dripping wet, thinking “yeah… i’m on something else today.”

  made myself some food. simple stuff. fuel. then sat down for what ended up being a 6 hour deep work session. no distractions. no second-guessing. just flow. full tunnel vision. honestly? best work session i’ve ever had. every click, every line of code, every bug fix—it all made sense. like i wasn’t even trying. just moving.

  and by the time i stood up, it hit me: i finished it. the saas i’ve been grinding on? done. functional. beautiful. alive. from idea to execution—it’s real now. and it works. i tested it ten different ways just to feel it again. the dopamine? unmatched.

  grabbed a quick lunch and jumped straight back in. scheduled the product hunt launch for sunday. did a whole bunch of launch day prep. banners, copy, tags. cleaned up the pitch. this thing is going live and i can feel it in my veins. it’s not just hype. it’s momentum. like something’s about to pop. and i’m ready for it.

  today was one of those days that reminds you who you are. not who you’re trying to be. not who you’re pretending to be. just you. locked in. tuned out. building something real.`;
  const crushedit_array = [
    {
      tweet:
        "woke up at 4am. no snooze. no struggle.\n\nstepped outside and the streets were dead silent.\n\neverything slow and waking up... except me.\n\nfelt like today was gonna hit. and yeah, it did.",
      suggested_media: "",
    },
    {
      tweet:
        "went for a run and outta nowhere a dog chases me.\n\nfull sprint.\n\nfor a sec, terrified. then flying.\n\nran my first sub 6-minute km without even trying.\n\nsurvival mode turned speed mode.\n\nthat dog might’ve unlocked something lol.",
      suggested_media: "",
    },
    {
      tweet:
        "cold shower after the run hit different.\n\nstepping from freezing water into warm morning light feels like invincibility.\n\nstanding there dripping, thinking: damn, i’m on something else today.",
      suggested_media: "",
    },
    {
      tweet:
        "6 hours deep in flow.\n\nno distractions.\nno second-guessing.\n\njust clicks, code, bug fixes that all made sense.\n\nbest work session i've had.\n\nand btw… finished the SaaS i've been grinding on.\n\nit’s alive. and it works.",
      suggested_media: "Screenshot of SaaS UI or code editor with working app",
    },
    {
      tweet:
        "grabbed quick lunch, jumped back in.\n\nscheduled Product Hunt launch for Sunday.\n\nbanners, copy, tags.\n\npitch cleaned up.\n\nthis thing’s going wild and i feel it in my veins.\n\nnot hype. momentum. something’s about to pop. i’m ready.",
      suggested_media: "",
    },
  ];
  return (
    <main className="text-neutral lowercase">
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
                  <a>demo</a>
                </li>
                <li>
                  <a>pricing</a>
                </li>
                <li>
                  <a>get started</a>
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
                <a>demo</a>
              </li>
              <li>
                <a>pricing</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end max-sm:hidden">
            <a className="btn btn-ghost text-xl fot-raleway font-extrabold tracking-tighter">
              get started.
            </a>
          </div>
        </div>
      </section>
      {/* section: hero */}
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="font-space tracking-tight opacity-60 mb-2">
          i built this because...
        </div>
        <h1 className="font-raleway font-black text-4xl tracking-tighter leading-none mb-2">
          i never knew what
          <br className="sm:hidden" /> to tweet.
          <br />
          but i knew i had to.
        </h1>
        <div className="font-lora text-lg opacity-80 mb-8">
          just tell it what you did. <br className="sm:hidden" />
          it’ll write what you can post.
        </div>
        <button className="btn btn-neutral font-raleway font-extrabold text-lg">
          i need this.
        </button>
      </section>
      {/* section: why this exists */}
      <section className="bg-base-200">
        <div className=" max-w-3xl mx-auto py-32 px-6">
          <div className="flex sm:flex-row max-sm:flex-col sm:space-x-4 sm:items-center sm:justify-center max-sm:space-y-4">
            <div className="h-full">
              <Image
                src="/jagat-twitter.gif"
                priority
                width={800}
                height={500}
                unoptimized
                alt="marc hello gif"
                className="rounded-sm border-neutral border-2"
              />
            </div>
            <div className="h-full max-sm:text-center">
              <div className="font-space tracking-tight opacity-60 mb-2">
                why this exists?
              </div>
              <h1 className="font-raleway font-black text-3xl tracking-tighter leading-none mb-2">
                sharing should not be harder than building.
              </h1>
              <div className="font-lora mb-8 opacity-80">
                i built this because i got tired of staring at the “What’s
                happening?” box. i had logs. i had notes. i had thoughts. but
                turning that into something worth posting? tiring fosho.
              </div>
              <button className="btn btn-neutral font-raleway font-extrabold text-lg">
                i agree.
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* section: sample demo */}
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="font-space tracking-tight opacity-60 mb-2">
          see it in action...
        </div>
        <h1 className="font-raleway font-black text-3xl tracking-tighter leading-none mb-2">
          i made a few samples for you.
        </h1>
        <div className="font-lora opacity-80 mb-8">
          i generated a few tweets using 3 journals of mine. pick one that looks
          similar to your day.
        </div>
        <div className="grid sm:grid-cols-3 max-sm:grid-rows-3 gap-4 tracking-tighter mb-4">
          <button
            className="btn btn-neutral btn-outline font-bold font-raleway text-lg w-full border-1"
            onClick={() => {
              setJournal(brainfog);
              setTweets(brainfog_array);
            }}
          >
            brain fog central
          </button>
          <button
            className="btn btn-neutral btn-outline font-bold font-raleway text-lg w-full border-1"
            onClick={() => {
              setJournal(notbad);
              setTweets(notbad_array);
            }}
          >
            not bad, not great
          </button>{" "}
          <button
            className="btn btn-neutral btn-outline font-bold font-raleway text-lg w-full border-1"
            onClick={() => {
              setJournal(crushedit);
              setTweets(crushedit_array);
            }}
          >
            crushed it
          </button>
        </div>
        <textarea
          className="textarea textarea-neutral w-full font-space mb-4 border-1"
          placeholder="pick a journal 👆"
          value={journal}
          rows={6}
          readOnly
        ></textarea>
        <div className="bg-base-100 rounded-sm border-neutral border">
          {tweets.map((tweet, index) => (
            <div key={index} className=" text-start normal-case">
              <div className="px-4 py-3">
                <div className="flex flex-row items-start space-x-2">
                  <Image
                    src={"/twitter-profile.png"}
                    width={35}
                    height={25}
                    alt="twitter-profile"
                  />
                  <div className="w-full">
                    <div className="font-inter normal-case flex flex-row items-center space-x-1 leading-none">
                      <div className="font-bold">
                        <span className="max-sm:hidden">Indie </span>Developer
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 text-sky-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="text-gray-500">
                        <span className="max-sm:hidden">@TwitterHandle</span>
                        <span className="sm:hidden">@Twitter</span>
                      </div>
                      <div className="text-gray-500">· 18h</div>
                    </div>
                    <div className="mb-3">
                      <pre className="whitespace-pre-wrap font-inter">
                        {tweet.tweet}
                      </pre>
                      {tweet.suggested_media && (
                        <div>(Suggested Media → {tweet.suggested_media})</div>
                      )}
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row space-x-0.5 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-5 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                          />
                        </svg>
                        <div className="text-sm text-gray-500">213</div>
                      </div>
                      <div className="flex flex-row space-x-0.5 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-5 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                          />
                        </svg>

                        <div className="text-sm text-gray-500">44</div>
                      </div>
                      <div className="flex flex-row space-x-0.5 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-5 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                        <div className="text-sm text-gray-500">634</div>
                      </div>
                      <div className="flex flex-row space-x-0.5 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-5 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                        <div className="text-sm text-gray-500">56k</div>
                      </div>
                      <div className="flex flex-row space-x-0.5 items-center max-sm:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-5 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                          />
                        </svg>
                        <div className="text-sm text-gray-500">24</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {index !== tweets.length - 1 && <hr className="text-neutral" />}
            </div>
          ))}
        </div>
      </section>
      {/* section: wanna try? */}
      <section className="bg-base-200">
        <div className="max-w-3xl px-6 py-32 mx-auto text-center">
          <div className="font-space tracking-tight opacity-60 mb-2">
            wanna try?
          </div>
          <h1 className="font-raleway font-black text-3xl tracking-tighter leading-none mb-2">
            you can... right now.
          </h1>
          <div className="font-lora mb-4 opacity-80">
            no payment nonsense. just play around for free.
          </div>
          <div className="grid grid-cols-3 gap-4 place-items-center text-center text-lg mb-8 font-bold font-raleway tracking-tighter">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.3}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l4-4m0 0l-4-4m4 4h-14v14"
                />
              </svg>
            </div>
            <div>
              <div className="text-5xl">🥳</div>
              <div>it&apos;s a new day</div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.3}
                stroke="currentColor"
                className="size-10 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l4-4m0 0l-4-4m4 4h-14v14"
                />
              </svg>
            </div>
            <div className="normal-case">
              <div className="text-5xl">🕰️</div>
              <div>upload them</div>
            </div>
            <div></div>
            <div>
              <div className="text-5xl">💼</div>
              <div>you do stuff</div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.3}
                stroke="currentColor"
                className="size-10 rotate-270"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l4-4m0 0l-4-4m4 4h-14v14"
                />
              </svg>
            </div>
            <div>
              <div className="text-5xl">😇</div>
              <div>generate tweets</div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.3}
                stroke="currentColor"
                className="size-10 rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l4-4m0 0l-4-4m4 4h-14v14"
                />
              </svg>
            </div>
          </div>
          <button className="btn btn-neutral font-raleway font-extrabold text-lg">
            let me try.
          </button>
        </div>
      </section>
      {/* section: doubts */}
      <section className="max-w-3xl mx-auto text-center px-6 py-32">
        <div className="font-space tracking-tight opacity-60 mb-2">
          something troubling you?
        </div>
        <h1 className="font-raleway font-black text-3xl tracking-tighter leading-none mb-2">
          your troubles, answered.
        </h1>
        <div className="font-lora mb-4 opacity-80">
          have more? drop a dm @jaishankarjagat (
          <span className="normal-case">X</span>)
        </div>
        <div className="join join-vertical bg-base-200 text-start">
          {[
            {
              question: "what's the tool actually doing?",
              answer:
                'it turns your messy and honest dev journal into tweets and... "sounds like you". no fake polish and no AI cringeness',
            },
            {
              question: "what model does it use?",
              answer:
                "OpenAI's GPT-4 mini with a custom prompt that i personally tuned for indie devs who are building in public.",
            },
            {
              question: "is this for viral growth?",
              answer:
                "nope. this is building honest momentum. it a tweet blows up... great. but the point is consistency without overthinking. there are no promises from my side.",
            },
            {
              question: "is this free?",
              answer:
                "yes. like every dev... i am validating this product as well. so this is like the mvp. currently yes it is free!",
            },
            {
              question: "is this AI generated fluff?",
              answer:
                "nope. it is ai but... it is based on what you actually did. it's you but in the form of a tweet.",
            },
            {
              question: "will it steal my idea?",
              answer:
                "not at all, your journal is never stored or used for training. it's between you the ai.",
            },
            {
              question: "what if i write like a tired racoon?",
              answer:
                "even better. it is truly built to understand the 2am chaos, emotional rambling, and semi-poetic breakdowns. it thrives in the racoon energy.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow join-item border-neutral border"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-bold font-raleway tracking-tighter">
                {faq.question}
              </div>
              <div className="collapse-content text-sm opacity-80 font-lora">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* section: footer */}
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
    </main>
  );
}
