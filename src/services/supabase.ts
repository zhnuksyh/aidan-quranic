import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SUPABASE_URL = "https://bpvphhicisctyhqiiayk.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdnBoaGljaXNjdHlocWlpYXlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MzgwNjYsImV4cCI6MjA4OTUxNDA2Nn0.7IppTei76nIxiwx1zIZzaL21hsiQhSRKN3t3t9dYPJs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
