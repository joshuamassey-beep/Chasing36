"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "already" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    if (!supabase) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    const { error } = await supabase.from("waitlist").insert({ email: trimmed });
    if (!error) {
      setStatus("success");
    } else if (error.code === "23505") {
      // unique_violation — this email is already on the list
      setStatus("already");
    } else {
      setStatus("error");
    }
  }

  if (status === "success" || status === "already") {
    return (
      <p className="mt-4 text-sm font-semibold text-green">
        {status === "success"
          ? "You're on the list — we'll email you when it opens up."
          : "You're already on the list — we'll be in touch."}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-full border border-line bg-card2 px-4 py-2.5 text-sm text-text placeholder:text-dim focus:border-green focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="whitespace-nowrap rounded-full bg-green px-5 py-2.5 text-sm font-bold text-[#0a1610] transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Notify me"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 sm:absolute sm:mt-10">
          Something went wrong — try again in a moment.
        </p>
      )}
    </form>
  );
}
