import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eqqiraaxiskjjniydsti.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxcWlyYWF4aXNrampuaXlkc3RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyOTQ4NjksImV4cCI6MTk5MTg3MDg2OX0.WAI6BZHAkfeyEldhHVwKbGMNbJDPlLnKb7dFrTyXTDE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
