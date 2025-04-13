
import { createClient } from '@supabase/supabase-js';

// These should be replaced with your actual Supabase URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Define a mock Supabase client for development purposes
const mockSupabase = {
  from: () => ({
    insert: async () => ({ error: null, data: null }),
    select: async () => ({ error: null, data: [] }),
    update: async () => ({ error: null, data: null }),
    delete: async () => ({ error: null, data: null }),
  }),
  auth: {
    signUp: async () => ({ error: null, data: null }),
    signIn: async () => ({ error: null, data: null }),
    signOut: async () => ({ error: null, data: null }),
  },
};

// Create and export the Supabase client
// If the environment variables are missing, use the mock client
let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase URL or anon key. Please add these to your environment variables.');
  // Use mock client for development
  supabase = mockSupabase;
} else {
  // Create the real Supabase client
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
