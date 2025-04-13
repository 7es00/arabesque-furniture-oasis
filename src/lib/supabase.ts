
import { createClient } from '@supabase/supabase-js';

// These should be replaced with your actual Supabase URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if we have the required environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase URL or anon key. Please add these to your environment variables.');
  
  // For development purposes only - remove in production
  // This allows the app to continue loading without crashing
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
  
  // @ts-ignore - We're creating a mock client for development
  export const supabase = mockSupabase;
} else {
  // Create the real Supabase client
  export const supabase = createClient(supabaseUrl, supabaseAnonKey);
}
