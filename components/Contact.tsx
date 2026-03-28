"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[#1e3a5f] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c8963e] font-sans text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-5xl font-bold text-white mb-6">
            Say Hello
          </h2>
          <div className="w-16 h-1 bg-[#c8963e] mx-auto mb-6" />
          <p className="text-white/60 font-sans">
            Have a question? Want to challenge him to a chili cookoff? Go ahead.
            He&apos;ll get back to you when he&apos;s done with the Rita 2000.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🍹</div>
            <h3 className="font-serif text-2xl text-white font-bold mb-2">
              Message received!
            </h3>
            <p className="text-white/60 font-sans">
              Michael will get back to you. Probably after golf.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-white/70 text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First and last"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-[#c8963e] transition-colors"
                />
              </div>
              <div>
                <label className="block font-sans text-white/70 text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="So he can write back"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-[#c8963e] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-sans text-white/70 text-sm mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-[#c8963e] transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 font-sans text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#c8963e] hover:bg-[#b5832e] disabled:opacity-50 disabled:cursor-not-allowed text-white font-sans font-semibold py-3 rounded-xl transition-colors"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
