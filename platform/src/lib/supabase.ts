import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Browser client — safe to use client-side, scoped entirely by RLS.
// (This is the "Chasing 36" platform project, separate from the live race-to-36 project.)
//
// Deliberately doesn't throw if the env vars are missing (e.g. a preview build that hasn't
// had them configured yet) — a client-only feature's missing config shouldn't crash the page's
// build/prerender. Callers get `null` and should handle that (see WaitlistForm).
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
