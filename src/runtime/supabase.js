import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isValidSupabaseUrl = /^https:\/\/[^/\s]+\/?$/.test(supabaseUrl || "");
const isValidSupabaseKey = Boolean(
  supabaseAnonKey &&
  !/^[a-z][a-z0-9+.-]*:/i.test(supabaseAnonKey)
);

export const isSupabaseConfigured = isValidSupabaseUrl && isValidSupabaseKey;
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
